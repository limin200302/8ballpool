const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.onclick = () => {
  body.classList.toggle('dark-mode');
  modeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
};

const vips = {
  Silver: {
    icon: 'silver.png',
    prices: [605, 880, 1210],
    cost: [55000, 70000, 95000]
  },
  Gold: {
    icon: 'gold.png',
    prices: [688, 1000, 1375],
    cost: [55000, 70000, 95000]
  }
};

function renderPriceList(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  Object.entries(vips).forEach(([vip, data]) => {
    const section = document.createElement('div');
    section.className = 'vip-section';

    const title = document.createElement('div');
    title.className = 'vip-title';
    title.innerHTML = `<img src="assets/img/${data.icon}" /> ${vip}`;
    section.appendChild(title);

    data.prices.forEach((cash, i) => {
      const item = document.createElement('div');
      item.className = 'item';

      const label = document.createElement('span');
      label.innerHTML = `Rp ${data.cost[i].toLocaleString()} - ${cash}<img class="dollar" src="assets/img/dollar.png" />`;

      const button = document.createElement('button');
      button.textContent = 'Pilih';
      button.onclick = () => {
        if (button.classList.contains('selected')) {
          removeFromCartByName(`${vip} ${cash}`);
          button.classList.remove('selected');
        } else {
          addToCart(`${vip} ${cash}`, data.cost[i]);
          button.classList.add('selected');
        }
      };

      item.append(label, button);
      section.appendChild(item);
    });

    container.appendChild(section);
  });
}

renderPriceList('priceListCash');
renderPriceList('boxLegend');

document.querySelectorAll('.toggle-section').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);
    const isVisible = target.style.display === 'block';
    document.querySelectorAll('.price-section').forEach(sec => sec.style.display = 'none');
    target.style.display = isVisible ? 'none' : 'block';
  });
});

const cart = [];
function addToCart(item, price) {
  cart.push({ item, price });
  updateCart();
}
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}
function removeFromCartByName(name) {
  const index = cart.findIndex(c => c.item === name);
  if (index !== -1) removeFromCart(index);
}
function updateCart() {
  const list = document.getElementById('cartItems');
  list.innerHTML = '';
  cart.forEach((entry, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${entry.item} - Rp ${entry.price.toLocaleString()} <button class="remove-btn" onclick="removeFromCart(${index})">-</button>`;
    list.appendChild(li);
  });
}
document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (cart.length === 0) return alert('Keranjang kosong!');
  const msg = cart.map(c => `${c.item} - Rp ${c.price.toLocaleString()}`).join('%0A');
  window.open(`https://wa.me/6285713056206?text=Halo saya ingin beli:%0A${msg}`, '_blank');
});

// Draggable Chibi
const chibi = document.getElementById('chibi');
let isDragging = false, offsetX, offsetY;

chibi.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - chibi.getBoundingClientRect().left;
  offsetY = e.clientY - chibi.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  chibi.style.left = `${e.clientX - offsetX}px`;
  chibi.style.top = `${e.clientY - offsetY}px`;
  chibi.style.position = 'fixed';
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});
