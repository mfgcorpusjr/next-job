import { Metadata } from "next";

import StatisticsList from "@/features/job/components/StatisticsList";

import { getStatisticsData, getChartData } from "@/features/job/utils/actions";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const statistics = await getStatisticsData();
  const chart = await getChartData();

  return (
    <div className="space-y-24">
      <StatisticsList statistics={statistics} />
    </div>
  );
}
