import { useState } from 'react'
import UlItem from './components/UlItem.tsx'
import WeatherItemDetail from './components/weatherItemDetail.tsx'
import WeatherItemMain from './components/weatherItemMain.tsx'
import DailyCatItem from './components/dailyCatItem.tsx'

import type { tasksType } from './interfaces/taskType.ts'

function App() {

 
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

  const handleRemoveTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }
   
  //We could potentially make components of all the 'parts' of the page, might help with readability
  return (
    <div className='app'>
      <div className="weather" >
        <WeatherItemMain />
        <WeatherItemDetail />
      </div>
      <DailyCatItem />
      <UlItem
        className="toDo"
        TaskItemType={tasks}
        title='Active Tasks'
        iconClassName='fa-regular fa-clock'
        completeIcon='fa-regular fa-circle-check'
        trashIcon='fa-regular fa-trash-can'
        handleDelete={handleRemoveTask}
      />
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
      <UlItem
        className='completedTasks'
        TaskItemType={completedTasks}
        title='Completed Tasks'
        iconClassName='fa-regular fa-circle-check'
        completeIcon='fa-regular fa-circle-check'
        trashIcon=''
        handleDelete={() => { }}
      />


    </div>
  )
};

export default App;
