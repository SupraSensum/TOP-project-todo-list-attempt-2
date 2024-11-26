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
      }

      if (!ProjectManager.#projects[project].includes(task)) {
         ProjectManager.#projects[project].push(task);
         task.projects.push(project);
         console.debug(`Task with UID: ${task} added to project "${project}".`);
      } else {
         console.debug(`Task with UID: ${task} already exists in project "${project}".`);
      }
      console.debug(`#projects.${project}: `, ProjectManager.#projects[project]);
   }

   // static initialization block
   static {
      console.info('projects', ProjectManager.listProjects());
   }
}