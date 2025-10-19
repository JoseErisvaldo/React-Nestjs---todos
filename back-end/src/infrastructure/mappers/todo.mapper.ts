import { Todo } from 'src/domain/entities/todo.entity';
import { TodoOrmEntity } from '../database/todo.orm-entity';

export class TodoMapper {
  static toDomain(entity: TodoOrmEntity): Todo {
    const todo = new Todo(entity.title, entity.description);
    todo.id = entity.id;
    todo.completed = entity.completed;
    todo.createdAt = entity.createdAt;
    return todo;
  }

  static toPersistence(todo: Todo): TodoOrmEntity {
    const entity = new TodoOrmEntity();
    entity.id = todo.id!;
    entity.title = todo.title;
    entity.description = todo.description!;
    entity.completed = todo.completed!;
    entity.createdAt = todo.createdAt!;
    return entity;
  }
}
