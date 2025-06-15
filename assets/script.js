const toggleBtns = document.querySelectorAll(".toggle-section");
toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.target);
    target.classList.toggle("active");
  });
});

const cart = [];
const cartList = document.getElementById("cartItems");
const checkoutBtn = document.getElementById("checkoutBtn");

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  cartList.innerHTML = "";
  cart.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - Rp ${item.price.toLocaleString()}`;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.onclick = () => removeItem(i);
    li.appendChild(removeBtn);
    cartList.appendChild(li);
  });
}

checkoutBtn.onclick = () => {
  if (cart.length === 0) return alert("Keranjang kosong!");
  const text = cart
    .map((item) => `${item.name} - Rp ${item.price.toLocaleString()}`)
    .join("%0A");
  window.open(`https://wa.me/6285713056206?text=Halo,%20saya%20ingin%20pesan:%0A${text}`);
};

// Mode malam/siang toggle
document.getElementById("modeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// VIP Data
const vipData = {
  Silver: [
    [55000, 605],
    [70000, 880],
    [95000, 1210],
    [135000, 1892],
    [190000, 2992],
    [250000, 3872],
    [275000, 6600],
  ],
  Gold: [
    [55000, 688],
    [70000, 1000],
    [95000, 1375],
    [135000, 2150],
    [190000, 3400],
    [250000, 4400],
    [275000, 7500],
  ],
  Zamrud: [
    [55000, 825],
    [70000, 1200],
    [95000, 1650],
    [135000, 2580],
    [190000, 4080],
    [250000, 5280],
    [275000, 9000],
  ],
  Diamond: [
    [55000, 963],
    [70000, 1400],
    [95000, 1925],
    [135000, 3010],
    [190000, 4760],
    [250000, 6160],
    [275000, 10500],
  ],
  "Black Diamond": [
    [55000, 1100],
    [70000, 1600],
    [95000, 2200],
    [135000, 3440],
    [190000, 5440],
    [250000, 7040],
    [275000, 12000],
  ],
};

// Generate VIP section
function populateVIP(id) {
  const section = document.getElementById(id);
  Object.entries(vipData).forEach(([vip, list]) => {
    const vipDiv = document.createElement("div");
    vipDiv.className = "vip";

    const btn = document.createElement("button");
    btn.className = "vip-toggle";
    const icon = document.createElement("img");
    icon.src = `assets/img/${vip.toLowerCase().replace(' ', '')}.png`;
    icon.className = "vip-icon";
    btn.appendChild(icon);
    btn.append(` ${vip}`);
    vipDiv.appendChild(btn);

    const priceContainer = document.createElement("div");
    priceContainer.className = "vip-prices hidden";
    list.forEach(([price, cash]) => {
      const div = document.createElement("div");
      div.className = "price-item";
      div.dataset.name = `${vip} - ${cash} Cash`;
      div.dataset.price = price;
      div.innerHTML = `Rp ${price.toLocaleString()} - ${cash} <img src=\"assets/img/dollar.png\" class=\"dollar-icon\">`;
      div.onclick = () => {
        addToCart(`${vip} - ${cash} Cash`, price);
        div.classList.add("selected");
      };
      priceContainer.appendChild(div);
    });
    vipDiv.appendChild(priceContainer);

    btn.onclick = () => {
      priceContainer.classList.toggle("hidden");
    };

    section.appendChild(vipDiv);
  });
}

populateVIP("priceListCash");
populateVIP("boxLegend");

// Drag chibi
const chibi = document.getElementById("chibi");
let isDragging = false;
let offsetX, offsetY;

chibi.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - chibi.offsetLeft;
  offsetY = e.clientY - chibi.offsetTop;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    chibi.style.left = `${e.clientX - offsetX}px`;
    chibi.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
