import { Todo } from './todo.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];

  constructor() {
    this.loadState();
  }

  getTodos() {
    return this.todos;
  }

  getTodo(id: string) {
    return this.todos.find((t) => t.id === id);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.saveState();
  }

  updateTodo(id: string, updatedTodoFields: Partial<Todo>) {
    const todo: Todo = this.getTodo(id) as Todo;
    Object.assign(todo, updatedTodoFields);
    this.saveState();
  }

  deleteTodo(id: string) {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index === -1) return;

    this.todos.splice(index, 1);
    this.saveState();
  }

  saveState() {
    console.log('data saved');
    let data: {
      notes: object[];
      bookmarks: object[];
      todos: Todo[];
    } | null = JSON.parse(localStorage.getItem('data') as string);
    if (data) {
      data.todos = this.todos;
      localStorage.setItem('data', JSON.stringify(data));
    } else {
      localStorage.setItem(
        'data',
        JSON.stringify({
          notes: [],
          bookmarks: [],
          todos: [],
        })
      );
    }
    return this.todos;
  }
  loadState() {
    try {
      let data: {
        notes: object[];
        bookmarks: object[];
        todos: Todo[];
      } | null = JSON.parse(localStorage.getItem('data') as string);
      if (data) {
        this.todos = data.todos as Todo[];
      }
    } catch (e) {
      console.log('Error Loading json form local storage');
      console.log(e);
    }
  }
}
