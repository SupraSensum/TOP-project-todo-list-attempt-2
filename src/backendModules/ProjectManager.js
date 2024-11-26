export default class ProjectManager {
   static #projects = {
      'default': [
         'uid_1',
         'uid_2',
         'uid_3',
         'uid_n'
      ],
      'weekend_plans': [
         'uid_1',
         'uid_2',
         'uid_3',
         'uid_n'
      ]
   }

   static listProjects() {
      return Object.keys(ProjectManager.#projects);
   }

   static addTaskToProject(task, project) {
      if (!ProjectManager.#projects[project]) {
         ProjectManager.#projects[project] = [];
         console.debug(`Created project "${project}".`);
      }

      if (ProjectManager.#projects[project].includes(task)) {
         console.warn(`Task with UID: ${task.uid} already exists in project "${project}".`);
      } else {
         ProjectManager.#projects[project].push(task);
         console.debug(`Task with UID: ${task.uid} added to project "${project}".`);
      }

      const isTaskInProject = ProjectManager.#projects[project].includes(task);
      if (!isTaskInProject) {
         console.warn(`Verification: Task with UID: ${task.uid} was not added to project "${project}".`);
      } else {
         console.debug(`Verification: Task with UID: ${task.uid} was successfully added to project "${project}".`);
      }
   }

   // static initialization block
   static {
      console.info('projects', ProjectManager.listProjects());
   }
}