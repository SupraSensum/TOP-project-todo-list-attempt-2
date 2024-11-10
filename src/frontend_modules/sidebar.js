import StyleVariables from "./style-variables.js";
import createNewTask from "./task-handlers/create-new-task.js";
import { createTaskList } from "./create-task-list.js";

import "./sidebar.css";

export default function () {
   const sidebar = document.getElementById("sidebar");
   sidebar.style.backgroundColor = StyleVariables.celadon;

   sidebar.append(
      createAddTaskButton(),
      createTaskList(),
   );
   
   console.log('sidebar');
}

function createAddTaskButton() {
   const addTaskButton = document.createElement('button');
   addTaskButton.id = "addTaskButton";
   addTaskButton.textContent = 'Add Task';
   addTaskButton.addEventListener('click', () => createNewTask());

   return addTaskButton;
}