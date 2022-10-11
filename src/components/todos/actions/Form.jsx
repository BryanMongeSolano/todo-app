import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addTask,
    changeFormTitleInput,
    editTitle,
    toggleFormEditMode,
} from '../../../features/todos/todosSlice';
import { FormActions } from './FormActions';
import { FormInputs } from './FormInputs';

export const Form = () => {
    const { form } = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const titleInputRef = useRef();

    const onFormSubmit = (e) => {
        e.preventDefault();

        const newTitle = form.titleInput.trim();

        if (!newTitle.length) return;

        if (form.editMode) {
            dispatch(toggleFormEditMode(false));
            dispatch(editTitle({ title: newTitle, id: form.idInput }));
        } else {
            dispatch(addTask(newTitle));
        }

        dispatch(changeFormTitleInput(''));
        titleInputRef.current.focus();
    };

    return (
        <form onSubmit={onFormSubmit}>
            <FormInputs titleRef={titleInputRef} />
            <FormActions />
        </form>
    );
};
