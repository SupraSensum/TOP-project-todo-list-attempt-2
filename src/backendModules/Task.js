import TaskHandler from "./TaskHandler.js";
import * as DateFns from 'date-fns';

export default class Task {
   #uid = '';
   #title = '';
   #description = '';
   #dueDate = '';
   #priority = null;
   #notes = '';
   #checklist = '';
   #projects = [];
   #completed = false;

   constructor(taskData) {
      this.#uid = Task.#createTaskUID();
      this.#title = taskData.title;
      this.#description = taskData.description;
      this.#dueDate = taskData.dueDate;
      this.#priority = taskData.priority;
      this.#notes = taskData.notes;
      this.#checklist = taskData.checklist;
      this.#projects = taskData.projects;
      this.#completed = taskData.completed;
   }

   static #createTaskUID() {
      const now = DateFns.format(new Date(), "yyyy-MM-dd_HH-mm-ss");
      let randomUuid = crypto.randomUUID();
      let newUid = `task-${now}-${randomUuid}`;

      while (TaskHandler.uidExists(newUid)) {
         randomUuid = crypto.randomUUID();
         newUid = `task-${now}-${randomUuid}`;
      }

      return newUid;
   }

   delete() {
      TaskHandler.deleteTask(this.#uid);
   }

   get uid() {
      return this.#uid;
   }

   get title() {
      return this.#title;
   }

   get description() {
      return this.#description;
   }

   get dueDate() {
      return this.#dueDate;
   }

   get priority() {
      return this.#priority;
   }

   get notes() {
      return this.#notes;
   }

   get checklist() {
      return this.#checklist;
   }

   get projects() {
      return this.#projects;
   }

   get completed() {
      return this.#completed;
   }
}
