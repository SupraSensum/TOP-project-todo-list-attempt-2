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

      const task = {
         uid,
         title,
         description,
         dueDate,
         priority,
         notes,
         checklist,
         projects,
         completed,
      };

      TaskHandler.saveTask(task);
   }
}
