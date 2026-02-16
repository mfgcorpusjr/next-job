import { UpsertJobFormData } from "@/features/job/utils/schemas";

export type UpsertJobProps = {
  id?: string;
  formData: UpsertJobFormData;
};

export type Statistic = {
  Pending: number;
  Interview: number;
  Declined: number;
};

export type GetStatisticsDataReturnType = Promise<Statistic>;

export type Chart = {
  count: number;
  date: string;
};

export type GetChartDataReturnType = Promise<Chart[]>;
