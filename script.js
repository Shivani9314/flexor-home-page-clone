document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.getElementById("menu-icon");
    var navLinks = document.getElementById("nav-links");

    menuIcon.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });
});
