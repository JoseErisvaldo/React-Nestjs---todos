import { ITodoRepository } from 'src/domain/entities/repositories/todo-repository.interface';
import { Todo } from 'src/domain/entities/todo.entity';

export class CreateTodoUseCase {
  constructor(private readonly todoRepository: ITodoRepository) {}

  async execute(title: string, description?: string): Promise<Todo> {
    const todo = new Todo(title, description);
    return this.todoRepository.create(todo);
  }
}
