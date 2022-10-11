import { useSelector } from 'react-redux';

export const TasksCounter = () => {
    const { todos } = useSelector((state) => state.todos);

    return (
        <div className="d-flex justify-content-around mt-2 text-muted small">
            <span>Total: {todos.length}</span>
            <span>Pending: {todos.filter((todo) => !todo.done).length}</span>
        </div>
    );
};
