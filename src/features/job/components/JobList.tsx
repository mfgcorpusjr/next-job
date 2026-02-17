import Link from "next/link";

import { Button } from "@/components/ui/button";
import EmptyList from "@/components/EmptyList";
import SectionTitle from "@/components/SectionTitle";
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

  return (
    <div className="space-y-12">
      <div className="space-y-8">
        <SectionTitle
          text={`${jobs.length} job${jobs.length > 1 ? "s" : ""} found`}
        />

        <div className="grid sm:grid-cols-2 gap-8">
          {jobs.map((job) => (
            <JobListItem key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}
