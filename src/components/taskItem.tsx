//import TaskTag from "./taskTag";

import type { tasksType } from "../interfaces/taskType";

function TaskItem(props: tasksType) {
    return (
        <div className="task">
            <div className="task__info">
                <h3>{props.task}</h3>
                <p>{props.description}</p>
                <div className="task__tags">

                </div>

            </div>
            <div className="task__action">
                <div className="task__action-done">
                    <i></i>
                </div>
                <div className="task__action-trash">
                    <i></i>
                </div>
            </div>
        </div>
    )
}

export default TaskItem;