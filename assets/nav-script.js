document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("navMenu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  // Auto-close menu saat link diklik
  const navLinks = navMenu.querySelectorAll("a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
});
// Tambahkan di nav-script.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".meteor-container");

  for (let i = 0; i < 20; i++) {
    const meteor = document.createElement("div");
    meteor.classList.add("meteor");
    meteor.style.left = Math.random() * 100 + "vw";
    meteor.style.animationDelay = Math.random() * 5 + "s";
    meteor.style.animationDuration = 1.5 + Math.random() * 1 + "s";
    container.appendChild(meteor);
  }
});
