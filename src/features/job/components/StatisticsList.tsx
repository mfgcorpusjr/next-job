import {
  LucideCircleDashed,
  LucideMessagesSquare,
  LucideCircleX,
} from "lucide-react";

import StatisticsListItem from "@/features/job/components/StatisticsListItem";

import { Statistic } from "@/features/job/utils/types";

type StatisticsListProps = {
  data: Statistic;
};

export default function StatisticsList({ data }: StatisticsListProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <StatisticsListItem
        label="Pending Jobs"
        count={data.Pending}
        icon={LucideCircleDashed}
      />

      <StatisticsListItem
        label="Interviews Set"
        count={data.Interview}
        icon={LucideMessagesSquare}
      />

      <StatisticsListItem
        label="Jobs Declined"
        count={data.Declined}
        icon={LucideCircleX}
      />
    </div>
  );
}
