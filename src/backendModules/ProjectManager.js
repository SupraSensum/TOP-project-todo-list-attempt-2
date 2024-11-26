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

   constructor() {
      console.info(ProjectManager.listProjects());
   }
}