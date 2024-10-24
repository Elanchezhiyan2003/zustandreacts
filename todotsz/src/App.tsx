import React, { useState } from 'react';
import useStore from './store/useStore';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';

const App: React.FC = (): JSX.Element => {
  const [todo, setTodo] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number | null>(null);  // State to track edit mode
  const todos = useStore(state => state.todos);
  const addTodo = useStore(state => state.addTodo);
  const deleteTodo = useStore(state => state.deleteTodo);
  const editTodo = useStore(state => state.editTodo);

  const handleAddOrUpdate = () => {
    if (editIndex !== null) {
      // If editing, update the todo
      editTodo(editIndex, todo);
      setEditIndex(null);  // Reset edit mode
    } else {
      // If not editing, add new todo
      addTodo(todo);
    }
    setTodo('');  // Reset input field
  };

  // Edit a todo
  const handleEdit = (index: number) => {
    setEditIndex(index);
    setTodo(todos[index]);  // Set the todo in the input for editing
  };

  // Delete a todo
  const handleDelete = (index: number) => {
    deleteTodo(index);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <Input type="text" value={todo} onChange={e => setTodo(e.currentTarget.value)} />
      <Button onClick={handleAddOrUpdate}>{editIndex !== null ? 'Update' : 'Add'}</Button>
      
      {todos.map((item, index) => (
        <div key={index}>
          <span>{item}</span>
          <Button onClick={() => handleEdit(index)}>Edit</Button>
          <Button onClick={() => handleDelete(index)}>Delete</Button>
        </div>
      ))}
    </div>
  );
};

export default App;
