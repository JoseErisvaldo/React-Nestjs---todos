import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTodoUseCase } from 'src/application/dtos/use-cases/create-todo.usecase';
import { GetAllTodosUseCase } from 'src/application/dtos/use-cases/get-all-todos.usecase';
import { TodoRepository } from 'src/infrastructure/database/todo.repository';

@Controller('todos')
export class TodoController {
  private readonly createTodo: CreateTodoUseCase;
  private readonly getAllTodos: GetAllTodosUseCase;

  constructor(private readonly todoRepository: TodoRepository) {
    this.createTodo = new CreateTodoUseCase(todoRepository);
    this.getAllTodos = new GetAllTodosUseCase(todoRepository);
  }

  @Post()
  async create(@Body() body: { title: string; description?: string }) {
    return this.createTodo.execute(body.title, body.description);
  }

  @Get()
  async findAll() {
    return this.getAllTodos.execute();
  }
}
