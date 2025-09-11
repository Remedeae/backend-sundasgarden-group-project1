import { useState } from 'react'
import UlItem from './components/UlItem.tsx'

import catPlaceholder from './assets/cat-placeholder.jfif'

import type { tasksType } from './interfaces/taskType.ts'

function App() {

  const initialTasks: tasksType[] = [];
  const emptyTask: tasksType = {
    task: "",
    description: "",
    tags: "",
  }
  const [tasks, setTasks] = useState<tasksType[]>(initialTasks);
  const [newTask, setNewTask] = useState<tasksType>(emptyTask);
  const [completedTasks, setCompletedTasks] = useState<tasksType[]>(initialTasks);

  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof tasksType) => {
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
      <div className="weather" >
        <div className='weather__main'></div>
        <div className='weather__details'>

        </div>
      </div>
      <div className="catPic">
        <h2> <i></i>Daily Cat</h2>
        <img src={catPlaceholder} alt="Cat of the Day" />
        <p><i></i>Photo of the Day</p>
      </div>
      <UlItem className="toDo" TaskItemType={tasks} title='Active Tasks' iconClassName='' />
      <div className="addTask">
        <h2><i></i>Add New Task</h2>
        <div className='addTask__input'>
          <label htmlFor="newTask">Task</label>
          <input type="text" id="newTask" placeholder='Enter task...' value={newTask.task} onChange={(e => handleTaskChange(e, "task"))} />
          <label htmlFor="taskDescription">Description</label>
          <input type="text" id="taskDescription" placeholder='Enter task description...' value={newTask.description} onChange={(e) => handleTaskChange(e, "description")} />
          <label htmlFor="taskTag">Tags</label>
          <input type="checkbox" id='taskTag' />
          <button onClick={handleAddTask}>Add task</button>
        </div>
      </div>
      <UlItem className='completedTasks' TaskItemType={completedTasks} title='Completed Tasks' iconClassName='' />


    </div>
  )
};

export default App;
