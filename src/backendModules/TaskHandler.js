import * as DateFns from 'date-fns';

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
      taskData.uid = this.#createTaskUID(taskData.dueDate);
      TaskHandler.saveTask(new Task(taskData));
   }
}
