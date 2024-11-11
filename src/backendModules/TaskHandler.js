import * as DateFns from 'date-fns';

const exampleTasksArray = [
   {
      "uid": "task-uid-1",
      "title": "Task 1",
      "description": "Description 1",
      "dueDate": "2022-01-01",
      "priority": null,
      "notes": "Notes 1",
      "checklist": "Checklist 1",
      "projects": [],
      "completed": false
   },
];

export default class TaskHandler {
   constructor() {

   }

   static #tasks = [
      {
         "uid": "task-uid-1",
         "title": "Task 1",
         "description": "Description 1",
         "dueDate": "2022-01-01",
         "priority": null,
         "notes": "Notes 1",
         "checklist": "Checklist 1",
         "projects": [],
         "completed": true
      },
   ];

   static get tasks() {
      return TaskHandler.#tasks;
   }
 
   static set tasks(tasks) {
      console.warn('TaskHandler.#tasks is not meant to be modified directly. Use methods like TaskHandler.saveTask() or TaskHandler.deleteTask() instead.');
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

   #createTaskUID(dueDate) {
      const now = DateFns.format(new Date(), "yyyy-MM-dd_HH-mm-ss");
      let randomUuid = crypto.randomUUID();
      let newUid = `task-${now}-${randomUuid}`;

      while (TaskHandler.uidExists(newUid)) {
         randomUuid = crypto.randomUUID();
         newUid = `task-${now}-${randomUuid}`;
      }

      return newUid;
   }
   

}

class Task {
   #uid;
   #title;
   #description;
   #dueDate;
   #priority;
   #notes;
   #checklist;
   #projects;
   #completed;

   constructor(taskData) {
      this.uid = taskData.uid;
      this.title = taskData.title;
      this.description = taskData.description;
      this.dueDate = taskData.dueDate;
      this.priority = taskData.priority;
      this.notes = taskData.notes;
      this.checklist = taskData.checklist;
      this.projects = taskData.projects;
      this.completed = taskData.completed;
   }

   get uid() {
      return this.#uid;
   }

   set uid(value) {
      this.#uid = value;
   }

   get title() {
      return this.#title;
   }

   set title(value) {
      this.#title = value;
   }

   get description() {
      return this.#description;
   }

   set description(value) {
      this.#description = value;
   }

   get dueDate() {
      return this.#dueDate;
   }

   set dueDate(value) {
      this.#dueDate = value;
   }

   get priority() {
      return this.#priority;
   }

   set priority(value) {
      this.#priority = value;
   }

   get notes() {
      return this.#notes;
   }

   set notes(value) {
      this.#notes = value;
   }

   get checklist() {
      return this.#checklist;
   }

   set checklist(value) {
      this.#checklist = value;
   }

   get projects() {
      return this.#projects;
   }

   set projects(value) {
      this.#projects = value;
   }

   get completed() {
      return this.#completed;
   }

   set completed(value) {
      this.#completed = value;
   }
}
