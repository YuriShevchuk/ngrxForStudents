import { Component, importProvidersFrom, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { Todo } from '../store/todo.model';
import { selectAllTodos } from '../store/todo.selectors';
import { v4 as uuidv4 } from 'uuid';
import { addTodo, removeTodo } from '../store/todo.actions';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngrxExample';
  private store = inject(Store);
  todos = signal<Todo[]>([{ id: '1', title: 'aa', completed: true }]);
  newTodoTitle = '';

  constructor() {
    this.store.select(selectAllTodos).subscribe((todos) => {
      this.todos.set(todos);
      console.log('todos,', todos);
    });
  }

  addNewTodo() {
    const newTodo: Todo = {
      id: uuidv4(),
      title: this.newTodoTitle,
      completed: true,
    };

    console.log('newTodo', newTodo);

    this.store.dispatch(addTodo({ todo: newTodo }));
    this.newTodoTitle = '';
  }

  deleteTodo(id: any) {
    console.log('id', id);
    this.store.dispatch(removeTodo({ id }));
  }
}
