import loadSidebar from './frontendModules/sidebar.js';
import loadContent from './frontendModules/content.js';
import loadFooter from './frontendModules/footer.js';
import TaskHandler from './backendModules/TaskHandler.js';

import './cssReset.css';
import './body.css';

loadSidebar();

window.TaskHandler = TaskHandler;
window.taskHandler = new TaskHandler();
