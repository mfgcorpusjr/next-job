import Link from "next/link";
import { LucideBuilding2, LucideMapPin } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import JobStatus from "@/features/job/components/JobStatus";
import JobInfo from "@/features/job/components/JobInfo";
import DeleteJobButton from "@/features/job/components/DeleteJobButton";

import { Job } from "@/generated/prisma/client";

type JobListItemProps = {
  job: Job;
};

export default function JobListItem({ job }: JobListItemProps) {
  return (
    <Card>
      <CardHeader className="space-y-4">
        <div className="flex justify-between items-center">
          <Badge variant="outline">{job.type}</Badge>

          <JobStatus status={job.status} />
        </div>

        <CardTitle>{job.position}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-2">
        <JobInfo icon={LucideBuilding2} text={job.company} />

        <JobInfo icon={LucideMapPin} text={job.location} />
      </CardContent>

      <CardFooter className="flex items-center gap-4">
        <Button asChild variant="outline" size="sm" className="flex-1">
          <Link href={`/jobs/${job.id}/edit`}>Edit</Link>
        </Button>

        <DeleteJobButton id={job.id} />
      </CardFooter>
    </Card>
  );
}
