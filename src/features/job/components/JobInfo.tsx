import { LucideIcon } from "lucide-react";

type JobInfoProps = {
  icon: LucideIcon;
  text: string;
};

export default function JobInfo({ icon: Icon, text }: JobInfoProps) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="size-4 text-muted-foreground" />

      <span className="text-sm text-muted-foreground">{text}</span>
    </div>
  );
}
