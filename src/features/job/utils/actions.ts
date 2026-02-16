"use server";

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

    return { status: "SUCCESS", message: "Job created" };
  } catch (e) {
    return renderError(e);
  }
};
