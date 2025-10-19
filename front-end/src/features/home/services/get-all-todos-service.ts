import z from "zod";
import getAllTodos from "../api/get-todos";
import { todosSchema } from "../types/get-todos";

export const getAllTodosSevice = {
  fetchAll: async () => {
    const data = await getAllTodos();
    const parsed = z.array(todosSchema).parse(data);
    return parsed;
  },
};
