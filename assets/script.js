document.querySelectorAll('.toggle-section').forEach(button => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.dataset.target);
    target.style.display = target.style.display === 'block' ? 'none' : 'block';
  });
});

document.getElementById('modeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// ===================
// LIST CASH VIP
// ===================
const dataCash = {
  "Silver": [
    { harga: 70000, cash: 880 },
    { harga: 95000, cash: 1210 },
    { harga: 135000, cash: 1892 },
    { harga: 190000, cash: 2992 },
    { harga: 250000, cash: 3872 },
    { harga: 275000, cash: 6600 },
  ],
  "Gold": [
    { harga: 55000, cash: 688 },
    { harga: 70000, cash: 1000 },
    { harga: 95000, cash: 1375 },
    { harga: 135000, cash: 2150 },
    { harga: 190000, cash: 3400 },
    { harga: 250000, cash: 4400 },
    { harga: 275000, cash: 7500 },
  ],
  "Zamrud": [
    { harga: 55000, cash: 825 },
    { harga: 70000, cash: 1200 },
    { harga: 95000, cash: 1650 },
    { harga: 135000, cash: 2580 },
    { harga: 190000, cash: 4080 },
    { harga: 250000, cash: 5280 },
    { harga: 275000, cash: 9000 },
  ],
  "Diamond": [
    { harga: 55000, cash: 963 },
    { harga: 70000, cash: 1400 },
    { harga: 95000, cash: 1925 },
    { harga: 135000, cash: 3010 },
    { harga: 190000, cash: 4760 },
    { harga: 250000, cash: 6160 },
    { harga: 275000, cash: 10500 },
  ],
  "Black Diamond": [
    { harga: 55000, cash: 1100 },
    { harga: 70000, cash: 1600 },
    { harga: 95000, cash: 2200 },
    { harga: 135000, cash: 3440 },
    { harga: 190000, cash: 5440 },
    { harga: 250000, cash: 7040 },
    { harga: 275000, cash: 12000 },
  ]
};

const dataBoxLegend = {
  "Silver": [
    { harga: 60000, box: 20 },
    { harga: 75000, box: 29 },
    { harga: 100000, box: 40 },
    { harga: 145000, box: 63 },
    { harga: 200000, box: 100 },
    { harga: 265000, box: 130 },
    { harga: 295000, box: 222 },
  ],
  "Gold": [
    { harga: 60000, box: 22 },
    { harga: 75000, box: 33 },
    { harga: 100000, box: 45 },
    { harga: 145000, box: 72 },
    { harga: 200000, box: 114 },
    { harga: 265000, box: 149 },
    { harga: 295000, box: 252 },
  ],
  "Zamrud": [
    { harga: 60000, box: 27 },
    { harga: 75000, box: 39 },
    { harga: 100000, box: 54 },
    { harga: 145000, box: 86 },
    { harga: 200000, box: 137 },
    { harga: 265000, box: 117 },
    { harga: 295000, box: 303 },
  ],
  "Diamond": [
    { harga: 60000, box: 32 },
    { harga: 75000, box: 46 },
    { harga: 100000, box: 64 },
    { harga: 145000, box: 101 },
    { harga: 200000, box: 159 },
    { harga: 265000, box: 207 },
    { harga: 295000, box: 353 },
  ],
  "Black Diamond": [
    { harga: 60000, box: 36 },
    { harga: 75000, box: 53 },
    { harga: 100000, box: 72 },
    { harga: 145000, box: 115 },
    { harga: 200000, box: 183 },
    { harga: 265000, box: 237 },
    { harga: 295000, box: 404 },
  ]
};

function renderPriceList(containerId, data, label) {
  const container = document.getElementById(containerId);
  Object.entries(data).forEach(([vip, items]) => {
    const section = document.createElement("div");
    section.className = "vip-section";
    const title = document.createElement("div");
    title.className = "vip-title";
    title.innerHTML = `<img src="assets/img/${vip.toLowerCase()}.png" /> ${vip}`;
    section.appendChild(title);

    items.forEach(item => {
      const div = document.createElement("div");
      div.className = "item";
      const info = label === 'cash'
        ? `Rp ${item.harga.toLocaleString()} - ${item.cash} Cash`
        : `Rp ${item.harga.toLocaleString()} - ${item.box} Box`;
      div.innerHTML = `
        <span>${info} <img src="assets/img/dollar.png" class="dollar"/></span>
        <button onclick="addToCart('${vip} - ${info}', ${item.harga})">Pilih</button>`;
      section.appendChild(div);
    });

    container.appendChild(section);
  });
}

renderPriceList("priceListCash", dataCash, "cash");
renderPriceList("boxLegend", dataBoxLegend, "box");

// ===================
// KERANJANG
// ===================
const cart = [];

function addToCart(item, price) {
  cart.push({ item, price });
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cartItems");
  cartList.innerHTML = "";
  cart.forEach((entry, index) => {
    const li = document.createElement("li");
    li.textContent = `${entry.item} - Rp ${entry.price.toLocaleString()}`;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.onclick = () => {
      cart.splice(index, 1);
      updateCart();
    };
    li.appendChild(removeBtn);
    cartList.appendChild(li);
  });
}

document.getElementById("checkoutBtn").addEventListener("click", () => {
  const nomor = "6285713056206";
  const pesan = encodeURIComponent(
    "Halo Mamet Ucup Store, saya ingin pesan:\n" +
    cart.map(c => `- ${c.item} (Rp ${c.price.toLocaleString()})`).join("\n")
  );
  window.open(`https://wa.me/${nomor}?text=${pesan}`, "_blank");
});
