import type { tasksType } from "../interfaces/taskType";

function TaskItem(props: tasksType) {
    return (
        <div className="task__info">
            <h3>{props.task}</h3>
            <p>{props.description}</p>
            <div className="task__tags">

            </div>
        </div>
    )
}

export default TaskItem;