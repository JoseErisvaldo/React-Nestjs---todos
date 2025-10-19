import { z } from "zod";

export const postTodosSchema = z.object({
  title: z.string(),
  description: z.string().nullable().optional(),
});

export type PostTodosSchema = z.infer<typeof postTodosSchema>;
