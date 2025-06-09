let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Toggle menu icon and navbar
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Highlight active section in nav on scroll
window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        let selector = 'header nav a[href*="' + id + '"]';
        let activeLink = document.querySelector(selector);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      });
    }
  });

  // Close navbar when scrolling
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};
