"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import SectionTitle from "@/components/SectionTitle";

import { Chart } from "@/features/job/utils/types";

type JobsChartProps = {
  data: Chart[];
};

export default function JobsChart({ data }: JobsChartProps) {
  return (
    <div className="space-y-12">
      <SectionTitle text="Monthly Applications" />

      <BarChart data={data} responsive style={{ height: "300px" }}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="date" />

        <YAxis width="auto" />

        <Tooltip labelStyle={{ color: "#000" }} />

        <Legend />

        <Bar
          dataKey="count"
          fill="#7C39ED"
          activeBar={{ fill: "#7C39ED" }}
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </div>
  );
}
