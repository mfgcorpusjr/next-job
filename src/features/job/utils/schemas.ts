import { z } from "zod";

import { statuses, types } from "@/features/job/utils/constants";

export const upsertJobSchema = z.object({
  position: z
    .string()
    .trim()
    .min(2, { error: "Position must be at least 2 characters" }),
  company: z
    .string()
    .trim()
    .min(2, { error: "Company must be at least 2 characters" }),
  location: z
    .string()
    .trim()
    .min(2, { error: "Location must be at least 2 characters" }),
  status: z.enum(statuses),
  type: z.enum(types),
});

export type UpsertJobFormData = z.infer<typeof upsertJobSchema>;
