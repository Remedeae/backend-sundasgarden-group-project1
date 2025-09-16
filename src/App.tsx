import { useState } from 'react'
//import UlItem from './components/UlItem.tsx'
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

//Adding, moving and removing tasks-------------------------------------------------------------
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

  const handleRemoveTask = (index: number, taskArray: tasksType[], setTaskArray: React.Dispatch<React.SetStateAction<tasksType[]>>) => {
    setTaskArray(taskArray.filter((_, i) => i !== index))
  }

  const handleCompleteTask = (index: number) => {
    setCompletedTasks([...completedTasks, tasks[index]])
    handleRemoveTask(index, tasks, setTasks);
  }
//Editing tasks-----------------------------------------------------------
  const [editIndexActive, setEditIndexActive] = useState<number | null>(null);
  const [editIndexCompleted, setEditIndexCompleted] = useState<number | null>(null);

  const [taskEditStorage, setTaskEditStorage] = useState<tasksType>(emptyTask)

  const handleEditPopupActive = (index: number) => {
    setEditIndexActive(editIndexActive === index ? null : index)

  }

  const handleEditPopupComleted = (index: number) => {
    setEditIndexCompleted(editIndexCompleted === index ? null : index)
  //  console.log(completedTasks[index]);
  //  console.log(completedTasks[index].task);
  }

  const handleEditTaskChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof tasksType) => {
    setTaskEditStorage({
      ...taskEditStorage,
      [field]: e.target.value
    });
//    console.log(completedTasks[index]);
  }

  const handleEditCompleted = (index : number) => {

    setCompletedTasks([...completedTasks.filter((_, i) => i < index), taskEditStorage, ...completedTasks.filter((_, i) => i > index)])
    setTaskEditStorage(emptyTask);
    setEditIndexCompleted(null)
    console.log(...completedTasks.filter((_, i) => i < index))
    //console.log(completedTasks)
  }


  //We could potentially make components of all the 'parts' of the page, might help with readability
  return (
    <div className='app'>
      <div className="weather" >
        <WeatherItemMain />
        <WeatherItemDetail />
      </div>
      <DailyCatItem />
      {/* Active Tasks div */}
      <div className="toDo">
        <h3> <i className='fa-regular fa-clock'></i>{`Active Tasks (${tasks.length})`}</h3>
        <ul className="toDo__list">
          {tasks.map((t, index) => (
            <li key={index}>
              <i className='fa-regular fa-circle-check' onClick={() => handleCompleteTask(index)}></i>
              <div className="task__info">
                <div className={editIndexActive === index ? "popUp displayBlock" : "popUp"}>
                  <div className='editTask'>
                    <label htmlFor="editTask">Task:</label>
                    <input type="text" id="newTask" placeholder='Enter task...'/*  value={newTask.task} onChange={(e => handleNewTaskChange(e, "task"))} */ />
                    <label htmlFor="taskDescription">Description:</label>
                    <input type="text" id="taskDescription" placeholder='Enter task description...' /* value={newTask.description} onChange={(e) => handleNewTaskChange(e, "description")} */ />
                    <label htmlFor="taskTag">Tags:</label>
                    <input type="checkbox" id='taskTag' />
                    <button /* onClick={handleAddTask} */>Update task</button>
                  </div>
                </div>
                <div>
                  <h3>{tasks[index].task}</h3>
                  <p>{tasks[index].description}</p>
                  <div className="task__tags">

                  </div>
                </div>
              </div>
              <div className="task__action">
                <i className="fa-solid fa-pen-to-square" onClick={() => handleEditPopupActive(index)}></i>
                <i className='fa-regular fa-trash-can' onClick={() => handleRemoveTask(index, tasks, setTasks)}></i>
              </div>
            </li>
          ))}
        </ul>
      </div>

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
      {/* Completed tasks div */}
      <div className='completedTasks'>
        <h3> <i className='fa-regular fa-circle-check'></i>{`Completed Tasks (${completedTasks.length})`}</h3>
        <ul className='completedTasks__list'>
          {completedTasks.map((t, index) => (
            <li key={index}>
              <i className='fa-regular fa-circle-check'></i>
              <div className="task__info">
                <div className={editIndexCompleted === index ? "popUp displayBlock" : "popUp"}>
                  <div className='editTask'>
                    <label htmlFor="editCompleted">Task:</label>
                    <input type="text" id="editCompleted" placeholder={editIndexCompleted === index ? `${completedTasks[index].task}`: "Enter titel..."} value={taskEditStorage.task} onChange={(e => handleEditTaskChange(e, "task"))} />
                    <label htmlFor="editCompletedDescription">Description:</label>
                    <input type="text" id="editCompletedDescription" placeholder={editIndexCompleted === index ? `${completedTasks[index].description}`: "Enter description..."} value={taskEditStorage.description} onChange={(e) => handleEditTaskChange(e, "description")} />
                    <label htmlFor="editCompletedTag">Tags:</label>
                    <input type="checkbox" id='editCompletedTag' />
                    <button onClick={()=>handleEditCompleted(index)}>Update task</button>
                  </div>
                </div>
                <div>
                  <h3>{completedTasks[index].task}</h3>
                  <p>{completedTasks[index].description}</p>
                  <div className="task__tags">

                  </div>
                </div>
              </div>
              <div className="task__action">
                <i className="fa-regular fa-pen-to-square" onClick={() => handleEditPopupComleted(index)}></i>
                <i className='fa-regular fa-trash-can' onClick={() => handleRemoveTask(index, completedTasks, setCompletedTasks)}></i>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
};

export default App;
