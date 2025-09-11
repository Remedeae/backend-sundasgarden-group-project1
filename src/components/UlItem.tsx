import type { tasksType } from "../interfaces/taskType";
import TaskItem from "./taskItem.tsx";
type PropsUlType = {
  TaskItemType: tasksType[],
  className: string,
  title: string,
  iconClassName: string
}

function ulItem(props: PropsUlType) {
  return (
    <div>
      <h2> <i className={props.iconClassName}></i>{`${props.title}(${props.TaskItemType.length})`}</h2>
      <ul className={props.className}>
        {props.TaskItemType.map((t, index) => (
          <li key={index}>
            <TaskItem task={t.task} description={t.description} tags={t.tags} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ulItem;