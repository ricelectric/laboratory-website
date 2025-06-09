//navigation
const body = document.body;
const hamburger = document.getElementById('hamburger');
const background = document.getElementById('background');

hamburger.addEventListener('click', function() {
    body.classList.toggle('navigation_open');

    if (body.classList.contains('navigation_open')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }    
});
background.addEventListener('click', function() {
    body.classList.remove('navigation_open');
    body.style.overflow = 'auto';
});

//scroll effect
// let triggerMargin = 100;

// const scrollAnimationElements = document.querySelectorAll('.scroll_effect');
// const scrollAnimationFunction = function () {
//     for (var i = 0; i < scrollAnimationElements.length; i++) {
//         if (window.innerHeight - triggerMargin > scrollAnimationElements[i].getBoundingClientRect().top) {
//             scrollAnimationElements[i].classList.add('appear');
//         }
//     }
// }
// window.addEventListener('load', scrollAnimationFunction);
// window.addEventListener('scroll', scrollAnimationFunction);

//slider
// const slides = document.querySelectorAll('.slide');
// const dots = document.querySelectorAll('.dot');

// let currentIndex = 0;
// function showSlides() {
//     slides[currentIndex].classList.remove('active');
//     dots[currentIndex].classList.remove('active');

//     currentIndex = (currentIndex + 1) % slides.length;

//     slides[currentIndex].classList.add('active');
//     dots[currentIndex].classList.add('active');
// }
// setInterval(showSlides, 10000);

// window.addEventListener('load', showSlides);