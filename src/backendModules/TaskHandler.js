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
   
   createNewTask(taskData) {
      
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