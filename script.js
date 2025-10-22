function toggleMenu() {
  const nav = document.querySelector('nav');
  const hamburger = document.querySelector('.hamburger');
  const body = document.body;
  
  nav.classList.toggle('active');
  hamburger.classList.toggle('active');
  body.classList.toggle('menu-open');
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');
    const body = document.body;
    
    nav.classList.remove('active');
    hamburger.classList.remove('active');
    body.classList.remove('menu-open');
  });
});

// Close menu when clicking the overlay background
document.addEventListener('click', (e) => {
  const nav = document.querySelector('nav');
  if (nav.classList.contains('active') && e.target === nav) {
    toggleMenu();
  }
});

javascript// Fade out effect when clicking navigation links
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href]:not([target="_blank"])');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      // Only apply to internal links (same domain)
      if (this.hostname === window.location.hostname) {
        e.preventDefault();
        const destination = this.href;
        
        document.body.classList.add('page-transition');
        
        setTimeout(function() {
          window.location.href = destination;
        }, 300);
      }
    });
  });
});
