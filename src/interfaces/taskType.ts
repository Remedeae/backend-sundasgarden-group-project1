export type tasksType = {
  task: string,
  description: string,
  tags: string,
}

export type handleTaskIcons = {
  completeIcon: string,
  trashIcon: string,
  handleDelete : (index: number) => unknown,
}

export type PropsUlType = {
  TaskItemType: tasksType[],
  className: string,
  title: string,
  iconClassName: string,
}