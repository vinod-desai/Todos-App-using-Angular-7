import { Injectable } from '@angular/core';
import { Init } from './init-todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends Init {

  constructor() {
    super();
    // console.log('Todo Service Constructor');
    this.load();

  }

  getTodos() {
    return JSON.parse(localStorage.getItem('todos'));
  }

  addTodo(newTask) {
    const todos = JSON.parse(localStorage.getItem('todos'));
    // push new task to todos array
    todos.push(newTask);
    // Store todos in local storage
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  deleteTodo(delTask: string) {
    let todos = JSON.parse(localStorage.getItem('todos'));
    todos = todos.filter((todo) => todo.task !== delTask);
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
