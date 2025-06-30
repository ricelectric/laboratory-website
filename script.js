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