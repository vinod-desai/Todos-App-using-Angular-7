import { Component, OnInit } from '@angular/core';
import { Itodos } from './todos';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Itodos[];
  task: string;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
    /* this.todos = [
      {
        task: 'Learn Angular'
      },
      {
        task: 'Pay Electricity bill'
      },
      {
        task: 'Meet friends'
      },
      {
        task: 'Get Veggies'
      },
      {
        task: 'Go to gym'
      }
    ]; */
  }

  addTodo() {
    // console.log(this.task);
    /* if (this.task !== '') {
    this.todos.push({
      task: this.task
    }); */
    if (this.task !== '') {
      let newTask = {
        task: this.task
      };
      this.todos.push(newTask);
      this.todoService.addTodo(newTask);
    }
  }

  deleteTodo(task: string) {
    this.todos = this.todos.filter((todo) => todo.task !== task);
    this.todoService.deleteTodo(task);
  }

}
