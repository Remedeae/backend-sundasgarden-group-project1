import TaskItem from "./taskItem.tsx";

import type { handleTaskIcons, PopUpClassType, PropsUlType } from "../interfaces/taskType";
import { useState } from "react";


function ulItem(props: PropsUlType & handleTaskIcons & PopUpClassType) {
  const displayNone: string = "popUp";
  const [popUpClass, setPopUpClass] = useState<string>(displayNone);

  const handleEditPopup = () => {
    popUpClass === displayNone ? setPopUpClass(`${displayNone} displayBlock`) : setPopUpClass(displayNone);

    console.log(popUpClass);
  }

  return (
    <div className={props.className}>
      <h3> <i className={props.iconClassName}></i>{`${props.title} (${props.TaskItemType.length})`}</h3>
      <ul className={`${props.className}__list`} onClick={handleEditPopup}>
        {props.TaskItemType.map((t, index) => (
          <li key={index}>
            <i className={props.completeIcon} onClick={() => props.handleComplete(index)}></i>
            <TaskItem popUpClass={popUpClass} task={t.task} description={t.description} tags={t.tags} />
            <div className="task__action">
              <i className={props.editIcon} onClick={handleEditPopup}></i>
              <i className={props.trashIcon} onClick={() => props.handleDelete(index, props.TaskItemType, props.setTask)}></i>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ulItem;