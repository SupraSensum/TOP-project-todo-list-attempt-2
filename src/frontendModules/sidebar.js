import './sidebar.css';

export default function() {
   console.debug('load sidebar');
   clearSidebar();
}

function clearSidebar() {
   const sidebar = document.getElementById("sidebar");
   sidebar.innerHTML = "";
}
