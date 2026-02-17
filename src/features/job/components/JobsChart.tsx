"use client";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";

import { Chart } from "@/features/job/utils/types";

const chartConfig = {
  count: {
    label: "Count",
    color: "#7C39ED",
  },
} satisfies ChartConfig;

type JobsChartProps = {
  data: Chart[];
};

export default function JobsChart({ data }: JobsChartProps) {
  return (
    <Card className="w-full border-border/50 shadow-none">
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="min-h-50 max-h-96 w-full"
        >
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />

            <ChartTooltip content={<ChartTooltipContent />} />

            <ChartLegend content={<ChartLegendContent />} />

            <Bar dataKey="count" fill="var(--color-count)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
