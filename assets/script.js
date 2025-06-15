document.querySelectorAll(".toggle-section").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const section = document.getElementById(targetId);
    if (section.style.display === "block") {
      section.style.display = "none";
    } else {
      document.querySelectorAll(".price-section").forEach((s) => (s.style.display = "none"));
      section.style.display = "block";
    }
  });
});

const priceListCash = {
  "Silver": [
    [55000, 605],
    [70000, 880],
    [95000, 1210],
    [135000, 1892],
    [190000, 2992],
    [250000, 3872],
    [275000, 6600]
  ],
  "Gold": [
    [55000, 688],
    [70000, 1000],
    [95000, 1375],
    [135000, 2150],
    [190000, 3400],
    [250000, 4400],
    [275000, 7500]
  ],
  "Zamrud": [
    [55000, 825],
    [70000, 1200],
    [95000, 1650],
    [135000, 2580],
    [190000, 4080],
    [250000, 5280],
    [275000, 9000]
  ],
  "Diamond": [
    [55000, 963],
    [70000, 1400],
    [95000, 1925],
    [135000, 3010],
    [190000, 4760],
    [250000, 6160],
    [275000, 10500]
  ],
  "Black Diamond": [
    [55000, 1100],
    [70000, 1600],
    [95000, 2200],
    [135000, 3440],
    [190000, 5440],
    [250000, 7040],
    [275000, 12000]
  ]
};
function generatePriceListCash() {
  const container = document.getElementById("priceListCash");
  for (const [vip, list] of Object.entries(priceListCash)) {
    const section = document.createElement("div");
    section.className = "vip-section";

    const title = document.createElement("div");
    title.className = "vip-title";
    const logo = document.createElement("img");
    logo.src = `assets/img/${vip.toLowerCase().replace(" ", "_")}.png`;
    logo.alt = vip;
    title.appendChild(logo);
    title.appendChild(document.createTextNode(vip));
    section.appendChild(title);

    list.forEach(([price, cash]) => {
      const item = document.createElement("div");
      item.className = "item";
      const span = document.createElement("span");
      span.innerHTML = `Rp ${price.toLocaleString()} - ${cash} Cash <img src="assets/img/dollar.png" class="dollar">`;
      const button = document.createElement("button");
      button.textContent = "Pilih";
      button.onclick = function () {
        const itemName = `${vip} - Rp ${price.toLocaleString()} - ${cash} Cash`;
        if (button.classList.contains("selected")) {
          button.classList.remove("selected");
          removeFromCart(itemName);
        } else {
          button.classList.add("selected");
          addToCart(itemName, price);
        }
      };
      item.appendChild(span);
      item.appendChild(button);
      section.appendChild(item);
    });

    container.appendChild(section);
  }
}

function generateBoxLegend() {
  const boxList = {
    "Silver": [[60000, 20], [75000, 29], [100000, 40], [145000, 63], [200000, 100], [265000, 130], [295000, 222]],
    "Gold": [[60000, 22], [75000, 33], [100000, 45], [145000, 72], [200000, 114], [265000, 149], [295000, 252]],
    "Zamrud": [[60000, 27], [75000, 39], [100000, 54], [145000, 86], [200000, 137], [265000, 117], [295000, 303]],
    "Diamond": [[60000, 32], [75000, 46], [100000, 64], [145000, 101], [200000, 159], [265000, 207], [295000, 353]],
    "Black Diamond": [[60000, 36], [75000, 53], [100000, 72], [145000, 115], [200000, 183], [265000, 237], [295000, 404]],
  };

  const container = document.getElementById("boxLegend");
  for (const [vip, list] of Object.entries(boxList)) {
    const section = document.createElement("div");
    section.className = "vip-section";

    const title = document.createElement("div");
    title.className = "vip-title";
    const logo = document.createElement("img");
    logo.src = `assets/img/${vip.toLowerCase().replace(" ", "_")}.png`;
    logo.alt = vip;
    title.appendChild(logo);
    title.appendChild(document.createTextNode(vip));
    section.appendChild(title);

    list.forEach(([price, box]) => {
      const item = document.createElement("div");
      item.className = "item";
      const span = document.createElement("span");
      span.innerHTML = `Rp ${price.toLocaleString()} - ${box} Box <img src="assets/img/box_legends.png" class="dollar">`;
      const button = document.createElement("button");
      button.textContent = "Pilih";
      button.onclick = function () {
        const itemName = `${vip} - Rp ${price.toLocaleString()} - ${box} Box`;
        if (button.classList.contains("selected")) {
          button.classList.remove("selected");
          removeFromCart(itemName);
        } else {
          button.classList.add("selected");
          addToCart(itemName, price);
        }
      };
      item.appendChild(span);
      item.appendChild(button);
      section.appendChild(item);
    });

    container.appendChild(section);
  }
}

function addToCart(itemName, price) {
  const li = document.createElement("li");
  li.textContent = `${itemName}`;
  li.setAttribute("data-item", itemName);
  document.getElementById("cartItems").appendChild(li);
}

function removeFromCart(itemName) {
  const items = document.querySelectorAll(`#cartItems li`);
  items.forEach((li) => {
    if (li.getAttribute("data-item") === itemName) {
      li.remove();
    }
  });
}

document.getElementById("checkoutBtn").addEventListener("click", () => {
  const list = [];
  document.querySelectorAll("#cartItems li").forEach((li) => list.push(li.textContent));
  if (list.length > 0) {
    const message = encodeURIComponent(`Halo, saya mau order:\n\n${list.join("\n")}`);
    window.open(`https://wa.me/6285713056206?text=${message}`, "_blank");
  } else {
    alert("Keranjang masih kosong!");
  }
});

document.getElementById("modeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

generatePriceListCash();
generateBoxLegend();
