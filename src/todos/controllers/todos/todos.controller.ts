import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, ValidationPipe } from '@nestjs/common';
import { CreateTodoDto, UpdateTodoDto } from 'src/todos/dtos/Todo.dto';
import { TodosService } from 'src/todos/services/todos/todos.service';

@Controller('todos')
export class TodosController {
    constructor(private readonly todoService: TodosService) {}

    @Post()
    async createTodo(@Body(ValidationPipe) createTodoDto: CreateTodoDto){
        return this.todoService.createTodos(createTodoDto);
    }

    @Get()
    getTodos() {
        return this.todoService.getTodos();
    }

    @Get(':id')
    async getTodoById(@Param('id') id: number){
        return this.todoService.getTodosById(id);
    }

    @Put('update/:id')
    async updateUserById(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateTodoDto: UpdateTodoDto,
    ) {
      await this.todoService.updateTodo(id, updateTodoDto);
      return { message: 'Todo updated successfully' }
    }

    @Delete('delete/:id')
    async deleteUserById(@Param('id', ParseIntPipe) id: number) {
        await this.todoService.deleteTodo(id)
        return { message: 'Todo deleted successfully' };
      }
}
