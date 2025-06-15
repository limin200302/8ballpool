document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".toggle-section");
  const cartItems = document.getElementById("cartItems");
  const cart = [];
  const priceListCash = document.getElementById("priceListCash");

  const dataCash = {
    Silver: [
      { harga: 70000, cash: 880 },
      { harga: 95000, cash: 1210 },
      { harga: 135000, cash: 1892 },
      { harga: 190000, cash: 2992 },
      { harga: 250000, cash: 3872 },
      { harga: 275000, cash: 6600 }
    ],
    Gold: [
      { harga: 55000, cash: 688 },
      { harga: 70000, cash: 1000 },
      { harga: 95000, cash: 1375 },
      { harga: 135000, cash: 2150 },
      { harga: 190000, cash: 3400 },
      { harga: 250000, cash: 4400 },
      { harga: 275000, cash: 7500 }
    ],
    Zamrud: [
      { harga: 55000, cash: 825 },
      { harga: 70000, cash: 1200 },
      { harga: 95000, cash: 1650 },
      { harga: 135000, cash: 2580 },
      { harga: 190000, cash: 4080 },
      { harga: 250000, cash: 5280 },
      { harga: 275000, cash: 9000 }
    ],
    Diamond: [
      { harga: 55000, cash: 963 },
      { harga: 70000, cash: 1400 },
      { harga: 95000, cash: 1925 },
      { harga: 135000, cash: 3010 },
      { harga: 190000, cash: 4760 },
      { harga: 250000, cash: 6160 },
      { harga: 275000, cash: 10500 }
    ],
    "Black Diamond": [
      { harga: 55000, cash: 1100 },
      { harga: 70000, cash: 1600 },
      { harga: 95000, cash: 2200 },
      { harga: 135000, cash: 3440 },
      { harga: 190000, cash: 5440 },
      { harga: 250000, cash: 7040 },
      { harga: 275000, cash: 12000 }
    ]
  };

  for (const [vip, items] of Object.entries(dataCash)) {
    const section = document.createElement("div");
    section.className = "vip-section";
    const title = document.createElement("div");
    title.className = "vip-title";
    title.innerHTML = `<img src="assets/img/${vip.toLowerCase().replace(" ", "_")}.png" alt="${vip}" /> ${vip}`;
    section.appendChild(title);

    items.forEach(({ harga, cash }) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "item";

      const span = document.createElement("span");
      span.innerHTML = `Rp ${harga.toLocaleString()} - ${cash} Cash <img src="assets/img/dollar.png" class="dollar" />`;

      const button = document.createElement("button");
      button.textContent = "Pilih";
      button.onclick = () => {
        const itemStr = `${vip} - Rp ${harga.toLocaleString()} - ${cash} Cash`;
        if (button.classList.contains("selected")) {
          button.classList.remove("selected");
          const index = cart.indexOf(itemStr);
          if (index > -1) cart.splice(index, 1);
        } else {
          button.classList.add("selected");
          cart.push(itemStr);
        }
        updateCart();
      };

      itemDiv.appendChild(span);
      itemDiv.appendChild(button);
      section.appendChild(itemDiv);
    });

    priceListCash.appendChild(section);
  }

  sections.forEach(button => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.target);
      target.style.display = target.style.display === "block" ? "none" : "block";
    });
  });

  function updateCart() {
    cartItems.innerHTML = "";
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      cartItems.appendChild(li);
    });
  }

  document.getElementById("checkoutBtn").addEventListener("click", () => {
    if (cart.length === 0) return alert("Keranjang kosong.");
    const text = encodeURIComponent(`Halo, saya ingin pesan:\n\n${cart.join("\n")}`);
    window.open(`https://wa.me/6285713056206?text=${text}`, "_blank");
  });

  document.getElementById("modeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
