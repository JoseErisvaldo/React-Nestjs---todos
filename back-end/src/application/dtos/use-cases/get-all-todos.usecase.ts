import { ITodoRepository } from 'src/domain/entities/repositories/todo-repository.interface';
import { Todo } from 'src/domain/entities/todo.entity';

export class GetAllTodosUseCase {
  constructor(private readonly todoRepositoriy: ITodoRepository) {}

  async execute(): Promise<Todo[]> {
    return this.todoRepositoriy.findAll();
  }
}
