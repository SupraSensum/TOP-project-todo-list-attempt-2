import * as DateFns from 'date-fns';

export default class Task {

   static #tasks = [];

   static get tasks() {
      return Task.#tasks;
   }

   static getTask(uid) {
      return Task.#tasks.find((task) => task.uid === uid);
   }

   static saveTask(task) {
      Task.#tasks.push(task);
   }

   static deleteTask(uid) {
      Task.#tasks = Task.#tasks.filter((task) => task.uid !== uid);
   }

   static uidExists(uid) {
      return Task.#tasks.some((task) => task.uid === uid);
   }

   static #createTaskUID() {
      const now = DateFns.format(new Date(), "yyyy-MM-dd_HH-mm-ss");
      let randomUuid = crypto.randomUUID();
      let newUid = `task-${now}-${randomUuid}`;

      while (Task.uidExists(newUid)) {
         randomUuid = crypto.randomUUID();
         newUid = `task-${now}-${randomUuid}`;
      }

      return newUid;
   }

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

      this.#validate();

      Task.saveTask(this);

      console.debug('Task created', this);
   }

   get uid() {
      return this.#uid;
   }

   set uid(uid) {
      console.error('Cannot set task UID');
      console.error({ uid });
   }

   get title() {
      return this.#title;
   }

   set title(title) {
      this.#title = title;
      this.#validate();
   }

   get description() {
      return this.#description;
   }

   set description(description) {
      this.#description = description;
      this.#validate();
   }

   get dueDate() {
      return this.#dueDate;
   }

   set dueDate(dueDate) {
      this.#dueDate = dueDate;
      this.#validate();
   }

   get priority() {
      return this.#priority;
   }

   set priority(priority) {
      this.#priority = priority;
      this.#validate();
   }

   get notes() {
      return this.#notes;
   }

   set notes(notes) {
      this.#notes = notes;
      this.#validate();
   }

   get checklist() {
      return this.#checklist;
   }

   set checklist(checklist) {
      this.#checklist = checklist;
      this.#validate();
   }

   get projects() {
      return this.#projects;
   }

   set projects(projects) {
      this.#projects = projects;
      this.#validate();
   }

   get completed() {
      return this.#completed;
   }

   set completed(completed) {
      this.#completed = completed;
      this.#validate();
   }

   delete() {
      Task.deleteTask(this.uid);
   }

   update(taskData = {}) {
      for (const key in taskData) {
         this[key] = taskData[key];
      }
      console.debug('Updated task:', Task.getTask(this.uid));
   }

   #validate() {
      const errors = [];

      if (this.#title.length < 2) {
         errors.push('Title must be at least 2 characters');
      }

      if (!this.#dueDate) {
         errors.push('Due date is required');
      }

      if (this.#priority === null) {
         errors.push('Priority is required');
      }

      if (errors.length) {
         console.debug('Task validation failed. Task not created.');
         console.debug(`tasks[${this.uid}] is `, Task.getTask(this.uid));
         
         throw new Error(errors.join('\n'));
      }
   }
}
