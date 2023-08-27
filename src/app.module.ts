import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './type-orm/entities/Todo';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Qwe123!',
    database: 'tododb',
    entities: [Todo],
    synchronize: true,
  }),
  TodosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
