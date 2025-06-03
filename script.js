console.log('hello welcome to my portfolio')

let width = window.innerWidth;
console.log(width)

document.addEventListener('DOMContentLoaded', function() {
    var typedText = document.getElementById('type-effect');

    var typingEffect = new Typed(typedText, {
        strings: ["Designer", "Developer", "Programmer"],
        loop: true,
        typeSpeed: 100, 
        backSpeed: 80,
        backDelay: 2000,
        onStringTyped: function(arrayPos, self) {
            var currentString = self.strings[arrayPos];
            typedText.className = ''; // Reset class
            if (currentString === "Designer") {
                typedText.classList.add('designer');
            } else if (currentString === "Developer") {
                typedText.classList.add('developer');
            } else if (currentString === "Programmer") {
                typedText.classList.add('programmer');
            }
        }
    });
});
window.onload = function() {
    const navHeight = document.querySelector('.navigation-bar').offsetHeight;

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - navHeight,
                    behavior: 'smooth'
                });
            }
        });
    });
};
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu ul li a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.side-bar ul li a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-sidebar');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active-sidebar');
        }
    });
});


const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.side-bar');
const cross = document.querySelector('.cross');
hamburger.addEventListener('click',function(){
    sidebar.style.right = 0;
    hamburger.style.opacity = 0.1;
});
cross.addEventListener('click',function(){
    sidebar.style.right = "-500px";
    hamburger.style.opacity = 1;
});

const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1500,
    reset: true     
})
const isMobile = window.innerWidth <= 500;

const config = {
  distance: isMobile ? '30px' : '80px',
  duration: isMobile ? 800 : 1500,
  once: true
};

ScrollReveal().reveal('.name', config);
ScrollReveal().reveal('.featured-text', { ...config, delay: 100 });
ScrollReveal().reveal('.featured-text-info', { ...config, delay: 200 });
ScrollReveal().reveal('.resume-btn', { ...config, delay: 200 });
ScrollReveal().reveal('.social', { ...config, delay: 200 });
ScrollReveal().reveal('.profile-pic', { ...config, delay: 100 });

ScrollReveal().reveal('.skills-heading', config);
ScrollReveal().reveal('.projects-heading', { ...config, origin: 'bottom' });

ScrollReveal().reveal('.frontend', { ...config, origin: 'left' });
ScrollReveal().reveal('.design', { ...config, origin: 'right' });
ScrollReveal().reveal('.programming', { ...config, origin: 'bottom' });
ScrollReveal().reveal('.skills-img', { ...config, origin: 'bottom', delay: 100 });

ScrollReveal().reveal('.all-projects', { ...config, delay: 100 });
ScrollReveal().reveal('.contact', config);
ScrollReveal().reveal('.scroll-indicator', config);


 document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_7cewkmi', 'template_5iw0f0e', this)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert("Email sent successfully!");
        document.getElementById('contact-form').reset();
      }, function(error) {
        console.log('FAILED...', error);
        alert("Failed to send email. Please try again later.");
      });
  });
