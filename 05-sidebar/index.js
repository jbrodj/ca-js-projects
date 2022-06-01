// Grab the buttons and sidebar menu
const sidebarBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn')
const sidebarMenu = document.querySelector('.sidebar')

// Let's do a standalone callback here because both event listeners can use the same one. 
function toggleSidebar() {
  sidebarMenu.classList.toggle('show-sidebar');
}

// Hamburger click
sidebarBtn.addEventListener('click', toggleSidebar);

// Exit button click
closeBtn.addEventListener('click', toggleSidebar);