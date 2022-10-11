import { Actions } from './actions/Actions';
import { Tasks } from './tasks/Tasks';

export const App = () => {
    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">TODO APP</h1>

            <div className="row row-cols-1 row-cols-sm-2 g-4">
                <div className="col order-2 order-sm-1">
                    <Tasks />
                </div>
                <div className="col order-1 order-sm-2">
                    <Actions />
                </div>
            </div>
        </div>
    );
};
