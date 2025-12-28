
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

interface RootState {
  todos: any[];
}

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <ul>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </ul>
  );
};

export default TodoList;