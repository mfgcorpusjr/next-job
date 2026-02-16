import {
  LucideCircleDashed,
  LucideMessagesSquare,
  LucideCircleX,
} from "lucide-react";

import StatisticsListItem from "@/features/job/components/StatisticsListItem";

import { Statistic } from "@/features/job/utils/types";

type StatisticsListProps = {
  statistics: Statistic;
};

export default function StatisticsList({ statistics }: StatisticsListProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <StatisticsListItem
        label="Pending Jobs"
        count={statistics.Pending}
        icon={LucideCircleDashed}
      />

      <StatisticsListItem
        label="Interviews Set"
        count={statistics.Interview}
        icon={LucideMessagesSquare}
      />

      <StatisticsListItem
        label="Jobs Declined"
        count={statistics.Declined}
        icon={LucideCircleX}
      />
    </div>
  );
}
