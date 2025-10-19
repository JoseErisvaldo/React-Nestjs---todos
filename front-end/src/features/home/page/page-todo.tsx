import ListTodos from "../components/list-todos";
import NewTask from "../components/new-task";

export default function PageTodos() {
  return (
    <div className="w-screen flex flex-col justify-center items-center p-2">
      <h1 className="text-3xl font-bold border-b-4 border-b-gray-600">Minhas Tarefas</h1>
      <NewTask />
      <ListTodos />
    </div>
  );
}
