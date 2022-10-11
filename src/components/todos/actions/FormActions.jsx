import { useDispatch, useSelector } from 'react-redux';
import {
    changeFormTitleInput,
    toggleFormEditMode,
} from '../../../features/todos/todosSlice';

export const FormActions = () => {
    const { form } = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const onCancel = () => {
        if (form.editMode) {
            dispatch(toggleFormEditMode(false));
        } else {
            dispatch(changeFormTitleInput(''));
        }
    };

    return (
        <div className="d-flex gap-2 mt-3">
            <button
                type="submit"
                className={`btn ${
                    form.editMode ? 'btn-warning' : 'btn-primary'
                }`}
            >
                {form.editMode ? (
                    <>
                        <i class="bi bi-pencil-square"></i> <span>Update</span>
                    </>
                ) : (
                    <>
                        <i class="bi bi-plus-circle"></i> <span>Add</span>
                    </>
                )}
            </button>
            <button
                type="button"
                className="btn btn-secondary opacity-75"
                onClick={onCancel}
            >
                {form.editMode ? 'Cancel' : 'Reset'}
            </button>
        </div>
    );
};
