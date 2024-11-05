import { createAction, props } from '@ngrx/store';
import { Todo } from './todo.model';

export const loadTodos = createAction('[Todo] Load');
export const addTodo = createAction('[Todo] Add', props<{ todo: Todo }>());
export const removeTodo = createAction('[Todo] Remove', props<{ id: string }>());
