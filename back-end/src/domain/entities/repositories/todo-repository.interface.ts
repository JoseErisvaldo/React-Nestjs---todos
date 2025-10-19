import { Todo } from '../todo.entity';

export interface ITodoRepository {
  create(todo: Todo): Promise<Todo>;
  findAll(): Promise<Todo[]>;
  findById(id: string): Promise<Todo | null>;
  update(id: string, todo: Partial<Todo>): Promise<Todo | null>;
  delete(id: string): Promise<void>;
}
