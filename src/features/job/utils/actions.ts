"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { startOfMonth, subMonths, format } from "date-fns";

import prisma from "@/lib/prisma";
import { upsertJobSchema } from "@/features/job/utils/schemas";
import { getUserIdOrRedirect, renderError } from "@/utils/actions";
import {
  UpsertJobProps,
  GetStatisticsDataReturnType,
  GetChartDataReturnType,
} from "@/features/job/utils/types";

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

export const getJobs = async () => {
  const userId = await getUserIdOrRedirect();

  const jobs = await prisma.job.findMany({
    where: {
      clerkId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return jobs;
};

export const upsertJob = async ({ id = "", formData }: UpsertJobProps) => {
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

export const getStatisticsData = async (): GetStatisticsDataReturnType => {
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

export const getChartData = async (): GetChartDataReturnType => {
  const userId = await getUserIdOrRedirect();

  const now = new Date();
  const sixMonthsAgo = startOfMonth(subMonths(now, 5));

  const jobs = await prisma.job.findMany({
    where: {
      clerkId: userId,
      createdAt: { gte: sixMonthsAgo },
    },
    select: { createdAt: true },
  });

  const referenceData = Array.from({ length: 6 }, (_, i) => {
    const monthDate = subMonths(now, i);
    return {
      date: format(monthDate, "yyyy-MM"),
      count: 0,
    };
  }).reverse();

  const counts = jobs.reduce(
    (acc, job) => {
      const month = format(job.createdAt, "yyyy-MM");
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  return referenceData.map((ref) => ({
    ...ref,
    count: counts[ref.date] || 0,
  }));
};
