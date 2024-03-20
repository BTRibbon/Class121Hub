/*window.addEventListener('scroll', function() {
    var element = document.querySelector('.background-words');
    var position = element.getBoundingClientRect();

    // If the top of the element is visible in the viewport
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
        element.classList.add('fade-in');
    } else {
        element.classList.remove('fade-in');
    }
    
});
*/



const backgroundWordsElement = document.querySelector('.background-words');

window.addEventListener('DOMContentLoaded', () => {
  backgroundWordsElement.classList.add('fade-in');
});

// Function to handle visibility changes based on intersection
const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      backgroundWordsElement.classList.add('fade-in'); // Add 'fade-in' back on scroll-in
    } else {
      backgroundWordsElement.classList.remove('fade-in');
    }
  });
};

// Create an IntersectionObserver instance with a threshold of 0.1 (10% visibility)
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });

// Observe the element for visibility changes
observer.observe(backgroundWordsElement);

///
const background = document.querySelector('.background');
const first = document.querySelector('.firstcontainer');

const width = background.offsetWidth;

const height = (width * 2) / 3;

background.style.height = `${height}px`;
first.style.height = `${height}px`;

///////////////////////slideshow///////////////



var slideIndex = 1;
var slideCount = document.getElementsByClassName("mySlides").length;


function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var y = document.getElementsByClassName("slideimage");
  if (n > slideCount) {slideIndex = 1}    
  if (n < 1) {slideIndex = slideCount}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    y[i].classList.remove('active');
  }
  x[slideIndex-1].style.display = "block";  
  setTimeout(function() {
    y[slideIndex-1].classList.add('active');
  }, 500);
  setTimeout(function() {
    y[slideIndex-1].classList.remove('active');
  }, 3700);
}






function plusDivs(n) {
  showDivs(slideIndex += n);
  // Re-enable the previous button after the delay is complete
}

// Optional: Automatic slide change
var timer = setInterval(myTimer, 5000); // Change every 3 seconds

function myTimer() {
  plusDivs(1);
}

// Optional: Navigation dot handling (if using dots)
var dots = document.getElementsByClassName("dot");
for (i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function() {currentSlide(i + 1)});
}

function currentSlide(n) {
  showDivs(slideIndex = n);
}

showDivs(slideIndex); // Display the initial slide


