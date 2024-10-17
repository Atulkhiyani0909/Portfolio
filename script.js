const clicking=document.getElementById('menu-icon');
const navbar=document.querySelector('.navbar');

clicking.addEventListener('click',()=>{
    navbar.classList.toggle('active');
});

// Get all the navigation links
const navLinks = document.querySelectorAll('.navbar a');

// Add click event listener to each navigation link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove the 'active' class from the navbar when a link is clicked
        navbar.classList.remove('active');
    });
});



// ... existing code ...

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById("text");
    const words = ["Web Developer", "Problem Solver", "Coder"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;  // Speed of typing
    const deletingSpeed = 80;  // Speed of deleting
    const delayBetweenWords = 1000;  // Delay before switching to next word

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            charIndex--;
            textElement.textContent = currentWord.substring(0, charIndex);
        } else {
            charIndex++;
            textElement.textContent = currentWord.substring(0, charIndex);
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, delayBetweenWords); // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Move to next word
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
        }
    }

    // Start the typing effect
    type();
});


