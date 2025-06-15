document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const sideNav = document.querySelector(".side-nav");
  const berandaLink = document.querySelector(".side-nav a[href='#beranda']");
  const berandaSection = document.getElementById("berandaSection");

  // Jika ada tombol hamburger, aktifkan
  if (hamburger && sideNav) {
    hamburger.addEventListener("click", () => {
      sideNav.classList.toggle("open");
    });
  }

  // Tombol Beranda
  if (berandaLink && berandaSection) {
    berandaLink.addEventListener("click", (e) => {
      e.preventDefault();

      // Daftar id menu utama yang mau disembunyikan
      const hideIds = ["priceListCash", "boxLegend", "poolPass"];

      hideIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = "none";
      });

      // Tampilkan beranda
      berandaSection.style.display = "block";

      // Tutup side menu
      sideNav.classList.remove("open");
    });
  }
});
