const menuToggle = document.querySelector('.menu-toggle');
const mobileNavigation = document.querySelector('.mobile-navigation');

menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.classList.toggle('is-open');

    mobileNavigation.classList.toggle('is-open');

    menuToggle.setAttribute('aria-expanded', isOpen);
});
