
import { useState } from "react";
import type { tasksType } from "../interfaces/taskType";

function AddTaskItem() {
  //Placeholder to work on the css, could be used for storage of previos data
  const cssTestTask: tasksType = {
    task: "Meow",
    description: "Mom give me treats NOW!",
    tags: "",
  }
  const initialTasks: tasksType[] = [cssTestTask]; //reset to "" when testing is complete
  const emptyTask: tasksType = {
    task: "",
    description: "",
    tags: "",
  }
  const [tasks, setTasks] = useState<tasksType[]>(initialTasks);
  const [newTask, setNewTask] = useState<tasksType>(emptyTask);
  const [completedTasks, setCompletedTasks] = useState<tasksType[]>(initialTasks);

  const handleNewTaskChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof tasksType) => {
    setNewTask({
      ...newTask,
      [field]: e.target.value
    });
  }

  const handleAddTask = () => {
    setTasks((t) => [...t, newTask]);
    setNewTask(emptyTask);
  }
    return (
        <div className="addTask">
        <h2><i className="fa-solid fa-circle-plus"></i>Add New Task</h2>
        <div className='addTask__input'>
          <label htmlFor="newTask">Task:</label>
          <input type="text" id="newTask" placeholder='Enter task...' value={newTask.task} onChange={(e => handleNewTaskChange(e, "task"))} />
          <label htmlFor="taskDescription">Description:</label>
          <input type="text" id="taskDescription" placeholder='Enter task description...' value={newTask.description} onChange={(e) => handleNewTaskChange(e, "description")} />
          <label htmlFor="taskTag">Tags:</label>
          <input type="checkbox" id='taskTag' />
          <button onClick={handleAddTask}><i className="fa-solid fa-plus"></i>Add new task</button>
        </div>
      </div>
    )
}

export default AddTaskItem