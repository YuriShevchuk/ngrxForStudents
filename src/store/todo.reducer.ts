import { createReducer, on } from '@ngrx/store';
import { Todo } from './todo.model';
import { addTodo, removeTodo, loadTodos } from './todo.actions';

export interface TodoState {
  todos: Todo[];
}

export const initialState: TodoState = {
  todos: [
    { id: '21', title: '11', completed: false }
  ],
}

export const todoReducer = createReducer(
  initialState,
  on(loadTodos, (state) => ({ ...state })),
  on(addTodo, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo],
  })),
  on(removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  })),
)
