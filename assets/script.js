// Tiny helpers: collapse + current year.
document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-target');
    const el = document.getElementById(id);
    const isOpen = el.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
    btn.textContent = isOpen ? 'Hide full publications' : 'Show all publications';
  });
});
