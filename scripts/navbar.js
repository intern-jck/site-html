
const toggleMenu = (event) => {
  const navbarContent = document.getElementById('navbar-content');
  navbarContent.classList.toggle('hide-menu');
};

window.onload = (event) => {
  toggleMenu();
};
