import type { handleTaskIcons, tasksType } from "../interfaces/taskType";
import TaskItem from "./taskItem.tsx";
type PropsUlType = {
  TaskItemType: tasksType[],
  className: string,
  title: string,
  iconClassName: string,
}

function ulItem(props: PropsUlType & handleTaskIcons) {
  return (
    <div className={props.className}>
      <h3> <i className={props.iconClassName}></i>{`${props.title} (${props.TaskItemType.length})`}</h3>
      <ul className={`${props.className}__list`}>
        {props.TaskItemType.map((t, index) => (
          <li key={index}>
{/*             <i className={props.indexIcon}></i> */}
            <TaskItem task={t.task} description={t.description} tags={t.tags} />
            <div className="task__action">
              <i className={props.completeIcon}></i>
              <i className={props.trashIcon}></i>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ulItem;