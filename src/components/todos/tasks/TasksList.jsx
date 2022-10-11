import { useSelector } from 'react-redux';
import { TaskItem } from './TaskItem';

export const TasksList = () => {
    const { todos } = useSelector((state) => state.todos);

    return (
        <ul className="list-group">
            {todos.map((todo) => (
                <TaskItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};
