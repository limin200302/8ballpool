const vipData = {
  Silver: {
    logo: "assets/img/silver.png",
    prices: [
      { price: 55000, cash: 605 },
      { price: 70000, cash: 880 },
      { price: 95000, cash: 1210 },
      { price: 135000, cash: 1892 },
      { price: 190000, cash: 2992 },
      { price: 250000, cash: 3872 },
      { price: 275000, cash: 6600 }
    ]
  },
  Gold: {
    logo: "assets/img/gold.png",
    prices: [
      { price: 55000, cash: 688 },
      { price: 70000, cash: 1000 },
      { price: 95000, cash: 1375 },
      { price: 135000, cash: 2150 },
      { price: 190000, cash: 3400 },
      { price: 250000, cash: 4400 },
      { price: 275000, cash: 7500 }
    ]
  },
  Zamrud: {
    logo: "assets/img/zamrud.png",
    prices: [
      { price: 55000, cash: 825 },
      { price: 70000, cash: 1200 },
      { price: 95000, cash: 1650 },
      { price: 135000, cash: 2580 },
      { price: 190000, cash: 4080 },
      { price: 250000, cash: 5280 },
      { price: 275000, cash: 9000 }
    ]
  },
  Diamond: {
    logo: "assets/img/diamond.png",
    prices: [
      { price: 55000, cash: 963 },
      { price: 70000, cash: 1400 },
      { price: 95000, cash: 1925 },
      { price: 135000, cash: 3010 },
      { price: 190000, cash: 4760 },
      { price: 250000, cash: 6160 },
      { price: 275000, cash: 10500 }
    ]
  },
  "Black Diamond": {
    logo: "assets/img/blackdiamond.png",
    prices: [
      { price: 55000, cash: 1100 },
      { price: 70000, cash: 1600 },
      { price: 95000, cash: 2200 },
      { price: 135000, cash: 3440 },
      { price: 190000, cash: 5440 },
      { price: 250000, cash: 7040 },
      { price: 275000, cash: 12000 }
    ]
  }
};

const vipContainer = document.getElementById("vip-container");
const boxlegendContainer = document.getElementById("boxlegend-container");
const cartItems = document.getElementById("cart-items");
const checkoutBtn = document.getElementById("checkout-btn");
let cart = [];

function renderVIPSection(container) {
  container.innerHTML = "";
  for (const vip in vipData) {
    const vipItem = document.createElement("div");
    vipItem.classList.add("vip-item");

    const header = document.createElement("h3");
    header.innerHTML = `<img src="${vipData[vip].logo}" alt="${vip}" width="20"> ${vip}`;
    header.style.cursor = "pointer";

    const list = document.createElement("div");
    list.classList.add("vip-wrapper");
    list.style.display = "none";

    vipData[vip].prices.forEach((item) => {
      const row = document.createElement("div");
      row.classList.add("price-option");

      const dollar = `<img src="assets/img/dollar.png" alt="cash" width="16" style="margin-left: 4px;" />`;
      const label = document.createElement("span");
      label.innerHTML = `Rp ${item.price.toLocaleString()} - ${item.cash}${dollar}`;

      const btn = document.createElement("button");
      btn.textContent = "Pilih";
      btn.addEventListener("click", () => {
        btn.classList.toggle("selected");

        if (btn.classList.contains("selected")) {
          btn.innerHTML = "✔ Dipilih";
          cart.push({ vip, price: item.price, cash: item.cash });
        } else {
          btn.innerHTML = "Pilih";
          cart = cart.filter(
            (entry) => !(entry.vip === vip && entry.price === item.price)
          );
        }
        updateCart();
      });

      row.appendChild(label);
      row.appendChild(btn);
      list.appendChild(row);
    });

    header.addEventListener("click", () => {
      list.style.display = list.style.display === "none" ? "block" : "none";
    });

    vipItem.appendChild(header);
    vipItem.appendChild(list);
    container.appendChild(vipItem);
  }
}

function updateCart() {
  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.vip} - Rp ${item.price.toLocaleString()} - ${item.cash} `;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "-";
    removeBtn.onclick = () => {
      cart.splice(index, 1);
      updateCart();
    };
    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });
}

checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Keranjang kosong!");
    return;
  }

  const message = cart
    .map(
      (item) =>
        `VIP: ${item.vip}\nHarga: Rp ${item.price.toLocaleString()}\nCash: ${item.cash}`
    )
    .join("\n\n");

  const waLink = `https://wa.me/6285713056206?text=${encodeURIComponent(
    "Halo Mamet Ucup Store! Saya ingin beli:\n\n" + message
  )}`;
  window.open(waLink, "_blank");
});

// Toggle menu fitur
document.getElementById("toggle-pricelist").addEventListener("click", () => {
  const section = document.getElementById("price-list-section");
  section.classList.toggle("hidden");
});
document.getElementById("toggle-boxlegend").addEventListener("click", () => {
  const section = document.getElementById("box-legend-section");
  section.classList.toggle("hidden");
});

renderVIPSection(vipContainer);
renderVIPSection(boxlegendContainer);
