console.log('hello welcome to my portfolio')
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
srtop.reveal('.name',{})
srtop.reveal('.featured-text',{delay: 100})
srtop.reveal('.featured-text-info',{delay: 200})
srtop.reveal('.resume-btn',{delay: 200})
srtop.reveal('.social',{delay: 200})
srtop.reveal('.profile-pic',{delay: 100})
srtop.reveal('.skills-heading',{})
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 1500,
    reset: true
})
srLeft.reveal('.frontend',{})
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 1500,
    reset: true
})
srRight.reveal('.design',{})
const srbottom = ScrollReveal({
    origin: 'bottom',
    distance: '30px',
    duration: 1500,
    reset: true     
})
srbottom.reveal('.programming',{})
srbottom.reveal('.skills-img',{delay:100})
srbottom.reveal('.projects-heading',{})
const sr = ScrollReveal({
    delay: 100  
});
sr.reveal('.all-projects', { reset: true }); 
sr.reveal('.contact',{reset:true});
sr.reveal('.scroll-indicator',{reset:true});

