import { useDispatch, useSelector } from 'react-redux';
import {
    deleteTask,
    toggleFormEditMode,
} from '../../../features/todos/todosSlice';

export const TaskItemActions = ({ todo }) => {
    const { form } = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const onClickEdit = () => {
        dispatch(toggleFormEditMode({ newState: true, todo }));
    };

    const onClickDelete = () => {
        if (form.idInput === todo.id) {
            dispatch(toggleFormEditMode(false));
        }

        dispatch(deleteTask(todo.id));
    };

    return (
        <div className="d-flex gap-2">
            <button
                className="btn btn-sm btn-warning"
                disabled={todo.done}
                onClick={onClickEdit}
            >
                <i class="bi bi-pencil-square"></i>
            </button>
            <button className="btn btn-sm btn-danger" onClick={onClickDelete}>
                <i class="bi bi-trash3"></i>
            </button>
        </div>
    );
};
