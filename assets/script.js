// Tiny helpers: collapse + current year.
document.getElementById('year').textContent = new Date().getFullYear();
function setHeaderOffset() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const h = Math.ceil(header.getBoundingClientRect().height);
  document.documentElement.style.setProperty('--header-offset', `${h + 10}px`); // +10 for breathing room
}

window.addEventListener('load', setHeaderOffset);
window.addEventListener('resize', setHeaderOffset);

document.querySelectorAll('.toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-target');
    const el = document.getElementById(id);
    const isOpen = el.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
    btn.textContent = isOpen ? 'Hide full publications' : 'Show all publications';
  });
});
