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





