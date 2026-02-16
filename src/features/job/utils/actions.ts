"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

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
