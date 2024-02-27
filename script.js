    // Toggle menu icon and navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {

             navLinks.forEach(Links => {
                Links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
             });
        }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);


                        //  remove toggle icon and navbar when click navbar links (scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

    // Initialize typed.js for typing animation
new Typed('.typed-text', {
    strings: ["Software Engineer","Developer","Designer","Programmer","FRP Bypass GOAT"],
    typeSpeed: 100,
    loop: true
});

    // Initialize scroll reveal animation
ScrollReveal().reveal('.heading', {
        delay: 300,
        origin: 'top',
        distance: '50px',
        easing: 'ease-in-out'
});
ScrollReveal().reveal('.home-content p', {
        delay: 300,
        origin: 'left',
        distance: '50px',
        easing: 'ease-in-out'
});
ScrollReveal().reveal('.home-content h1', {
        delay: 450,
        origin: 'top',
        distance: '50px',
        easing: 'ease-in-out'
});
ScrollReveal().reveal('.home-content h3', {
        delay: 450,
        origin: 'left',
        distance: '90px',
        easing: 'ease-in-out'
});
ScrollReveal().reveal('.btn-box', {
        delay: 450,
        origin: 'bottom',
        distance: '90px',
        easing: 'ease-in-out'
});
ScrollReveal().reveal('.social-media', {
        delay: 450,
        origin: 'bottom',
        distance: '90px',
        easing: 'ease-in-out'
});
ScrollReveal().reveal('.about-img', {
        delay: 400,
        origin: 'left',
        distance: '50px',
        easing: 'ease-in-out'
});
ScrollReveal().reveal('.about-content', {
        delay: 300,
        origin: 'right',
        distance: '50px',
        easing: 'ease-in-out'
});
ScrollReveal().reveal('.skills-column', {
        delay: 300,
        origin: 'bottom',
        distance: '50px',
        easing: 'ease-in-out'
});
ScrollReveal().reveal('.portfolio-gallery', {
        delay: 350,
        origin: 'bottom',
        distance: '50px',
        easing: 'ease-in-out'
});
ScrollReveal().reveal('.contact', {
    delay: 400,
    origin: 'bottom',
    distance: '50px',
    easing: 'ease-in-out'
});



