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
