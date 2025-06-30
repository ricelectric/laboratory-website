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
const options = {
    threshold: 0.1
}
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
}, options);

document.querySelectorAll('.scroll_effect').forEach(element => observer.observe(element));

//another version
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