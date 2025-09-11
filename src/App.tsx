import { useState } from 'react'
import TaskItem from './components/taskItem.tsx'
import TaskTag from './components/taskTag.tsx'
import WeatherItem from './components/weatherItem.tsx'

import catPlaceholder from './assets/cat-placeholder.jfif'

import type { tasksType } from './interfaces/taskType.ts'

function App() { //Note that this code doesn't mount right now due to undefined variables



  const initialTasks: tasksType[] = [];
  const emptyTask: tasksType = {
    titel: "",
    description: "",
    tags: "",
  }
  const [tasks, setTasks] = useState<tasksType[]>(initialTasks);
  const [newTask, setNewTask] = useState<tasksType>(emptyTask);

  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>, field : keyof tasksType) => {
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
    <div className='app'>
      <div className="apiContent">
        <div className="weather">
          <div className='weather__main'></div>
          <div className='weather__details'>

          </div>
        </div>
        <div className="catPic">
          <h2> <i></i>Daily Cat</h2>
          <img src={catPlaceholder} alt="Cat of the Day" />
          <p><i></i>Photo of teh Day</p>

        </div>
      </div>
      <div className="toDo">
        <h2> <i></i>Active Tasks {/* activeTaskCount */}</h2>
        <ul className='toDo__list'>
          {tasks.map((task, index) => (
            <li key={index}>
              <TaskItem titel={task} description='' tags='' />
            </li>
          ))}
        </ul>
      </div>
      <div className="taskManagment">
        <div className="addTask">
          <h2><i></i>Add New Task</h2>
          <div className='addTask__input'>
            <label htmlFor="newTask">Task</label>
            <input type="text" id="newTask" placeholder='Enter task...' value={newTask.titel} onChange={(e=>handleTaskChange(e, "titel"))} />
            <label htmlFor="taskDescription">Description</label>
            <input type="text" id="taskDescription" placeholder='Enter task description...' value={newTask.description} onChange={(e)=>handleTaskChange(e, "description")} />
            <label htmlFor="taskTag">Tags</label>
            <input type="checkbox" id='taskTag' />
            <button onClick={handleAddTask}>Add task</button>
          </div>
        </div>
        <div className="completedTasks">
          <h2><i></i>Completed Tasks {/* completedTaskCount */}</h2>
          <div className='completedTasks__list'>

          </div>
        </div>
      </div>

    </div>
  )
};

export default App;
