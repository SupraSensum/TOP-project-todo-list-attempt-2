import { el } from "date-fns/locale";
import StorageHandler from "./storage-handler.js";

const localStorageHandler = new StorageHandler();

export default class TaskHandler {
   constructor() {

   }

   static #tasks = {};

   static get tasks() {
      return TaskHandler.#tasks;
   }

   #createTaskUID(dueDate) {
      const baseUID = `${new Date().toISOString().replace(/[^\w]/gi, '')}-${dueDate.replace(/[^\w]/gi, '')}`;
      let uid = baseUID;
      let counter = 1;
      while (TaskHandler.tasks[uid]) {
         uid = `${baseUID}-${counter}`;
         counter++;
      }
      return uid;
   }

   #addTaskToStorage(uid, task) { // notice the singular 'task' and not 'tasks', lol
      TaskHandler.#tasks[uid] = task;

      if (StorageHandler.localStorageAvailable) {
         localStorageHandler.updateTasks(TaskHandler.tasks);
      }
   }

   #deleteTaskFromStorage(uid) {
      if (TaskHandler.tasks[uid]) {
         delete TaskHandler.tasks[uid];
         if (StorageHandler.localStorageAvailable) {
            localStorageHandler.updateTasks(TaskHandler.tasks);
         }
      }
   }

   createTask({
      title = '',
      description = '',
      dueDate = '',
      priority = null,
      notes = '',
      checklist = '',
      projects = [],
      completed = false,
   }) {
      const uid = this.#createTaskUID(dueDate);

      if (TaskHandler.tasks[uid]) {
         const msg = `Task UID: ${uid} already exists. Task was not created`;
         alert(msg);
         console.error(msg, TaskHandler.tasks[uid]);
         return;
      }

      const task = {
         title,
         description,
         dueDate,
         priority,
         notes,
         checklist,
         projects,
         completed,
      };

      this.#addTaskToStorage(uid, task);
   }

   getTask(uid) {
      return TaskHandler.tasks[uid];
   }

   updateTask(uid, task) {
      if (TaskHandler.tasks[uid]) {
         this.#addTaskToStorage(uid, task);
      } else {
         msg = `Task UID: ${uid} does not exist. Task was not updated.`;
         alert(msg);
         console.error(msg);
         console.error(task);
      }
   }

   deleteTask(uid) {
      if (TaskHandler.tasks[uid]) {
         this.#deleteTaskFromStorage(uid);
      } else {
         msg = `Task UID: ${uid} does not exist. Nothing to delete`;
         alert(msg);
         console.error(msg);
      }
   }
}