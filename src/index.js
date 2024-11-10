import TaskHandler from "./backend_modules/task-handler.js";
import loadHomePage from "./frontend_modules/home-page.js";
import viewAllProjects from "./frontend_modules/view-all-projects.js";
import "./styles.css";

const DEBUG = true;
const taskHandler = new TaskHandler();
const homeButton = document.getElementById('homeButton');
const viewAllProjectsButton = document.getElementById('viewAllProjectsButton');

homeButton.addEventListener('click', () => loadHomePage());
viewAllProjectsButton.addEventListener('click', () => viewAllProjects());

loadHomePage();

if (DEBUG) {
   window.taskHandler = taskHandler;
}