
import type { tasksType } from "../interfaces/taskType";

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
let tasks: tasksType[] = initialTasks;
let newTask: tasksType = emptyTask;
let completedTasks: tasksType[] = initialTasks;

const handleAddTask = (newTask: tasksType) => {
  tasks = [...tasks, newTask];
}

const handleRemoveTask = (index: number) => {
  tasks = (tasks.filter((_, i) => i !== index))
}

const handleCompleteTask = (index: number) => {
  completedTasks = [...completedTasks, tasks[index]];
  handleRemoveTask(index);
}

handleAddTask(newTask);
handleAddTask(cssTestTask);

console.log(tasks);
console.log(completedTasks);
console.log("-".repeat(40))

//handleRemoveTask(0);
handleCompleteTask(0);

console.log(tasks);
console.log(completedTasks);