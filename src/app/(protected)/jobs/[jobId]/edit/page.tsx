import { Metadata } from "next";

import UpsertJobForm from "@/features/job/components/UpsertJobForm";

import { getJob } from "@/features/job/utils/actions";

export const metadata: Metadata = {
  title: "Edit Job",
};

type EditJobPageProps = {
  params: Promise<{
    jobId: string;
  }>;
};

export default async function EditJobPage({ params }: EditJobPageProps) {
  const { jobId } = await params;
  const job = await getJob(jobId);

  return <UpsertJobForm job={job} />;
}
