export default function loadSidebar() {
   clearSidebar();
}

function clearSidebar() {
   const sidebar = document.getElementById("sidebar");
   sidebar.innerHTML = "";
}