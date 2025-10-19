import z from "zod";
import postAllTodos from "../api/post-todos";
import { postTodosSchema } from "../types/post-todos";

export const postAllTodosSevice = {
  create: async () => {
    const data = await postAllTodos();
    const parsed = z.array(postTodosSchema).parse(data);
    return parsed;
  }
};
