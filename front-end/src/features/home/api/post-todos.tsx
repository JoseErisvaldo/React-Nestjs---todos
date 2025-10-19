import type { PostTodosSchema } from "../types/post-todos";

export default async function postAllTodos(): Promise<PostTodosSchema[]> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/todos`, {
    method: "POST",
  });
  if (!response.ok) {
    throw new Error("Erro ao salvar tarefa!");
  }
  return await response.json();
}
