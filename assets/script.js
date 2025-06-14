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
      ]
      // You can add more VIP options (Gold, Zamrud, etc.) here
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
