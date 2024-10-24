interface ITodo{
    todos: Array<string>,
    addTodo: (todo: string)=> void;
    deleteTodo: (index: number) => void;
    editTodo: (index: number, newTodo: string) => void;
}

export default ITodo;