import { cn } from "@/lib/utils";

import { Badge } from "@/components/ui/badge";

type JobStatusProps = {
  status: string;
};

export default function JobStatus({ status }: JobStatusProps) {
  return (
    <Badge
      className={cn({
        "bg-orange-500/10 text-orange-500": status === "Pending",
        "bg-green-500/10 text-green-500": status === "Interview",
        "bg-red-500/10 text-red-500": status === "Declined",
      })}
    >
      {status}
    </Badge>
  );
}
