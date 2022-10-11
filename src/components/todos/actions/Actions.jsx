import { useSelector } from 'react-redux';
import { ContTitle } from '../ContTitle';
import { Form } from './Form';

export const Actions = () => {
    const { form } = useSelector((state) => state.todos);

    return (
        <div
            className={`alert rounded p-3 ${
                form.editMode ? 'alert-warning' : 'alert-primary'
            }`}
        >
            <ContTitle title={form.editMode ? 'Edit task' : 'Add task'} />
            <Form />
        </div>
    );
};
