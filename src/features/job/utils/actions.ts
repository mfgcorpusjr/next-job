"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { subMonths, startOfMonth, format, eachMonthOfInterval } from "date-fns";

import prisma from "@/lib/prisma";
import {
  UpsertJobFormData,
  upsertJobSchema,
} from "@/features/job/utils/schemas";
import { getUserIdOrRedirect, renderError } from "@/utils/actions";

type upsertJobProps = {
  id?: string;
  formData: UpsertJobFormData;
};

export const getJob = async (id: string) => {
  const userId = await getUserIdOrRedirect();

  const job = await prisma.job.findUnique({
    where: {
      clerkId: userId,
      id,
    },
  });

  if (job) {
    return job;
  }

  return redirect("/jobs");
};

export const upsertJob = async ({ id = "", formData }: upsertJobProps) => {
  const userId = await getUserIdOrRedirect();

  try {
    const validatedData = upsertJobSchema.parse(formData);

    await prisma.job.upsert({
      where: {
        id,
      },
      create: { ...validatedData, clerkId: userId },
      update: validatedData,
    });

    revalidatePath("/dashboard");
    revalidatePath("/jobs");

    return { status: "SUCCESS", message: id ? "Job updated" : "Job created" };
  } catch (e) {
    return renderError(e);
  }
};

export const getStatisticsData = async () => {
  const userId = await getUserIdOrRedirect();

  const data = await prisma.job.groupBy({
    by: ["status"],
    _count: {
      status: true,
    },
    where: {
      clerkId: userId,
    },
  });

  const statisticsData = data.reduce(
    (acc, item) => {
      acc[item.status] = item._count.status;

      return acc;
    },
    {} as { [key: string]: number },
  );

  return {
    Pending: 0,
    Interview: 0,
    Declined: 0,
    ...statisticsData,
  };
};

export const getChartData = async () => {
  const userId = await getUserIdOrRedirect();

  const now = new Date();
  const sixMonthsAgo = startOfMonth(subMonths(now, 5));

  const data = await prisma.job.findMany({
    where: {
      clerkId: userId,
      createdAt: { gte: sixMonthsAgo },
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  const monthInterval = eachMonthOfInterval({
    start: sixMonthsAgo,
    end: now,
  });

  const groups: Record<string, number> = {};
  monthInterval.forEach((date) => {
    groups[format(date, "yyyy-MM")] = 0;
  });

  data.forEach((d) => {
    const key = format(d.createdAt, "yyyy-MM");
    if (groups[key] !== undefined) {
      groups[key]++;
    }
  });

  const chartData = Object.entries(groups).map(([month, count]) => ({
    month,
    count,
  }));

  return chartData;
};
