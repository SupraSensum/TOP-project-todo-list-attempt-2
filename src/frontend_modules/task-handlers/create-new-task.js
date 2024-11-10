import * as TaskBoxCreationHelpers from "./helpers.js";
import { test } from "./helpers.js";
import "./create-new-task.css";

export default function () {
   const taskBoxId = 'newTaskBox';
   const newTaskBoxElement = TaskBoxCreationHelpers.createTaskBox(taskBoxId, 'Create a Task');

   document.body.appendChild(newTaskBoxElement);

   test();
}
