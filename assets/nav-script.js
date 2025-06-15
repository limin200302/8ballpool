document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const sideNav = document.querySelector(".side-nav");

  hamburger.addEventListener("click", () => {
    sideNav.classList.toggle("open");
  });
});
