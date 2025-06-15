// ==== Hamburger Menu ====
const hamburger = document.querySelector(".hamburger");
const sideNav = document.querySelector(".side-nav");

hamburger.addEventListener("click", () => {
  sideNav.classList.toggle("open");
});

// ==== Navigasi ke Beranda ====
const berandaLink = document.querySelector(".side-nav a[href='#beranda']");
const berandaSection = document.getElementById("berandaSection");

// Semua konten utama untuk disembunyikan saat buka beranda
const sectionsToHide = [
  document.getElementById("priceListCash"),
  document.getElementById("boxLegend"),
  document.getElementById("poolPass")
];

berandaLink.addEventListener("click", (e) => {
  e.preventDefault();

  // Sembunyikan semua menu utama
  sectionsToHide.forEach(section => section.style.display = "none");

  // Tampilkan beranda
  berandaSection.style.display = "block";

  // Tutup side menu
  sideNav.classList.remove("open");
});
