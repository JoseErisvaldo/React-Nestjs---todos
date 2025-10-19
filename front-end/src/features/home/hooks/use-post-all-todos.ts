import { useCallback, useEffect, useState } from "react";
import type { TodosSchema } from "../types/get-todos";
import { getAllTodosSevice } from "../services/get-all-todos-service";

export function useGetAllTodos() {
  const [todos, setTodos] = useState<TodosSchema[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const fetchTodos = useCallback(() => {
    setLoading(true);
    setError(null);

    getAllTodosSevice
      .fetchAll()
      .then((data) =>
        setTodos(
          data.map((item) => ({
            ...item,
          })),
        ),
      )
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return { todos, loading, error };
}
