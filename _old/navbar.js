
function showMenu(event) {
  const navbarContent = document.getElementById('navbar-content');
  if (!navbarContent.style.display) {
    navbarContent.style.display = 'block';
  } else if (navbarContent.style.display == 'none') {
    navbarContent.style.display = 'block';
  } else if (navbarContent.style.display === 'block') {
    navbarContent.style.display = 'none';
  }
};


function addNavbar() {

  console.log('adding nav')

  const navbarDiv = document.getElementById('navbar');
  const navMenu = document.createElement('ul');

  const homeLink = document.createElement('li');
  const homeAnchor = document.createElement('a');
  homeAnchor.href = '/';
  homeAnchor.textContent = 'Home';

  const workLink = document.createElement('li');
  const workAnchor = document.createElement('a');
  workAnchor.href = './work.html';
  workAnchor.textContent = 'Work';

  const photosLink = document.createElement('li');
  const photosAnchor = document.createElement('a');
  photosAnchor.href = './photos.html';
  photosAnchor.textContent = 'Photos';

  const contactLink = document.createElement('li');
  const contactAnchor = document.createElement('a');
  contactAnchor.href = './contact.html';
  contactAnchor.textContent = 'Contact';

  homeLink.append(homeAnchor);
  workLink.append(workAnchor);
  photosLink.append(photosAnchor);
  contactLink.append(contactAnchor);

  navMenu.append(homeLink);
  navMenu.append(workLink);
  navMenu.append(photosLink);
  navMenu.append(contactLink);

  navbarDiv.append(navMenu);
}

window.onload = ((event) => {
  addNavbar();
});