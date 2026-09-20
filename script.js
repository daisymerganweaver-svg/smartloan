
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close the mobile menu after selecting a link.
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

// Read the administrator code from the URL.
const params = new URLSearchParams(window.location.search);
const adminCode = params.get("admin");
const adminMessage = document.getElementById("adminMessage");

if (adminCode) {
  adminMessage.textContent =
    "Administrator code received: " + adminCode;
} else {
  adminMessage.textContent =
    "No administrator code was provided.";
}

// Display the current year.
document.getElementById("year").textContent =
  new Date().getFullYear();