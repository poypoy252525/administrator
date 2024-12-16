import { z } from "zod";

export const examForm = z.object({
  questionnaires: z.array(
    z.object({
      question: z.string(),
      choices: z.string().array(),
      answer: z.string(),
      number: z.number(),
    })
  ),
  title: z.string(),
});

export type ExamForm = z.infer<typeof examForm>;
