import { Button } from "@/components/ui/button";
import { useGetAllTodos } from "../hooks/use-get-all-todos";

export default function ListTodos() {
  const { todos, loading, error } = useGetAllTodos();
  if (loading) return <div className="text-green-600">Carregando Tarefas...</div>;
  if (error) return <div className="text-red-600">Erro ao exibir os dados!</div>;
  return (
    <div className="mt-5">
      {todos.map((todo) => (
        <div key={todo.id} className="w-96 rounded-3xl flex flex-col gap-4 p-4 mb-4 border shadow-md">
          <div className="flex flex-col gap-2 p-4">
            <li><span className="font-bold">Título: </span>
            <span>{todo.title}</span></li>
            <li><span className="font-bold">Descrição: </span>
            <span>{todo.description}</span></li>
            <li><span className="font-bold">Criado em: </span>
            <span>{new Date(todo.createdAt ?? Date.now()).toLocaleString()}</span></li>
            <li><span className="font-bold">Status: </span>
            <span>{todo.completed ? " Completo" : " Pendente"}</span></li>
          </div>
          <span className="flex gap-2">
            <Button variant="outline" size="sm" className="cursor-pointer">Editar</Button>
            <Button variant="outline" size="sm" className="cursor-pointer">Deletar</Button>
          </span>
        </div>
      ))}
    </div>
  );
}
