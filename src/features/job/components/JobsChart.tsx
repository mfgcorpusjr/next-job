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

import { Chart } from "@/features/job/utils/types";

type JobsChartProps = {
  charts: Chart[];
};

export default function JobsChart({ charts }: JobsChartProps) {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl text-center font-bold tracking-tight">
        Monthly Applications
      </h3>

      <BarChart data={charts} responsive style={{ height: "300px" }}>
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
