// Fitur Toggle untuk List Cash, Golden Shot, dll.
document.addEventListener("DOMContentLoaded", function() {
  const listCashBtn = document.getElementById("list-cash");
  const goldenShotBtn = document.getElementById("golden-shot");
  const poolPassBtn = document.getElementById("pool-pass");
  const veniceLegalBtn = document.getElementById("venice-legal");

  // Toggle fungsi aktif/deaktif untuk menu dropdown
  function toggleDropdown(button, menu) {
    button.classList.toggle("active");
    menu.classList.toggle("active");
  }

  // Event listener untuk setiap menu button
  listCashBtn.addEventListener("click", function() {
    const vipOptions = document.querySelector(".vip-options");
    toggleDropdown(listCashBtn, vipOptions);
  });

  goldenShotBtn.addEventListener("click", function() {
    const goldenShotOptions = document.querySelector(".golden-shot-options");
    toggleDropdown(goldenShotBtn, goldenShotOptions);
  });

  poolPassBtn.addEventListener("click", function() {
    const poolPassOptions = document.querySelector(".pool-pass-options");
    toggleDropdown(poolPassBtn, poolPassOptions);
  });

  veniceLegalBtn.addEventListener("click", function() {
    const veniceLegalOptions = document.querySelector(".venice-legal-options");
    toggleDropdown(veniceLegalBtn, veniceLegalOptions);
  });
});

// Keranjang belanjaan
let cartCount = 0;
document.getElementById("cart-count").textContent = cartCount;

function checkout() {
  alert("Proses checkout!");
  cartCount = 0;
  document.getElementById("cart-count").textContent = cartCount;
}
