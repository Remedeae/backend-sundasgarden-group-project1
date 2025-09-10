import taskItem from '../components/taskItem.tsx'
import TaskTag from '../components/taskTag.tsx'
import WeatherItem from '../components/weatherItem.tsx'


function App() {
  return (
    <>
      <div>
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
          <div className="addTask"></div>
          <div className="completedTasks"></div>
        </div>

      </div>

    </>
  )
}

export default App
