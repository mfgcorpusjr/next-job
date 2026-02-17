import { Metadata } from "next";

import JobList from "@/features/job/components/JobList";

import { getJobs } from "@/features/job/utils/actions";

export const metadata: Metadata = {
  title: "Jobs",
};

export default async function JobsPage() {
  const jobs = await getJobs();

  return <JobList jobs={jobs} />;
}
