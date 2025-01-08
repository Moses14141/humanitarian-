document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector("#about");

    const checkVisibility = () => {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            aboutSection.classList.add("in-view");
        }
    };

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});
