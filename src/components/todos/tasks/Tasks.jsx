import { ContTitle } from '../ContTitle';
import { TasksCounter } from './TasksCounter';
import { TasksList } from './TasksList';

export const Tasks = () => {
    return (
        <div className="bg-light border rounded p-3">
            <ContTitle title="My tasks" />
            <TasksList />
            <TasksCounter />
        </div>
    );
};
