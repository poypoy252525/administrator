import { z } from "zod";

export const scheduleForm = z.object({
  examId: z.string(),
  date: z.string(),
  duration: z.number(),
  minute: z.number(),
  hour: z.number(),
});

export type scheduleZod = z.infer<typeof scheduleForm>;
