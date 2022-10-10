import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addTask,
    changeFormIdInput,
    changeFormTitleInput,
    editTitle,
    toggleFormEditMode,
} from '../features/todos/todosSlice';
import { useForm } from '../hooks/useForm';

export const TodoAdd = () => {
    const { todos, form } = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const { title, onInputChange, onResetForm } = useForm({
        title: '',
    });

    const inputElement = useRef();

    const onFormSubmit = (e) => {
        e.preventDefault();
        const newTitle = form.titleInput.trim();
        if (!newTitle.length) return;

        if (form.editMode) {
            dispatch(toggleFormEditMode(false));
            dispatch(changeFormIdInput(''));
            dispatch(editTitle({ title: newTitle, id: form.idInput }));
        } else {
            const todo = {
                id: new Date().getTime(),
                title: newTitle,
                done: false,
            };
            dispatch(addTask(todo));
        }
        dispatch(changeFormTitleInput(''));

        onResetForm();
        inputElement.current.focus();
    };

    const onCancel = () => {
        if (form.editMode) {
            dispatch(toggleFormEditMode(false));
            dispatch(changeFormTitleInput(''));
            dispatch(changeFormIdInput(''));
        } else {
            dispatch(changeFormTitleInput(''));
        }
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input
                autocomplete="off"
                type="text"
                placeholder="Task title"
                className="form-control"
                name="title"
                onInput={(e) => {
                    dispatch(changeFormTitleInput(e.target.value));
                }}
                value={form.titleInput}
                ref={inputElement}
                required
            />
            <input type="hidden" name="id" value={form.idInput} />
            <div className="d-flex gap-2">
                <button
                    type="submit"
                    className={`btn ${
                        form.editMode ? 'btn-warning' : 'btn-primary'
                    } mt-3`}
                >
                    {form.editMode ? (
                        <>
                            <i class="bi bi-pencil-square me-2"></i>
                            <span>Update</span>
                        </>
                    ) : (
                        <>
                            <i class="bi bi-plus-circle"></i> <span>Add</span>
                        </>
                    )}
                </button>
                <button
                    type="button"
                    className="btn btn-secondary opacity-75 mt-3"
                    onClick={() => {
                        onCancel();
                    }}
                >
                    {form.editMode ? 'Cancel' : 'Reset'}
                </button>
            </div>
        </form>
    );
};
