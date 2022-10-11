import { useDispatch } from 'react-redux';
import {
    toggleFormEditMode,
    toggleTask,
} from '../../../features/todos/todosSlice';

export const TaskItemTitle = ({ todo }) => {
    const dispatch = useDispatch();

    const onToggle = () => {
        dispatch(toggleTask(todo.id));
        dispatch(toggleFormEditMode(false));
    };

    return (
        <span
            className={`align-self-center user-select-none ${
                todo.done ? 'text-decoration-line-through text-muted' : ''
            }`}
            onClick={() => onToggle()}
            role="button"
        >
            {todo.title}
        </span>
    );
};
