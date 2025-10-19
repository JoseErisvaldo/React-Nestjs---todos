import type { TodosSchema } from "../types/get-todos";

export default async function getAllTodos(): Promise<TodosSchema[]> {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/todos`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Erro ao buscar tarefas!");
  }
  return await response.json();
}
