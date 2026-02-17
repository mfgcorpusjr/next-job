import Link from "next/link";

import { Button } from "@/components/ui/button";
import EmptyList from "@/components/EmptyList";
import JobListItem from "@/features/job/components/JobListItem";

import { Job } from "@/generated/prisma/client";

type JobListProps = {
  jobs: Job[];
};

export default function JobList({ jobs }: JobListProps) {
  if (jobs.length === 0) {
    return (
      <EmptyList
        title="No jobs yet"
        description="You haven't created any jobs yet. Get started by creating your first job."
        content={
          <Button asChild size="sm">
            <Link href="/jobs/create">Create Job</Link>
          </Button>
        }
      />
    );
  }

  return jobs.map((job) => <JobListItem key={job.id} job={job} />);
}
