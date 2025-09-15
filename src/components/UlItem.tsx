import TaskItem from "./taskItem.tsx";

import type { handleTaskIcons, PropsUlType } from "../interfaces/taskType";


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
              <i className={props.trashIcon} onClick={() => props.handleDelete(index)}></i>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ulItem;