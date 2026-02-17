import { Badge } from "@/components/ui/badge";

type JobStatusProps = {
  status: string;
};

export default function JobStatus({ status }: JobStatusProps) {
  const className =
    status === "Pending"
      ? "bg-orange-500/10 text-orange-500"
      : status === "Interview"
        ? "bg-green-500/10 text-green-500"
        : "bg-red-500/10 text-red-500";

  return <Badge className={className}>{status}</Badge>;
}
