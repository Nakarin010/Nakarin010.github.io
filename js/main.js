/* ============================================
   CYBERPUNK NEON PORTFOLIO - MAIN.JS
   ============================================ */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileMenu();
    initScrollEffects();
    initModals();
    initParallax();
    initGlitchEffect();
});

/* ============================================
   NAVBAR FUNCTIONALITY
   ============================================ */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class for styling
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Set active link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

/* ============================================
   MOBILE MENU
   ============================================ */
function initMobileMenu() {
    const toggle = document.querySelector('.navbar-toggle');
    const navLinks = document.querySelector('.navbar-links');
    
    if (!toggle || !navLinks) return;
    
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            toggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
            toggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

/* ============================================
   SCROLL EFFECTS & ANIMATIONS
   ============================================ */
function initScrollEffects() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    document.querySelectorAll('.project-card, .tech-badge').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add animate-in class styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
    
    // Stagger animation delays for grid items
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    document.querySelectorAll('.tech-badge').forEach((badge, index) => {
        badge.style.transitionDelay = `${index * 0.1}s`;
    });
}

/* ============================================
   MODAL FUNCTIONALITY
   ============================================ */
function initModals() {
    const modalOverlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('.modal');
    
    if (!modalOverlay || !modal) return;
    
    // Project data
    const projects = {
        'allcare': {
            title: 'AllCare',
            tagline: 'Leverage the power ML and AL in dermatological diagnosis for remote healthcare',
            summary: 'AllCare is a mobile-first AI solution designed to bridge Thailand\'s dermatology staffing gap. Using advance machine and active learning models, it enables remote diagnosis of skin conditions, making dermatological care accessible to underserved communities.',
            techStack: ['Python', 'TensorFlow', 'OpenCV', 'Unet', 'Figma', 'Draw.io', 'Flask'],
            metrics: [
                { value: '94%', label: 'Accuracy' },
                { value: '50+', label: 'Skin Conditions' },
                { value: '<2s', label: 'Response Time' }
            ],
            github: 'https://github.com/ChawanakornI/SeniorProjectAl'
        },
        'quantflow': {
            title: 'QuantFlow',
            tagline: 'Algorithmic trading strategy backtesting simulator',
            summary: 'A comprehensive backtesting platform for developing and validating trading strategies. Features real-time market simulation, risk analytics, and performance visualization to help traders optimize their algorithms before deployment.',
            techStack: ['Python', 'Pandas', 'NumPy', 'SQL', 'Plotly', 'FastAPI'],
            metrics: [
                { value: '10K+', label: 'Simulations' },
                { value: '15+', label: 'Indicators' },
                { value: '5yr', label: 'Historical Data' }
            ],
            github: 'https://github.com'
        },
        'mediscan': {
            title: 'MediScan',
            tagline: 'Medical image segmentation using deep learning',
            summary: 'Advanced medical imaging analysis tool leveraging state-of-the-art segmentation models. Designed to assist radiologists by automatically identifying and highlighting regions of interest in medical scans.',
            techStack: ['PyTorch', 'SAM', 'YOLO', 'OpenCV', 'MONAI', 'Streamlit'],
            metrics: [
                { value: '96%', label: 'Dice Score' },
                { value: '3', label: 'Modalities' },
                { value: '1M+', label: 'Images Processed' }
            ],
            github: 'https://github.com'
        },
        'marketpulse': {
            title: 'MarketPulse',
            tagline: 'Real-time stock sentiment analysis dashboard',
            summary: 'A real-time analytics dashboard that aggregates and analyzes market sentiment from multiple sources including news, social media, and financial reports. Provides actionable insights through intuitive visualizations.',
            techStack: ['Python', 'Power BI', 'NLP', 'BERT', 'SQL', 'Azure'],
            metrics: [
                { value: '100+', label: 'Data Sources' },
                { value: 'Real-time', label: 'Updates' },
                { value: '85%', label: 'Sentiment Accuracy' }
            ],
            github: 'https://github.com'
        }
    };
    
    // Open modal
    document.querySelectorAll('.btn-deep-dive').forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = btn.dataset.project;
            const project = projects[projectId];
            
            if (!project) return;
            
            // Populate modal content
            modal.querySelector('.modal-title').textContent = project.title;
            modal.querySelector('.modal-tagline').textContent = project.tagline;
            modal.querySelector('.modal-section p').textContent = project.summary;
            
            // Tech stack
            const techContainer = modal.querySelector('.modal-tech-stack');
            techContainer.innerHTML = project.techStack.map(tech => 
                `<span class="project-tech-item">${tech}</span>`
            ).join('');
            
            // Metrics
            const metricsContainer = modal.querySelector('.modal-metrics');
            metricsContainer.innerHTML = project.metrics.map(metric => `
                <div class="metric">
                    <div class="metric-value">${metric.value}</div>
                    <div class="metric-label">${metric.label}</div>
                </div>
            `).join('');
            
            // GitHub link
            const githubBtn = modal.querySelector('.btn-github');
            if (githubBtn) {
                githubBtn.href = project.github;
            }
            
            // Show modal
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal
    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };
    
    modal.querySelector('.modal-close')?.addEventListener('click', closeModal);
    
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
}

/* ============================================
   PARALLAX EFFECT
   ============================================ */
function initParallax() {
    const glows = document.querySelectorAll('.bg-glow');
    
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        glows.forEach((glow, index) => {
            const speed = (index + 1) * 20;
            const xOffset = (x - 0.5) * speed;
            const yOffset = (y - 0.5) * speed;
            
            glow.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });
}

/* ============================================
   GLITCH EFFECT
   ============================================ */
function initGlitchEffect() {
    const glitchElements = document.querySelectorAll('.hero-name, .projects-title');
    
    glitchElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.classList.add('glitch');
            setTimeout(() => el.classList.remove('glitch'), 500);
        });
    });
    
    // Add glitch styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
        }
        
        .glitch {
            animation: glitch 0.3s ease infinite;
        }
    `;
    document.head.appendChild(style);
}

/* ============================================
   TYPING EFFECT (Optional - for tagline)
   ============================================ */
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

/* ============================================
   SMOOTH PAGE TRANSITIONS
   ============================================ */
document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    
    // Only for internal links
    if (href && !href.startsWith('http') && !href.startsWith('#')) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                window.location.href = href;
            }, 300);
        });
    }
});

// Fade in on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });
});
