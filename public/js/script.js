const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

const setHeaderState = () => {
    const header = document.querySelector('header');
    if (!header) return;

    if (window.scrollY > 20) {
        header.classList.add('fixed-nav');
    } else {
        header.classList.remove('fixed-nav');
    }
};

window.addEventListener('scroll', setHeaderState, { passive: true });
setHeaderState();

if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('hamburger-activate');
        navMenu.classList.toggle('hidden');
    });

    navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                navMenu.classList.add('hidden');
                hamburger.classList.remove('hamburger-activate');
            }
        });
    });
}

const revealTargets = Array.from(document.querySelectorAll('.hero-grid > *, .hero-card, .panel, .project-card, .info-card, .about-card, .card, .stat-card, .social-link, .btn, .highlight-card'));
revealTargets.forEach((element, index) => {
    element.classList.add('reveal');
    element.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
});

if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18 });

    revealTargets.forEach((element) => revealObserver.observe(element));
} else {
    revealTargets.forEach((element) => element.classList.add('is-visible'));
}

const carousels = [
    { id: 'carousel-healthy', nextBtn: 'next-healthy', prevBtn: 'prev-healthy', interval: 3500, index: 0, length: 4 },
    { id: 'carousel-eramen', nextBtn: 'next-eramen', prevBtn: 'prev-eramen', interval: 3500, index: 0, length: 4 },
    { id: 'carousel-ontime', nextBtn: 'next-ontime', prevBtn: 'prev-ontime', interval: 3500, index: 0, length: 4 },
    { id: 'carousel-cocokien', nextBtn: 'next-cocokien', prevBtn: 'prev-cocokien', interval: 3500, index: 0, length: 1 }
];

carousels.forEach((carousel) => {
    const carouselEl = document.getElementById(carousel.id);
    if (!carouselEl) return;

    const slides = carouselEl.querySelectorAll('.carousel-item');
    const nextBtn = document.getElementById(carousel.nextBtn);
    const prevBtn = document.getElementById(carousel.prevBtn);

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.remove('hidden-slide');
            } else {
                slide.classList.add('hidden-slide');
            }
        });
    };

    const nextSlide = () => {
        carousel.index = (carousel.index + 1) % carousel.length;
        showSlide(carousel.index);
    };

    const prevSlide = () => {
        carousel.index = (carousel.index - 1 + carousel.length) % carousel.length;
        showSlide(carousel.index);
    };

    nextBtn?.addEventListener('click', nextSlide);
    prevBtn?.addEventListener('click', prevSlide);

    setInterval(nextSlide, carousel.interval);
    showSlide(carousel.index);
});