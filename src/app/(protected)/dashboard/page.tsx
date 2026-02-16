import { Metadata } from "next";

import { getStatisticsData, getChartData } from "@/features/job/utils/actions";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const statisticsData = await getStatisticsData();
  const chartData = await getChartData();

  return <div>DashboardPage</div>;
}
