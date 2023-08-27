import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTodoDto, UpdateTodoDto } from 'src/todos/dtos/Todo.dto';
import { Todo } from 'src/type-orm/entities/Todo';
import { Repository } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepo: Repository<Todo>,
  ) {}

  async createTodos(createTodos: CreateTodoDto){
    const todo = await this.todoRepo.save(createTodos)

    return todo
  }

  getTodos() {
    return this.todoRepo.find();
  }

  async getTodosById(id: number) {
    const todo = await this.todoRepo.findOneBy({id})

    if (!todo) {
        throw new NotFoundException('Todo not found');
      }

    return todo
  }


  async updateTodo(id: number, updateTodo: UpdateTodoDto) {
    return this.todoRepo.update({id}, {...updateTodo} )
  }

  async deleteTodo(id: number) {
    const todo = await this.getTodosById(id);

    const deleteResult = await this.todoRepo.delete(id);

    if (deleteResult.affected === 0) {
        throw new HttpException('Todo not found', HttpStatus.BAD_REQUEST);
    }
  }
}
