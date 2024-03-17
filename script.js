
window.addEventListener('scroll', function() {
    var element = document.querySelector('.background-words');
    var position = element.getBoundingClientRect();

    // If the top of the element is visible in the viewport
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.classList.add('fade-in');
    } else {
        element.classList.remove('fade-in');
    }
    
});

const background = document.querySelector('.background');
const first = document.querySelector('.firstcontainer');

const width = background.offsetWidth;

const height = (width * 2) / 3;

background.style.height = `${height}px`;
first.style.height = `${height}px`;

