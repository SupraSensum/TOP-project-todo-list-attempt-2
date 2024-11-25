import loadSidebar from './frontendModules/sidebar.js';
import loadContent from './frontendModules/content.js';
import loadFooter from './frontendModules/footer.js';
import Task from './backendModules/Task.js';

import './cssReset.css';
import './body.css';

loadSidebar();

window.Task = Task;

for (let i = 0; i < 1000; i++) {
   new Task({
      title: `I AM YOU${'U'.repeat(i)}`,
      description: '',
      dueDate: 'SUCK MY BALLS',
      priority: 1,
      notes: '',
      checklist: '',
      projects: [],
      completed: false,
   })
}
