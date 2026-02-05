// Scroll-triggered Animation Observer
// Observes elements and adds 'in-view' class when they enter viewport

document.addEventListener('DOMContentLoaded', () => {
  // Create intersection observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // Optional: unobserve after animation to improve performance
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Select all elements to animate on scroll
  const animateOnScroll = document.querySelectorAll('.animate-on-scroll');
  
  animateOnScroll.forEach(el => {
    observer.observe(el);
  });
});
