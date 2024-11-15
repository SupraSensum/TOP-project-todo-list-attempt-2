import Task from "./Task.js";

export default class TaskHandler {
   constructor() {

   }

   static #tasks = [];

   static get tasks() {
      return TaskHandler.#tasks;
   }
 
   static saveTask(task) {
      TaskHandler.#tasks.push(task);
   }

   static deleteTask(uid) {
      TaskHandler.#tasks = TaskHandler.#tasks.filter((task) => task.uid !== uid);
   }

   static uidExists(uid) {
      return TaskHandler.#tasks.some((task) => task.uid === uid);
   }
   
   createNewTask(taskData) {
      TaskHandler.saveTask(new Task(taskData));
   }
}
