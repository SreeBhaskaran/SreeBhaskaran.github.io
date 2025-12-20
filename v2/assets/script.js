// Year in footer
const y = document.getElementById('year');
if (y) y.textContent = String(new Date().getFullYear());

// Open external links in new tabs automatically
document.querySelectorAll('a[href^="http"]').forEach(a => {
  a.target = "_blank";
  a.rel = "noopener noreferrer";
});
