import { Button } from "@/components/ui/button";


export default function NewTask() {
  return (
    <div className="w-96 rounded-3xl flex flex-col gap-4 p-4 mb-4 border shadow-md mt-5">
      <form className="flex flex-col gap-2">
        <input type="text" placeholder="Título" className="border p-2 rounded" />
        <textarea placeholder="Descrição" className="border p-2 rounded" />
        <Button type="submit" variant="outline" className="p-2 rounded cursor-pointer">Adicionar Tarefa</Button>
      </form>
    </div>
  );
}
