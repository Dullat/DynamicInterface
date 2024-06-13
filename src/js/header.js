const toggledMenuDropBtn = document.querySelector('.menu-toggle-btn');
const toggledMenu = document.querySelector('.toggled-menu');
const sideBarBtn = document.querySelector('.toggle-btn');
const nav = document.querySelector('nav');

// drop

function headerScript() {
  toggledMenuDropBtn.addEventListener('click', () => {
    toggledMenu.classList.toggle('active');
    toggledMenuDropBtn.classList.toggle('active');
  });

  window.addEventListener('click', (e) => {
    if (e.target !== toggledMenu && e.target !== toggledMenuDropBtn) {
      toggledMenu.classList.remove('active');
      toggledMenuDropBtn.classList.remove('active');
    }
  });

  sideBarBtn.addEventListener('click', () => {
    if (nav.classList.contains('active')) {
      nav.classList.remove('active');
      sideBarBtn.classList.remove('active');
      document.body.style.overflow = `unset`;
    } else if (!nav.classList.contains('active')) {
      nav.classList.add('active');
      sideBarBtn.classList.add('active');
      document.body.style.overflow = `hidden`;
    }
  });
}

export { headerScript };
