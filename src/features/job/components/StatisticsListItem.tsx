import { LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type StatisticsListItemProps = {
  label: string;
  count: number;
  icon: LucideIcon;
};

export default function StatisticsListItem({
  label,
  count,
  icon: Icon,
}: StatisticsListItemProps) {
  return (
    <Card className="w-full border-border/50 shadow-none">
      <CardHeader className="flex flex-row justify-between items-center space-y-0 pb-2">
        <CardTitle className="text-sm font-bold uppercase tracking-wider">
          {label}
        </CardTitle>

        <div className="bg-muted/50 rounded-lg p-2">
          <Icon className="size-5 text-primary" />
        </div>
      </CardHeader>

      <CardContent>
        <div className="text-primary text-4xl font-extrabold tracking-tighter">
          {count}
        </div>

        <p className="mt-1 text-muted-foreground/60 text-[10px] font-bold uppercase tracking-widest">
          Total Applications
        </p>
      </CardContent>
    </Card>
  );
}
