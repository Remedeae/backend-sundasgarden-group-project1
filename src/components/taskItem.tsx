import TaskTag from "./taskTag";

function TaskItem() {
    <div className="task">
        <div className="task__info">
        <h3>{props.task}</h3>
        <p>{props.taskDescription}</p>
        <div className="task__tags">
            
        </div>

        </div>
        <div className="task__check-done">
            <i></i>
        </div>
    </div>
}

export default TaskItem;