import { TaskItemActions } from './TaskItemActions';
import { TaskItemTitle } from './TaskItemTitle';

export const TaskItem = ({ todo }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <TaskItemTitle todo={todo} />
            <TaskItemActions todo={todo} />
        </li>
    );
};
