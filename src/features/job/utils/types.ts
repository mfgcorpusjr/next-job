import { UpsertJobFormData } from "@/features/job/utils/schemas";

export type UpsertJobProps = {
  id?: string;
  formData: UpsertJobFormData;
};

export type GetStatisticsDataReturnType = Promise<{
  Pending: number;
  Interview: number;
  Declined: number;
}>;

export type GetChartDataReturnType = Promise<
  {
    count: number;
    date: string;
  }[]
>;
