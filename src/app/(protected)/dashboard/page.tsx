import { Metadata } from "next";

import StatisticsList from "@/features/job/components/StatisticsList";
import JobsChart from "@/features/job/components/JobsChart";

import { getStatisticsData, getChartData } from "@/features/job/utils/actions";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const statistics = await getStatisticsData();
  const charts = await getChartData();

  return (
    <div className="space-y-24">
      <StatisticsList statistics={statistics} />

      <JobsChart charts={charts} />
    </div>
  );
}
