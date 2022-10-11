import { useDispatch, useSelector } from 'react-redux';
import { changeFormTitleInput } from '../../../features/todos/todosSlice';

export const FormInputs = ({ titleRef }) => {
    const { form } = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <div className="d-flex flex-column gap-2">
            <input
                autocomplete="off"
                className="form-control"
                name="title"
                onInput={(e) => dispatch(changeFormTitleInput(e.target.value))}
                placeholder="Task title"
                ref={titleRef}
                required
                type="text"
                value={form.titleInput}
            />
            <input type="hidden" name="id" value={form.idInput} />
        </div>
    );
};
