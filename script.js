const b = document.querySelector('.menu-btn');
const n = document.querySelector('.navlinks');

if (b && n) {
  b.addEventListener('click', () => n.classList.toggle('open'));
}

/* Cloudflare Web Analytics */
if (!document.querySelector('script[src*="static.cloudflareinsights.com/beacon.min.js"]')) {
  const cf = document.createElement('script');
  cf.type = 'module';
  cf.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  cf.setAttribute(
    'data-cf-beacon',
    '{"token":"51c1c61ded684e939312e111d2624723"}'
  );
  document.body.appendChild(cf);
}
// Widerruf-Link automatisch in allen Footern ergänzen
document.querySelectorAll('.footer-links').forEach(footer => {
  if (!footer.querySelector('a[href="widerruf.html"]')) {
    const link = document.createElement('a');
    link.href = 'widerruf.html';
    link.textContent = 'Widerruf';

    footer.appendChild(document.createTextNode(' · '));
    footer.appendChild(link);
  }
});
