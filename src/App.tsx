import taskItem from './components/taskItem.tsx'
import TaskTag from './components/taskTag.tsx'
import WeatherItem from './components/weatherItem.tsx'


function App() { //Note that this code doesn't mount right now due to undefined variables
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
          <img src={catPic} alt="Cat of the Day" />
          <p><i></i>Photo of teh Day</p>

        </div>
      </div>
      <div className="toDo">
        <h2> <i></i>Active Tasks {activeTaskCount}</h2>
        <div className='toDo__list'>

        </div>
      </div>
      <div className="taskManagment">
        <div className="addTask">
          <h2><i></i>Add New Task</h2>
          <div className='addTask__input'>
            <label htmlFor="newTask">Task</label>
            <input type="text" id="newTask" placeholder='Enter task...' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            <label htmlFor="taskDescription">Description</label>
            <input type="text" id="taskDescription" placeholder='Enter task description...' value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
            <label htmlFor="taskTag">Tags</label>
            <input type="checkbox" id='taskTag' />
            <button onClick={handleAddTask}>Add task</button>
          </div>
        </div>
        <div className="completedTasks">
          <h2><i></i>Completed Tasks {completedTaskCount}</h2>
          <div className='completedTasks__list'>

          </div>
        </div>
      </div>

    </div>
  )
};

export default App;
