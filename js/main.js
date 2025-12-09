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

const blogPosts = {
  'shipping-models': {
    title: 'Shipping models with confidence',
    tagline: 'Placeholder tagline for the shipping models post.',
    date: 'Oct 2024',
    tag: 'MLOps',
    readTime: '6 min read',
    summary: 'Preview content coming soon. This post will be filled in later.',
    takeaways: ['Placeholder takeaway one.', 'Placeholder takeaway two.', 'Placeholder takeaway three.'],
    content: ['This is placeholder content for the blog detail page.', 'Replace it with the real story later.'],
    url: 'blog.html?post=shipping-models',
  },
  'allcare-triage': {
    title: "Building AllCare's triage loop",
    tagline: 'Placeholder tagline for the AllCare triage post.',
    date: 'Sep 2024',
    tag: 'Healthcare AI',
    readTime: '5 min read',
    summary: 'Preview content coming soon. I will add the real summary later.',
    takeaways: ['Placeholder takeaway one.', 'Placeholder takeaway two.', 'Placeholder takeaway three.'],
    content: ['This is placeholder content for the blog detail page.', 'Replace it with the real story later.'],
    url: 'blog.html?post=allcare-triage',
  },
  'dashboards-used': {
    title: 'Dashboards that actually get used',
    tagline: 'Placeholder tagline for the dashboards post.',
    date: 'Aug 2024',
    tag: 'Data',
    readTime: '4 min read',
    summary: 'Preview content coming soon. I will add the real summary later.',
    takeaways: ['Placeholder takeaway one.', 'Placeholder takeaway two.', 'Placeholder takeaway three.'],
    content: ['This is placeholder content for the blog detail page.', 'Replace it with the real story later.'],
    url: 'blog.html?post=dashboards-used',
  },
};

const blogModalOverlay = document.querySelector('.blog-modal-overlay');
const blogModalTitle = document.querySelector('.blog-modal-title');
const blogModalTagline = document.querySelector('.blog-modal-tagline');
const blogModalDate = document.querySelector('.blog-modal-date');
const blogModalTag = document.querySelector('.blog-modal-tag');
const blogModalReadtime = document.querySelector('.blog-modal-readtime');
const blogModalSummary = document.querySelector('.blog-modal-summary');
const blogModalTakeaways = document.querySelector('.blog-modal-takeaways');
const blogReadMore = document.querySelector('.blog-read-more');

function openBlogPreview(slug) {
  if (!blogModalOverlay) return;
  const post = blogPosts[slug];
  if (!post || !blogModalTitle || !blogModalSummary) return;

  blogModalTitle.textContent = post.title;
  blogModalTagline.textContent = post.tagline;
  blogModalDate.textContent = post.date;
  blogModalTag.textContent = post.tag;
  blogModalReadtime.textContent = post.readTime;
  blogModalSummary.textContent = post.summary;

  if (blogModalTakeaways) {
    blogModalTakeaways.innerHTML = '';
    post.takeaways.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      blogModalTakeaways.appendChild(li);
    });
  }

  if (blogReadMore) blogReadMore.href = post.url;
  blogModalOverlay.classList.add('active');
}

if (blogModalOverlay) {
  document.querySelectorAll('.blog-preview-btn').forEach((btn) => {
    btn.addEventListener('click', () => openBlogPreview(btn.dataset.post));
  });

  blogModalOverlay.addEventListener('click', (e) => {
    if (e.target === blogModalOverlay) blogModalOverlay.classList.remove('active');
  });

  const blogClose = document.querySelector('.blog-modal-close');
  if (blogClose) {
    blogClose.addEventListener('click', () => blogModalOverlay.classList.remove('active'));
  }
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

const blogDetailRoot = document.querySelector('.blog-detail');

if (blogDetailRoot) {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('post') || 'shipping-models';
  const post = blogPosts[slug];

  const detailTitle = document.querySelector('.blog-detail-title');
  const detailSubtitle = document.querySelector('.blog-detail-subtitle');
  const detailDate = document.querySelector('.blog-detail-date');
  const detailTag = document.querySelector('.blog-detail-tag');
  const detailReadTime = document.querySelector('.blog-detail-readtime');
  const detailSummary = document.querySelector('.blog-detail-summary');
  const detailTakeaways = document.querySelector('.blog-detail-takeaways');
  const detailContent = document.querySelector('.blog-detail-content');

  if (!post) {
    if (detailTitle) detailTitle.textContent = 'Post not found';
    if (detailSubtitle) detailSubtitle.textContent = 'The post you are looking for is not available yet.';
  } else {
    if (detailTitle) detailTitle.textContent = post.title;
    if (detailSubtitle) detailSubtitle.textContent = post.tagline;
    if (detailDate) detailDate.textContent = post.date;
    if (detailTag) detailTag.textContent = post.tag;
    if (detailReadTime) detailReadTime.textContent = post.readTime;
    if (detailSummary) detailSummary.textContent = post.summary;
    if (post.url) document.title = `${post.title} | Nakarin Phoorahong`;

    if (detailTakeaways) {
      detailTakeaways.innerHTML = '';
      post.takeaways.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        detailTakeaways.appendChild(li);
      });
    }

    if (detailContent) {
      detailContent.innerHTML = '';
      post.content.forEach((paragraph) => {
        const p = document.createElement('p');
        p.textContent = paragraph;
        detailContent.appendChild(p);
      });
    }
  }
}
