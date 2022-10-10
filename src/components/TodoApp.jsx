import { useSelector } from 'react-redux';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

export const TodoApp = () => {
    const { todos, form } = useSelector((state) => state.todos);

    return (
        <div className="container py-5">
            <div className="row mb-3">
                <div className="col">
                    <h1 className="text-center">TODO APP</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="bg-light border rounded p-3">
                        <h2 className="text-center mb-3">My tasks</h2>
                        <TodoList />
                    </div>
                </div>
                <div className="col">
                    <div
                        className={`alert ${
                            form.editMode ? 'alert-warning' : 'alert-primary'
                        }  rounded p-3`}
                    >
                        <h2 className="text-center mb-3">
                            {form.editMode ? 'Edit task' : 'Add task'}
                        </h2>
                        <TodoAdd />
                    </div>
                </div>
            </div>
        </div>
    );
};
