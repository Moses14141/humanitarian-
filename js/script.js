// Select the hamburger menu and the navigation links
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

// Add an event listener to the hamburger menu
hamburgerMenu.addEventListener('click', () => {
    // Toggle the 'active' class on the nav-links to show/hide the menu
    navLinks.classList.toggle('active');
});



// Function to detect if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// Function to add animation when the element is in the viewport
function checkAnimation() {
    const introSection = document.querySelector('.intro');
    const storySection = document.querySelector('.story-section');
    
    if (isInViewport(introSection)) {
        introSection.classList.add('fade-in');
    }

    if (isInViewport(storySection)) {
        storySection.classList.add('slide-in');
    }
}

// Listen for scroll events to trigger animations
window.addEventListener('scroll', checkAnimation);

// Initial check in case the element is already in the viewport
checkAnimation();
