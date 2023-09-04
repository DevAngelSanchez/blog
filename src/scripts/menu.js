
const hamburgerMenu = document.querySelector('.hamburger');
hamburgerMenu.addEventListener('click', (e) => {
  const nav = document.querySelector('.nav-links');
  nav.classList.toggle('expanded');
});