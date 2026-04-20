// Mobile menu
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// Dark mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Fake form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message Sent Successfully!");
});