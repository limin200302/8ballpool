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

  // Cart functionality
  const cartCount = document.getElementById("cart-count");
  let cartItems = 0;

  // Function to update cart
  function updateCart() {
    cartCount.textContent = cartItems;
  }

  // Checkout action
  function checkout() {
    alert("Proceeding to checkout...");
    cartItems = 0;
    updateCart();
  }

  // Simulating adding items to the cart
  document.getElementById("add-item-btn").addEventListener("click", function() {
    cartItems++;
    updateCart();
  });
});
