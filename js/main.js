// How to run: this file is loaded by the HTML pages; open a page directly or use any static server.
// How it works: it controls the mobile menu and toggles the portrait's reversible rainbow state.

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
    const isRevealed = portraitReveal.classList.toggle('is-revealed');
    portraitReveal.setAttribute('aria-pressed', String(isRevealed));
    portraitReveal.setAttribute(
      'aria-label',
      isRevealed ? 'Blur portrait again' : 'Reveal clear portrait',
    );

    if (defaultLabel) defaultLabel.hidden = isRevealed;
    if (revealedLabel) revealedLabel.hidden = !isRevealed;
  });
}
