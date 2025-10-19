import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoOrmEntity } from './todo.orm-entity';
import { Todo } from '../../domain/entities/todo.entity';
import { TodoMapper } from '../mappers/todo.mapper';
import { ITodoRepository } from 'src/domain/entities/repositories/todo-repository.interface';

@Injectable()
export class TodoRepository implements ITodoRepository {
  constructor(
    @InjectRepository(TodoOrmEntity)
    private readonly repo: Repository<TodoOrmEntity>,
  ) {}

  async create(todo: Todo): Promise<Todo> {
    const entity = TodoMapper.toPersistence(todo);
    const saved = await this.repo.save(entity);
    return TodoMapper.toDomain(saved);
  }

  async findAll(): Promise<Todo[]> {
    const todos = await this.repo.find();
    return todos.map((t) => TodoMapper.toDomain(t));
  }

  async findById(id: string): Promise<Todo | null> {
    const entity = await this.repo.findOne({ where: { id } });
    return entity ? TodoMapper.toDomain(entity) : null;
  }

  async update(id: string, todo: Partial<Todo>): Promise<Todo | null> {
    await this.repo.update(id, todo);
    const updated = await this.repo.findOne({ where: { id } });
    if (!updated) return null;
    return TodoMapper.toDomain(updated);
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}
