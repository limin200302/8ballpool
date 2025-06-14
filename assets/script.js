document.addEventListener("DOMContentLoaded", function() {
  const listCashBtn = document.getElementById("list-cash");
  const vipOptions = document.querySelector(".vip-options");
  const vipDetails = document.getElementById("vip-details");

  // Fitur toggle untuk List Cash
  function toggleDropdown(button, menu) {
    button.classList.toggle("active");
    menu.classList.toggle("active");
  }

  // Event listener untuk button "List Cash"
  listCashBtn.addEventListener("click", function() {
    toggleDropdown(listCashBtn, vipOptions);
  });

  // Event listener untuk memilih VIP (Bronze, Silver, dll.)
  vipOptions.addEventListener("click", function(event) {
    if (event.target && event.target.classList.contains("option")) {
      const vipType = event.target.getAttribute("data-vip");
      displayVipDetails(vipType);
    }
  });

  // Menampilkan detail harga berdasarkan VIP yang dipilih
  function displayVipDetails(vipType) {
    const details = {
      bronze: [
        "Rp 55.000 - 605 Cash",
        "Rp 70.000 - 880 Cash",
        "Rp 95.000 - 1.210 Cash",
        "Rp 135.000 - 1.892 Cash",
        "Rp 190.000 - 2.992 Cash",
        "Rp 250.000 - 3.872 Cash",
        "Rp 275.000 - 6.600 Cash"
      ],
      silver: [
        "Rp 65.000 - 720 Cash",
        "Rp 80.000 - 950 Cash",
        "Rp 100.000 - 1.300 Cash",
        "Rp 140.000 - 1.990 Cash",
        "Rp 200.000 - 3.100 Cash",
        "Rp 260.000 - 4.000 Cash",
        "Rp 280.000 - 7.000 Cash"
      ],
      gold: [
        "Rp 75.000 - 820 Cash",
        "Rp 90.000 - 1.100 Cash",
        "Rp 120.000 - 1.500 Cash",
        "Rp 160.000 - 2.100 Cash",
        "Rp 220.000 - 3.400 Cash",
        "Rp 280.000 - 4.500 Cash",
        "Rp 300.000 - 8.000 Cash"
      ],
      zamrud: [
        "Rp 55.000 - 605 Cash",
        "Rp 70.000 - 880 Cash",
        "Rp 95.000 - 1.210 Cash",
        "Rp 135.000 - 1.892 Cash",
        "Rp 190.000 - 2.992 Cash",
        "Rp 250.000 - 3.872 Cash",
        "Rp 275.000 - 6.600 Cash"
      ],
      diamond: [
        "Rp 85.000 - 950 Cash",
        "Rp 105.000 - 1.300 Cash",
        "Rp 130.000 - 1.600 Cash",
        "Rp 180.000 - 2.500 Cash",
        "Rp 240.000 - 3.700 Cash",
        "Rp 310.000 - 5.000 Cash",
        "Rp 350.000 - 9.000 Cash"
      ],
      "black-diamond": [
        "Rp 100.000 - 1.050 Cash",
        "Rp 120.000 - 1.400 Cash",
        "Rp 150.000 - 1.800 Cash",
        "Rp 200.000 - 2.700 Cash",
        "Rp 260.000 - 4.000 Cash",
        "Rp 330.000 - 5.500 Cash",
        "Rp 370.000 - 10.000 Cash"
      ]
    };

    const selectedDetails = details[vipType] || [];
    vipDetails.innerHTML = selectedDetails.map(item => `<div>${item}</div>`).join("");
    vipDetails.classList.add("active");
  }

  // Keranjang belanjaan
  let cartCount = 0;
  document.getElementById("cart-count").textContent = cartCount;

  function checkout() {
    alert("Proses checkout!");
    cartCount = 0;
    document.getElementById("cart-count").textContent = cartCount;
  }
});
