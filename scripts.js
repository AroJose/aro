// scripts.js

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation for Login/Sign-Up
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login-form');
    const signupForm = document.querySelector('#signup-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            const email = this.querySelector('input[name="email"]').value;
            const password = this.querySelector('input[name="password"]').value;
            if (!validateEmail(email) || password.length < 6) {
                e.preventDefault();
                alert('Please enter a valid email and a password with at least 6 characters.');
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            const email = this.querySelector('input[name="email"]').value;
            const password = this.querySelector('input[name="password"]').value;
            if (!validateEmail(email) || password.length < 6) {
                e.preventDefault();
                alert('Please enter a valid email and a password with at least 6 characters.');
            }
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});

// Dynamic Hero Section Text Update
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    const heroTexts = [
        'Empowering Students Across India',
        'Achieve Your Dreams with PMSSS',
        'Transforming Futures Through Education'
    ];
    let textIndex = 0;
    
    function updateHeroText() {
        heroContent.querySelector('h1').textContent = heroTexts[textIndex];
        textIndex = (textIndex + 1) % heroTexts.length;
    }
    
    setInterval(updateHeroText, 5000); // Change text every 5 seconds
});
