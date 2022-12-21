
const toggleMenu = (event) => {
  const navbarContent = document.getElementById('navbar-content');
  navbarContent.classList.toggle('hide-menu');
  console.log(navbarContent)
};

window.onload = (event) => {
  toggleMenu();
};
