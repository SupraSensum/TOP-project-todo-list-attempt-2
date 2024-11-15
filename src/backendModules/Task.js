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
      this.#uid = taskData.uid;
      this.#title = taskData.title;
      this.#description = taskData.description;
      this.#dueDate = taskData.dueDate;
      this.#priority = taskData.priority;
      this.#notes = taskData.notes;
      this.#checklist = taskData.checklist;
      this.#projects = taskData.projects;
      this.#completed = taskData.completed;
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
