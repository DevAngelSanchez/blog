const hamburgerMenu = document.querySelector('.hamburger')!;

if (hamburgerMenu !== null) {
  hamburgerMenu.addEventListener('click', (e) => {
    const nav = document.querySelector('.nav-links')!;
    nav.classList.toggle('expanded');
  });
}