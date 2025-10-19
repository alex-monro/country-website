// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const siteNavigation = document.querySelector('.site-navigation');

if (menuToggle && siteNavigation) {
  menuToggle.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    
    // Toggle the menu
    siteNavigation.classList.toggle('toggled');
    
    // Update aria-expanded for accessibility
    this.setAttribute('aria-expanded', !isExpanded);
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInside = siteNavigation.contains(event.target);
    
    if (!isClickInside && siteNavigation.classList.contains('toggled')) {
      siteNavigation.classList.remove('toggled');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu when pressing Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && siteNavigation.classList.contains('toggled')) {
      siteNavigation.classList.remove('toggled');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.focus();
    }
  });
}

// Optional: Add scroll effect to header
const siteHeader = document.querySelector('.site-header');

if (siteHeader) {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });
}
