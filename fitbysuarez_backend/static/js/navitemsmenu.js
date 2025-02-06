document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navItems = document.querySelector(".nav-items");

    if (menuToggle && navItems) {
        menuToggle.addEventListener("click", function() {
            navItems.classList.toggle("active");
        });
    }
});

