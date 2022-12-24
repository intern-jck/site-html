
const showMenu = (event) => {
  const navbarContent = document.getElementById('navbar-content');
  if (!navbarContent.style.display) {
    navbarContent.style.display = 'block';
  } else if (navbarContent.style.display == 'none') {
    navbarContent.style.display = 'block';
  } else if (navbarContent.style.display === 'block'){
    navbarContent.style.display = 'none';
  }
};
