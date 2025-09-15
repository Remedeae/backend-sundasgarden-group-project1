import { useState } from 'react'
import UlItem from './components/UlItem.tsx'
import WeatherItem from './components/weatherItem.tsx'
import DailyCatItem from './components/dailyCatItem.tsx'

import type { tasksType } from './interfaces/taskType.ts'
//import type { WeatherItemType } from './interfaces/weatherType.ts'

function App() {

  //variables as base for inputting to the "top" weather component from API
  //Maybe make objects out of hefty data chunks? I havn't assigned types to this data yet
  let city = "Helsingborg"
  let weather = {
    weather: "Heavy Snow",
    icon: "fa-regular fa-snowflake",
    color: "#9de6f0ff",
  }
  let temperature = "-10°C"

  //variables as a base for gathering data into the WeatherItems
  //(we'll probably need multiple so I guess this will be an array in the end)
  //Regardless I'd make imports in some way
  let weatherItemIcon = "fa-solid fa-temperature-full"
  let weatherItemTitel = "Feels like"
  let weatherItemInfo = "-1°C"
  let weatherItemIconColor = "#c76000ff"

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
  //We could potentially make components of all the 'parts' of the page, might help with readability
  return (
    <div className='app'>
      {/*       weather div */}
      <div className="weather" >
        <div className='weather__main'>
          <h2><i className="fa-solid fa-cloud-sun"></i>Weather</h2>
          <div>
            <p>{city}</p>
            <h1><i className={weather.icon} style={{ color: weather.color }}></i>{temperature}</h1>
            <p>{weather.weather}</p>
          </div>
        </div>
        <div className='weather__details'>
          <WeatherItem icon={weatherItemIcon} titel={weatherItemTitel} info={weatherItemInfo} color={weatherItemIconColor} />
        </div>
      </div>
      {/* Cat div */}
      <DailyCatItem />
      {/* ToDo list div */}
      <UlItem className="toDo" TaskItemType={tasks} title='Active Tasks' iconClassName='fa-regular fa-clock' completeIcon='fa-regular fa-circle-check' trashIcon='fa-regular fa-trash-can' />
      {/* Add task div */}
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
      {/* Completed task div */}
      <UlItem className='completedTasks' TaskItemType={completedTasks} title='Completed Tasks' iconClassName='fa-regular fa-circle-check' completeIcon='fa-regular fa-circle-check' trashIcon='' />


    </div>
  )
};

export default App;
