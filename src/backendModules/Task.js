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

   update(taskData = {}) {
      for (const key in taskData) {
         this[key] = taskData[key];
      }
      console.debug('Task updated', TaskHandler.getTask(this.#uid));
   }

   get uid() {
      return this.#uid;
   }

   set uid(uid) {
      console.error('Cannot set task UID');
      console.error({uid});
   }

   get title() {
      return this.#title;
   }

   set title(title) {
      this.#title = title;
   }

   get description() {
      return this.#description;
   }

   set description(description) {
      this.#description = description;
   }

   get dueDate() {
      return this.#dueDate;
   }

   set dueDate(dueDate) {
      this.#dueDate = dueDate;
   }

   get priority() {
      return this.#priority;
   }

   set priority(priority) {
      this.#priority = priority;
   }

   get notes() {
      return this.#notes;
   }

   set notes(notes) {
      this.#notes = notes;
   }

   get checklist() {
      return this.#checklist;
   }

   set checklist(checklist) {
      this.#checklist = checklist;
   }

   get projects() {
      return this.#projects;
   }

   set projects(projects) {
      this.#projects = projects;
   }

   get completed() {
      return this.#completed;
   }

   set completed(completed) {
      this.#completed = completed;
   }
}
