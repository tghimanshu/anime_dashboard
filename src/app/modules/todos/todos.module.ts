import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsModule } from '../commons/commons.module';
import { AddTodoComponent } from 'src/app/pages/todos/add-todo/add-todo.component';
import { EditTodoComponent } from 'src/app/pages/todos/edit-todo/edit-todo.component';
import { TodoItemComponent } from 'src/app/pages/todos/todo-item/todo-item.component';
import { TodosComponent } from 'src/app/pages/todos/todos/todos.component';

@NgModule({
  declarations: [
    AddTodoComponent,
    EditTodoComponent,
    TodoItemComponent,
    TodosComponent,
  ],
  imports: [CommonModule, CommonsModule],
  exports: [
    CommonsModule,
    AddTodoComponent,
    EditTodoComponent,
    TodoItemComponent,
    TodosComponent,
  ],
})
export class TodosModule {}
