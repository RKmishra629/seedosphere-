// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Don't close if it's a dropdown parent
            if (!link.parentElement.classList.contains('nav-dropdown')) {
                navMenu.classList.remove('active');
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
const animateOnScroll = document.querySelectorAll(
    '.area-card, .product-card, .feature-card, .benefit-card, ' +
    '.application-card, .team-member, .publication-card, ' +
    '.publication-detail-card, .stat-card, .problem-card, ' +
    '.step-card, .testimonial-card'
);

animateOnScroll.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Filter functionality for publications pages
const filterButtons = document.querySelectorAll('.filter-btn');
const publicationCards = document.querySelectorAll('.publication-detail-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        publicationCards.forEach(card => {
            if (filterValue === 'all') {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                const cardStatus = card.getAttribute('data-status');
                const cardYear = card.getAttribute('data-year');
                
                if (cardStatus === filterValue || cardYear === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            }
        });
    });
});

// Add active class to current page navigation link
const currentLocation = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    
    // Check if the link matches the current page
    if (linkPath === currentLocation || 
        (currentLocation.includes(linkPath) && linkPath !== '#' && linkPath !== 'index.html')) {
        link.classList.add('active');
        
        // If it's in a dropdown, mark the parent as active
        const dropdown = link.closest('.nav-dropdown');
        if (dropdown) {
            const dropdownLink = dropdown.querySelector('.nav-link');
            if (dropdownLink) {
                dropdownLink.classList.add('active');
            }
        }
    }
});

// Parallax effect for hero section (subtle)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const productHero = document.querySelector('.product-hero');
    
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    if (productHero && scrolled < productHero.offsetHeight) {
        productHero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Fade in page on load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Counter animation for stats
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16); // 60 FPS
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
};

// Observe stat cards for counter animation
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const number = entry.target.querySelector('h3');
            if (number) {
                const targetValue = parseInt(number.textContent);
                if (!isNaN(targetValue)) {
                    animateCounter(number, targetValue);
                }
            }
        }
    });
}, { threshold: 0.5 });

// Apply counter animation to stat cards
const statCards = document.querySelectorAll('.stat-card, .hero-stat, .research-stat');
statCards.forEach(card => {
    statObserver.observe(card);
});

// Dropdown functionality for mobile
const dropdowns = document.querySelectorAll('.nav-dropdown');
dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('.nav-link');
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const menu = dropdown.querySelector('.dropdown-menu');
            if (menu) {
                // Toggle display
                if (menu.style.display === 'block') {
                    menu.style.display = 'none';
                } else {
                    // Close other dropdowns
                    document.querySelectorAll('.dropdown-menu').forEach(m => {
                        m.style.display = 'none';
                    });
                    menu.style.display = 'block';
                }
            }
        }
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if (window.innerWidth <= 768) {
                menu.style.display = 'none';
            }
        });
    }
});

// Add loading animation for images (if you add real images later)
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
});

// Initialize AOS (Animate On Scroll) alternative
const initializeAnimations = () => {
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => {
        observer.observe(el);
    });
};

// Call initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAnimations);
} else {
    initializeAnimations();
}

// Print functionality for publications (if needed)
const printButtons = document.querySelectorAll('.btn-print');
printButtons.forEach(button => {
    button.addEventListener('click', () => {
        window.print();
    });
});

// Copy to clipboard for citations (if needed)
const copyButtons = document.querySelectorAll('.btn-copy');
copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const citation = button.getAttribute('data-citation');
        if (citation) {
            navigator.clipboard.writeText(citation).then(() => {
                alert('Citation copied to clipboard!');
            });
        }
    });
});

console.log('Seedosphere website initialized successfully!');
