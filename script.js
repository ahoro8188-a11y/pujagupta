// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

// Minimal scroll-reveal
const revealTargets = document.querySelectorAll(
  '.section, .about-grid, .work-list, .testimonial-list, .contact-page, .blog-placeholder, .book-row-list, .blog-list'
);
revealTargets.forEach(el => el.classList.add('reveal'));

// Stagger containers: children fade in one after another
const staggerContainers = document.querySelectorAll(
  '.numbered-grid, .edu-skills, .book-grid, .chip-row'
);
staggerContainers.forEach(container => {
  container.classList.add('stagger');
  [...container.children].forEach((child, i) => {
    child.style.setProperty('--i', i);
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealTargets.forEach(el => observer.observe(el));
staggerContainers.forEach(el => observer.observe(el));

// Back to top button
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 500);
  }, { passive: true });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  const note = document.getElementById('formNote');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    note.textContent = "Thank you — I'll get back to you soon.";
    contactForm.reset();
  });
}
