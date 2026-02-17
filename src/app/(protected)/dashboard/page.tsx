import { Metadata } from "next";

import StatisticsList from "@/features/job/components/StatisticsList";
import JobsChart from "@/features/job/components/JobsChart";

import { getStatisticsData, getChartData } from "@/features/job/utils/actions";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const [statisticsData, chartData] = await Promise.all([
    getStatisticsData(),
    getChartData(),
  ]);

  return (
    <div className="space-y-24">
      <StatisticsList data={statisticsData} />

      <JobsChart data={chartData} />
    </div>
  );
}
