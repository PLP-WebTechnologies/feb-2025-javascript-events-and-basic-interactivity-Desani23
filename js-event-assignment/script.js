// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Elements for Event Handling Section
    const tipButton = document.getElementById('tip-button');
    const tipDisplay = document.getElementById('tip-display');
    const hoverArea = document.getElementById('hover-area');
    const focusInput = document.getElementById('focus-input');
    const goalDisplay = document.getElementById('goal-display');
    const secretButton = document.getElementById('secret-button');

    // Study tips array
    const studyTips = [
        'Take short breaks every 25 minutes (Pomodoro technique).',
        'Explain what you learned to someone else.',
        'Use flashcards for active recall.',
        'Keep your study space organized and distraction-free.',
        'Set specific goals for each study session.',
        'Drink water to stay hydrated and focused.',
        'Try studying at different times to find your peak focus.',
    ];

    // Show random study tip on button click
    tipButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * studyTips.length);
        tipDisplay.textContent = studyTips[randomIndex];
    });

    // Hover motivation effect
    hoverArea.addEventListener('mouseover', () => {
        hoverArea.textContent = 'You got this! Keep pushing!';
    });

    hoverArea.addEventListener('mouseout', () => {
        hoverArea.textContent = 'Hover over me for motivation!';
    });

    // Input focus and update goal display
    focusInput.addEventListener('input', (e) => {
        goalDisplay.textContent = e.target.value;
    });

    // Secret double-click surprise
    secretButton.addEventListener('dblclick', () => {
        alert('🎉 Surprise! Keep up the amazing work! 🎉');
    });

    // Interactive Elements Section - Image Gallery
    const images = document.querySelectorAll('.gallery-image');
    const prevImageBtn = document.getElementById('prev-image');
    const nextImageBtn = document.getElementById('next-image');
    let currentImageIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    prevImageBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        showImage(currentImageIndex);
    });

    nextImageBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        showImage(currentImageIndex);
    });

    // Accordion functionality
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const isActive = content.classList.contains('active');
            // Close all
            document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('active'));
            if (!isActive) {
                content.classList.add('active');
            }
        });
    });

    // Animate button spin effect
    const animateButton = document.getElementById('animate-button');
    animateButton.addEventListener('click', () => {
        animateButton.classList.add('animate');
        setTimeout(() => {
            animateButton.classList.remove('animate');
        }, 2000);
    });

    // Form validation
    const form = document.getElementById('signup-form');
    const nameField = document.getElementById('name-field');
    const emailField = document.getElementById('email-field');
    const passwordField = document.getElementById('password-field');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Clear previous errors
        nameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';

        let valid = true;

        // Name validation: required, at least 2 chars
        if (nameField.value.trim().length < 2) {
            nameError.textContent = 'Please enter your full name.';
            valid = false;
        }

        // Email validation: optional, but if entered must be valid
        if (emailField.value.trim() !== '' && !validateEmail(emailField.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            valid = false;
        }

        // Password validation: optional, but if entered min 8 chars
        if (passwordField.value.trim() !== '' && passwordField.value.trim().length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters.';
            valid = false;
        }

        if (valid) {
            alert(`Welcome to the Study Group, ${nameField.value.trim()}!`);
            form.reset();
            goalDisplay.textContent = '';
        }
    });

    // Simple email regex validator
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
