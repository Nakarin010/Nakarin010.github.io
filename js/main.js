// How to run: this file is loaded by the HTML pages; open a page directly or use any static server.
// How it works: it controls the mobile menu, portrait reveal, business card flip/links, and screenshot gallery sizing.

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

const businessCard = document.querySelector('.business-card');

if (businessCard) {
  const frontFace = businessCard.querySelector('.business-card-front');
  const backFace = businessCard.querySelector('.business-card-back');
  let isFlipping = false;

  const setCardFace = (isFlipped) => {
    businessCard.classList.toggle('is-flipped', isFlipped);
    businessCard.setAttribute('aria-label', isFlipped ? 'Virtual business card showing contact links. Press Enter or Space to flip to the front.' : 'Virtual business card showing the front. Press Enter or Space to flip to the back.');

    if (frontFace) frontFace.setAttribute('aria-hidden', String(isFlipped));
    if (backFace) backFace.setAttribute('aria-hidden', String(!isFlipped));
  };

  const toggleCard = () => {
    if (isFlipping) return;

    const isFlipped = businessCard.classList.contains('is-flipped');
    const outgoingFace = isFlipped ? backFace : frontFace;
    const incomingFace = isFlipped ? frontFace : backFace;

    isFlipping = true;
    outgoingFace?.classList.add('is-leaving');

    window.setTimeout(() => {
      setCardFace(!isFlipped);
      incomingFace?.classList.add('is-entering');

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          incomingFace?.classList.remove('is-entering');
        });
      });

      window.setTimeout(() => {
        outgoingFace?.classList.remove('is-leaving');
        isFlipping = false;
      }, 180);
    }, 160);
  };

  businessCard.addEventListener('click', (event) => {
    if (event.target.closest('a')) return;
    toggleCard();
  });

  businessCard.addEventListener('keydown', (event) => {
    if (event.target.closest('a')) return;
    if (event.key !== 'Enter' && event.key !== ' ') return;

    event.preventDefault();
    toggleCard();
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
