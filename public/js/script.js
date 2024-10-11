const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

window.onscroll = function(){
    const header = document.querySelector('header');
    const offset = header.offsetTop;

    if(window.scrollY > offset){
        header.classList.add('fixed-nav');
    } else {
        header.classList.remove('fixed-nav');
    }
}

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-activate');
    navMenu.classList.toggle('hidden');
});

// Define carousels array including Project 2 carousel
const carousels = [
    { id: 'carousel-login', nextBtn: 'next-login', prevBtn: 'prev-login', interval: 3000, index: 0, length: 5 },
    { id: 'carousel-shop', nextBtn: 'next-shop', prevBtn: 'prev-shop', interval: 3000, index: 0, length: 5 },
    { id: 'carousel-calendar', nextBtn: 'next-calendar', prevBtn: 'prev-calendar', interval: 3000, index: 0, length: 3 },
    { id: 'carousel-product', nextBtn: 'next-product', prevBtn: 'prev-product', interval: 3000, index: 0, length: 6 },
    { id: 'carousel-project-3', nextBtn: 'next-project-3', prevBtn: 'prev-project-3', interval: 3000, index: 0, length: 8 }
];

carousels.forEach((carousel) => {
    const carouselEl = document.getElementById(carousel.id);
    const slides = carouselEl.querySelectorAll('.carousel-item');
    const nextBtn = document.getElementById(carousel.nextBtn); // Tombol next sesuai carousel
    const prevBtn = document.getElementById(carousel.prevBtn); // Tombol prev sesuai carousel

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

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Start auto slide
    setInterval(nextSlide, carousel.interval);

    // Show the first slide
    showSlide(carousel.index);
});