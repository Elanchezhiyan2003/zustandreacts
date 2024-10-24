import { StateCreator } from 'zustand';
import ITodo from '../types/ITodos';

const createTodoSlice: StateCreator<ITodo> = (set) => ({
  todos: [],
  addTodo: (todo: string) => set((state) => ({ todos: [...state.todos, todo] })),
  
  // Delete a todo by index
  deleteTodo: (index: number) => set((state) => ({
    todos: state.todos.filter((_, i) => i !== index),
  })),

  // Edit a todo by index
  editTodo: (index: number, newTodo: string) => set((state) => ({
    todos: state.todos.map((todo, i) => (i === index ? newTodo : todo)),
  })),
});

export default createTodoSlice;

