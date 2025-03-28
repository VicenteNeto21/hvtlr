document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  });
  
  // Back to top button
  const backToTop = document.querySelector('.back-to-top');
  window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
          backToTop.classList.add('active');
      } else {
          backToTop.classList.remove('active');
      }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth'
              });
              
              // Close mobile menu if open
              const navbarCollapse = document.querySelector('.navbar-collapse');
              if (navbarCollapse.classList.contains('show')) {
                  const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                  bsCollapse.hide();
              }
          }
      });
  });
  
  // Initialize carousel with auto-rotation
  const heroCarousel = document.querySelector('#heroCarousel');
  if (heroCarousel) {
      const carousel = new bootstrap.Carousel(heroCarousel, {
          interval: 5000, // Rotate every 5 seconds
          pause: 'hover' // Pause on hover
      });
  }
  
  // Add active class to current section in navbar
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', function() {
      let current = '';
      
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          
          if (pageYOffset >= (sectionTop - 200)) {
              current = section.getAttribute('id');
          }
      });
      
      navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${current}`) {
              item.classList.add('active');
          }
      });
  });
});