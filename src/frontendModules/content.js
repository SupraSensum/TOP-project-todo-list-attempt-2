import './content.css';
import allTasks from './taskViews/allTasks';

export default function () {
   console.debug('load content.js');
   const contentContainer = document.getElementById('content');
   contentContainer.innerHTML = '';
   allTasks();
}