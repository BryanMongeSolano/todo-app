import { useDispatch, useSelector } from 'react-redux';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
    const { todos } = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <>
            <ul className="list-group">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
            <div className="d-flex justify-content-around mt-2 text-muted small">
                <span>Total: {todos.length}</span>
                <span>
                    Pending: {todos.filter((todo) => !todo.done).length}
                </span>
            </div>
        </>
    );
};
