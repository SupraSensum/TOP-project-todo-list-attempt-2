import showNewTaskFrom from "../frontendModules/createNewTask/showNewTaskForm.js";

import "./sidebar.css";

export default function () {
   const sidebar = document.getElementById("sidebar");

   sidebar.append(
      createAddTaskButton(),
   );
   
   console.log('sidebar');
}

function createAddTaskButton() {
   const addTaskButton = document.createElement('button');
   addTaskButton.id = "addTaskButton";
   addTaskButton.textContent = 'Add Task';
   addTaskButton.addEventListener('click', () => showNewTaskFrom());

   return addTaskButton;
}