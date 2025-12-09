const navToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.navbar-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('active'));
  });
}

const modalOverlay = document.querySelector('.modal-overlay');
const modalTitle = document.querySelector('.modal-title');
const modalTagline = document.querySelector('.modal-tagline');
const modalSummary = document.querySelector('.modal-summary');
const modalMetrics = document.querySelector('.modal-metrics');
const modalTechStack = document.querySelector('.modal-tech-stack');
const modalGithub = document.querySelector('.btn-github');

const projects = {
  allcare: {
    title: 'AllCare',
    tagline: 'Dermatology diagnostics assistance for remote care.',
    summary:
      'AllCare bridges the dermatology staffing gap by providing an ML-powered assistant that triages skin concerns and speeds up response times for rural clinics.',
    metrics: [
      { value: '94%', label: 'Accuracy' },
      { value: '50+', label: 'Conditions covered' },
      { value: '<2s', label: 'Response time' },
    ],
    techStack: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
    github: 'https://github.com/ChawanakornI/SeniorProjectAl',
  },
  quantflow: {
    title: 'QuantFlow',
    tagline: 'Backtesting toolkit for market ideas.',
    summary:
      'QuantFlow lets traders simulate strategies against years of historical data, visualize risk, and iterate quickly before going live.',
    metrics: [
      { value: '10K+', label: 'Simulations run' },
      { value: '15+', label: 'Indicators' },
      { value: '5yr', label: 'Historical coverage' },
    ],
    techStack: ['Python', 'Pandas', 'NumPy', 'SQL'],
    github: 'https://github.com',
  },
  mediscan: {
    title: 'MediScan',
    tagline: 'Deep learning for medical image segmentation.',
    summary:
      'MediScan highlights regions of interest in scans to give radiologists a head start, with quick overlays and export-ready outputs.',
    metrics: [
      { value: '96%', label: 'Dice score' },
      { value: '3', label: 'Modalities' },
      { value: '1M+', label: 'Images processed' },
    ],
    techStack: ['PyTorch', 'SAM', 'YOLO', 'Streamlit'],
    github: 'https://github.com',
  },
  marketpulse: {
    title: 'MarketPulse',
    tagline: 'Live sentiment dashboard for market signals.',
    summary:
      'MarketPulse aggregates news and social chatter into a single feed, with sentiment scores that refresh alongside incoming data.',
    metrics: [
      { value: '100+', label: 'Data sources' },
      { value: 'Real-time', label: 'Updates' },
      { value: '85%', label: 'Sentiment accuracy' },
    ],
    techStack: ['Python', 'Power BI', 'NLP', 'Azure'],
    github: 'https://github.com',
  },
};

function renderProject(id) {
  if (!modalOverlay) return;
  const project = projects[id];
  if (!project) return;

  modalTitle.textContent = project.title;
  modalTagline.textContent = project.tagline;
  modalSummary.textContent = project.summary;

  modalMetrics.innerHTML = '';
  project.metrics.forEach((metric) => {
    const div = document.createElement('div');
    div.className = 'metric';
    div.innerHTML = `<div class="metric-value">${metric.value}</div><div class="metric-label">${metric.label}</div>`;
    modalMetrics.appendChild(div);
  });

  modalTechStack.innerHTML = '';
  project.techStack.forEach((tech) => {
    const span = document.createElement('span');
    span.textContent = tech;
    modalTechStack.appendChild(span);
  });

  modalGithub.href = project.github;
  modalOverlay.classList.add('active');
}

if (modalOverlay) {
  document.querySelectorAll('.btn-deep-dive').forEach((btn) => {
    btn.addEventListener('click', () => renderProject(btn.dataset.project));
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.remove('active');
  });

  const closeBtn = document.querySelector('.modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => modalOverlay.classList.remove('active'));
  }
}
