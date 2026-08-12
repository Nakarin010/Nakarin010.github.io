// How to run: this file is loaded by the HTML pages; open a page directly or use any static server.
// How it works: it controls the mobile menu, portrait reveal, and screenshot gallery sizing.

const navToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.navbar-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open navigation');
    });
  });
}

const portraitReveal = document.querySelector('.portrait-reveal');

if (portraitReveal) {
  const defaultLabel = portraitReveal.querySelector('.portrait-label-default');
  const revealedLabel = portraitReveal.querySelector('.portrait-label-revealed');

  portraitReveal.addEventListener('click', () => {
    if (portraitReveal.classList.contains('is-revealed')) return;

    portraitReveal.classList.add('is-revealed');
    portraitReveal.setAttribute('aria-pressed', 'true');
    portraitReveal.setAttribute('aria-label', 'Portrait revealed');
    portraitReveal.disabled = true;

    if (defaultLabel) defaultLabel.hidden = true;
    if (revealedLabel) revealedLabel.hidden = false;
  });
}

document.querySelectorAll('.project-proof-image img').forEach((image) => {
  const classifyScreenshot = () => {
    const frame = image.closest('.project-proof-image');

    if (!frame || !image.naturalWidth || !image.naturalHeight) return;

    frame.classList.toggle('is-portrait', image.naturalHeight > image.naturalWidth);
  };

  if (image.complete) {
    classifyScreenshot();
  } else {
    image.addEventListener('load', classifyScreenshot, { once: true });
  }
});
