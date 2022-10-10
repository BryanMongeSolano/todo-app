import { useDispatch, useSelector } from 'react-redux';
import {
    changeFormIdInput,
    changeFormTitleInput,
    deleteTask,
    toggleFormEditMode,
    toggleTask,
} from '../features/todos/todosSlice';

export const TodoItem = ({ todo }) => {
    const { todos, form } = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const onClickEdit = () => {
        dispatch(toggleFormEditMode(true));
        dispatch(changeFormTitleInput(todo.title));
        dispatch(changeFormIdInput(todo.id));
    };

    const onClickDelete = () => {
        if (form.idInput === todo.id) {
            dispatch(toggleFormEditMode(false));
            dispatch(changeFormTitleInput(''));
            dispatch(changeFormIdInput(''));
        }
        dispatch(deleteTask(todo.id));
    };

    return (
        <li className="list-group-item d-flex justify-content-between">
            <span
                className={`align-self-center ${
                    todo.done ? 'text-decoration-line-through text-muted' : ''
                }`}
                onClick={() => dispatch(toggleTask(todo.id))}
                style={{ cursor: 'pointer', userSelect: 'none' }}
            >
                {todo.title}
            </span>
            <div className="d-flex gap-2">
                <button
                    className="btn btn-sm btn-warning"
                    onClick={() => {
                        onClickEdit();
                    }}
                >
                    <i class="bi bi-pencil-square"></i>
                </button>
                <button
                    className="btn btn-sm btn-danger"
                    onClick={() => onClickDelete()}
                >
                    <i class="bi bi-trash3"></i>
                </button>
            </div>
        </li>
    );
};
