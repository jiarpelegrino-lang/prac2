// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.15 // Trigger when 15% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Target all major sections and the reveal class
document.querySelectorAll('section, .feature-grid, .specs-grid, .gallery-grid').forEach(el => {
    el.classList.add('reveal'); // Ensure they start hidden
    observer.observe(el);
});