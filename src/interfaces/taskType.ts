export type tasksType = {
  task: string;
  description: string;
  tags: string;
};

export type PopUpClassType = {
  popUpClass: string;
};

export type handleTaskIcons = {
  completeIcon: string;
  editIcon: string;
  trashIcon: string;
  setTask: React.Dispatch<React.SetStateAction<tasksType[]>>;
  handleComplete: (index: number) => unknown;
  handleDelete: (
    index: number,
    TaskItemType: tasksType[],
    setTask: React.Dispatch<React.SetStateAction<tasksType[]>>
  ) => unknown;
};

export type PropsUlType = {
  TaskItemType: tasksType[];
  className: string;
  title: string;
  iconClassName: string;
};

export type styleType = {
  display: string;
};
