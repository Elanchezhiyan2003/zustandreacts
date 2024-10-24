// import React, { useState } from 'react';
// import useStore from './store/useStore';
// import { Input } from './components/ui/input';
// import { Button } from './components/ui/button';

// const App: React.FC = (): JSX.Element => {
//   const [todo, setTodo] = useState<string>('');
//   const [editIndex, setEditIndex] = useState<number | null>(null);  // State to track edit mode
//   const todos = useStore(state => state.todos);
//   const addTodo = useStore(state => state.addTodo);
//   const deleteTodo = useStore(state => state.deleteTodo);
//   const editTodo = useStore(state => state.editTodo);

//   const handleAddOrUpdate = () => {
//     if (editIndex !== null) {
//       // If editing, update the todo
//       editTodo(editIndex, todo);
//       setEditIndex(null);  // Reset edit mode
//     } else {
//       // If not editing, add new todo
//       addTodo(todo);
//     }
//     setTodo('');  // Reset input field
//   };

//   // Edit a todo
//   const handleEdit = (index: number) => {
//     setEditIndex(index);
//     setTodo(todos[index]);  // Set the todo in the input for editing
//   };

//   // Delete a todo
//   const handleDelete = (index: number) => {
//     deleteTodo(index);
//   };

//   return (
//     <div className='w-96 h-96  px-10 mx-44 my-44 bg-slate-400 bg-opacity-40' >
//       <h1 className='px-28 py-2'>Todo List</h1>
//       <div className='flex gap-4' >
//       <Input type="text" value={todo} onChange={e => setTodo(e.currentTarget.value)} />
//       <Button onClick={handleAddOrUpdate}>{editIndex !== null ? 'Update' : 'Add'}</Button>
//       </div>
//       <div className='flex  '>
//       <div className='py-4 gap-2'>
//       {todos.map((item, index) => (
//         <div key={index} className='flex gap-14 py-2'>
//           <span>{item}</span>
//           <Button  onClick={() => handleEdit(index)}>Edit</Button>
//           <Button onClick={() => handleDelete(index)}>Delete</Button>
          
//         </div>
//       ))}
//       </div>
//       </div>
      
//     </div>
//   );
// };

// export default App;
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
      editTodo(editIndex, todo);
      setEditIndex(null);  // Reset edit mode
    } else {
      addTodo(todo);
    }
    setTodo('');  // Reset input field
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setTodo(todos[index]);
  };

  const handleDelete = (index: number) => {
    deleteTodo(index);
  };

  return (
    <div className="w-full max-w-md mx-auto my-20 p-6 bg-slate-200 rounded-lg shadow-md">
      <h1 className="text-center text-2xl font-bold text-gray-700 mb-4">Todo List</h1>
      <div className="flex gap-4 mb-4">
        <Input
          type="text"
          value={todo}
          onChange={e => setTodo(e.currentTarget.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
        />
        <Button onClick={handleAddOrUpdate} className="px-4 py-2  text-white rounded-md">
          {editIndex !== null ? 'Update' : 'Add'}
        </Button>
      </div>
      
      <div className="space-y-2">
        {todos.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-2 bg-white border rounded-md shadow-sm">
            <span className="text-gray-700">{item}</span>
            <div className="flex gap-2">
              <Button onClick={() => handleEdit(index)} className="px-3 py-1  text-white rounded-md">
                Edit
              </Button>
              <Button onClick={() => handleDelete(index)} className="px-3 py-1 text-white rounded-md">
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
