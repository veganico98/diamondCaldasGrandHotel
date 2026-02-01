document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  const toggle = document.querySelector('.nav-toggle');
  const closeBtn = document.querySelector('.nav-close');
  const overlay = document.querySelector('.nav-overlay');
  const links = document.querySelectorAll('.nav-links a');

  if (!header || !nav || !toggle || !overlay) return;

  const closeMenu = () => {
    header.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  const toggleMenu = () => {
    const isOpen = header.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  };

  toggle.addEventListener('click', toggleMenu);
  overlay.addEventListener('click', closeMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  links.forEach(link => link.addEventListener('click', closeMenu));

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
});
