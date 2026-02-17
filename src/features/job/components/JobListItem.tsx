import { Job } from "@/generated/prisma/client";

type JobListItemProps = {
  job: Job;
};

export default function JobListItem({ job }: JobListItemProps) {
  return <div>JobListItem</div>;
}
