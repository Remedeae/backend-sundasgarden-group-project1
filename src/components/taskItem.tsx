import { useState } from "react";
import type { PopUpClassType, tasksType } from "../interfaces/taskType";

function TaskItem(props: tasksType & PopUpClassType) {
  return (
    <div className="task__info">
      <div className={props.popUpClass}>
        <div className="editTask__input">
          <label htmlFor="editTask">Task:</label>
          <input
            type="text"
            id="newTask"
            placeholder="Enter task..." /*  value={newTask.task} onChange={(e => handleNewTaskChange(e, "task"))} */
          />
          <label htmlFor="taskDescription">Description:</label>
          <input
            type="text"
            id="taskDescription"
            placeholder="Enter task description..." /* value={newTask.description} onChange={(e) => handleNewTaskChange(e, "description")} */
          />
          <label htmlFor="taskTag">Tags:</label>
          <input type="checkbox" id="taskTag" />
          <button /* onClick={handleAddTask} */>Update task</button>
        </div>
      </div>
      <div>
        <h3>{props.task}</h3>
        <p>{props.description}</p>
        <div className="task__tags"></div>
      </div>
    </div>
  );
}

export default TaskItem;
