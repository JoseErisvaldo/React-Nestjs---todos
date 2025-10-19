import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoOrmEntity } from './infrastructure/database/todo.orm-entity';
import { TodoController } from './presentation/todo.controller';
import { TodoRepository } from './infrastructure/database/todo.repository';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: Number(process.env.DATABASE_PORT) || 5432,
      username: process.env.DATABASE_USERNAME || 'todo_user',
      password: process.env.DATABASE_PASSWORD || 'todo_pass',
      database: process.env.DATABASE_NAME || 'todo_db',
      entities: [TodoOrmEntity],
      synchronize: true,
      logging: true,
    }),
    TypeOrmModule.forFeature([TodoOrmEntity]),
  ],
  controllers: [TodoController],
  providers: [TodoRepository],
})
export class AppModule {}
