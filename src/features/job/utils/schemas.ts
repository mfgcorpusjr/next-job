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
  status: z.enum(statuses.map((s) => s.value)),
  type: z.enum(types.map((t) => t.value)),
});

export type UpsertJobFormData = z.infer<typeof upsertJobSchema>;
