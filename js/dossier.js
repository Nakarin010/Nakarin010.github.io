// Run: open index.html, projects.html, or a projects/*.html page using any static server.
// Purpose: enhance the dossier with accessible folders, a session lamp, and optional interaction sounds.
(() => {
  'use strict';
  const page = document.querySelector('.dossier-page');
  if (!page) return;
  page.classList.add('dossier-enhanced');
  const readState = (key, fallback) => {
    try { return sessionStorage.getItem(key) ?? fallback; } catch { return fallback; }
  };
  const saveState = (key, value) => {
    try { sessionStorage.setItem(key, value); } catch { /* Session preferences are optional. */ }
  };
  const reduceMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  let audio;
  let muted = readState('dossier-muted', 'false') === 'true';
  const soundControls = page.querySelectorAll('[data-sound-toggle]');
  const renderSound = () => soundControls.forEach((button) => {
    button.hidden = false;
    button.textContent = AudioContext ? `Sound: ${muted ? 'off' : 'on'}` : 'Sound: unavailable';
    button.setAttribute('aria-pressed', String(muted));
    button.setAttribute('aria-label', AudioContext ? `${muted ? 'Enable' : 'Mute'} interface sounds` : 'Interface sounds unavailable');
    button.disabled = !AudioContext;
  });
  renderSound();
  soundControls.forEach((button) => button.addEventListener('click', () => {
    muted = !muted;
    saveState('dossier-muted', String(muted));
    renderSound();
  }));
  const playSound = async (kind) => {
    if (muted || !AudioContext) return;
    try {
      audio ||= new AudioContext();
      if (audio.state === 'suspended') await audio.resume();
      if (muted || audio.state !== 'running') return;
      const now = audio.currentTime;
      const oscillator = audio.createOscillator();
      const gain = audio.createGain();
      oscillator.type = 'triangle';
      oscillator.frequency.setValueAtTime(kind === 'lamp' ? 700 : 230, now);
      oscillator.frequency.exponentialRampToValueAtTime(kind === 'lamp' ? 180 : 95, now + .09);
      gain.gain.setValueAtTime(.0001, now);
      gain.gain.exponentialRampToValueAtTime(.022, now + .005);
      gain.gain.exponentialRampToValueAtTime(.0001, now + .13);
      oscillator.connect(gain);
      gain.connect(audio.destination);
      oscillator.start(now);
      oscillator.stop(now + .14);
      oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
    } catch { /* Unsupported or blocked audio must never prevent an interaction. */ }
  };
  const board = page.querySelector('[data-archive-board]');
  const lamp = page.querySelector('[data-lamp-toggle]');
  if (board && lamp) {
    let lit = readState('dossier-lamp', 'off') === 'on';
    const renderLamp = () => {
      board.classList.toggle('is-lit', lit);
      lamp.setAttribute('aria-pressed', String(lit));
      lamp.setAttribute('aria-label', lit ? 'Turn lamp off' : 'Turn lamp on');
      const label = lamp.querySelector('[data-lamp-label]');
      if (label) label.textContent = lit ? 'Turn lamp off' : 'Turn lamp on';
    };
    lamp.hidden = false;
    renderLamp();
    lamp.addEventListener('click', () => {
      lit = !lit;
      saveState('dossier-lamp', lit ? 'on' : 'off');
      renderLamp();
      playSound('lamp');
      if (!reduceMotion()) {
        lamp.classList.add('is-pulling');
        window.setTimeout(() => lamp.classList.remove('is-pulling'), 180);
      }
    });
  }
  const cover = page.querySelector('[data-folder-cover]');
  const open = page.querySelector('[data-folder-open]');
  const content = page.querySelector('[data-folder-content]');
  if (cover && open && content) {
    content.hidden = true;
    open.hidden = false;
    open.setAttribute('aria-expanded', 'false');
    let opening = false;
    open.addEventListener('click', () => {
      if (opening) return;
      opening = true;
      playSound('folder');
      open.setAttribute('aria-expanded', 'true');
      const reveal = () => {
        // Keep the case title and classification visible as the document header.
        cover.classList.remove('folder-opening');
        open.hidden = true;
        content.hidden = false;
        content.focus({ preventScroll: true });
        content.scrollIntoView({ behavior: 'instant', block: 'start' });
      };
      if (reduceMotion()) reveal();
      else {
        cover.classList.add('folder-opening');
        window.setTimeout(reveal, 220);
      }
    });
  }
})();
