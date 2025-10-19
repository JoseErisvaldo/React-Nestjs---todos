import { z } from "zod";

export const todosSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable().optional(),
  completed: z.boolean().nullable().optional(),
  createdAt: z.string().nullable().optional(),
});

export type TodosSchema = z.infer<typeof todosSchema>;
