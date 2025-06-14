const vipData = {
  Silver: {
    icon: 'silver.png',
    prices: [
      ['Rp 55.000', '605'],
      ['Rp 70.000', '880'],
      ['Rp 95.000', '1210'],
      ['Rp 135.000', '1892'],
      ['Rp 190.000', '2992'],
      ['Rp 250.000', '3872'],
      ['Rp 275.000', '6600'],
    ],
  },
  Gold: {
    icon: 'gold.png',
    prices: [
      ['Rp 55.000', '688'],
      ['Rp 70.000', '1000'],
      ['Rp 95.000', '1375'],
      ['Rp 135.000', '2150'],
      ['Rp 190.000', '3400'],
      ['Rp 250.000', '4400'],
      ['Rp 275.000', '7500'],
    ],
  },
  Zamrud: {
    icon: 'zamrud.png',
    prices: [
      ['Rp 55.000', '825'],
      ['Rp 70.000', '1200'],
      ['Rp 95.000', '1650'],
      ['Rp 135.000', '2580'],
      ['Rp 190.000', '4080'],
      ['Rp 250.000', '5280'],
      ['Rp 275.000', '9000'],
    ],
  },
  Diamond: {
    icon: 'diamond.png',
    prices: [
      ['Rp 55.000', '963'],
      ['Rp 70.000', '1400'],
      ['Rp 95.000', '1925'],
      ['Rp 135.000', '3010'],
      ['Rp 190.000', '4760'],
      ['Rp 250.000', '6160'],
      ['Rp 275.000', '10500'],
    ],
  },
  "Black Diamond": {
    icon: 'blackdiamond.png',
    prices: [
      ['Rp 55.000', '1100'],
      ['Rp 70.000', '1600'],
      ['Rp 95.000', '2200'],
      ['Rp 135.000', '3440'],
      ['Rp 190.000', '5440'],
      ['Rp 250.000', '7040'],
      ['Rp 275.000', '12000'],
    ],
  }
};

const container = document.getElementById('vip-container');
const cartList = document.getElementById('cart-list');
const searchInput = document.getElementById('search');
const toggleDark = document.getElementById('toggle-dark');

let cart = [];

Object.entries(vipData).forEach(([vip, data]) => {
  const div = document.createElement('div');
  div.className = 'vip-category';

  const header = document.createElement('div');
  header.className = 'vip-header';
  header.innerHTML = `<img src=\"assets/img/${data.icon}\" class=\"vip-icon\" alt=\"${vip}\" /><h2>${vip}</h2>`;
  header.onclick = () => {
    const list = document.getElementById(vip.replace(/\s/g, ''));
    list.style.display = list.style.display === 'block' ? 'none' : 'block';
  };

  const ul = document.createElement('ul');
  ul.className = 'price-list';
  ul.id = vip.replace(/\s/g, '');

  data.prices.forEach(([harga, cash]) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${harga} - ${cash}
      <img src=\"assets/img/dollar.png\" class=\"dollar-icon\" />
    `;
    li.onclick = () => addToCart(vip, harga, cash);
    ul.appendChild(li);
  });

  div.appendChild(header);
  div.appendChild(ul);
  container.appendChild(div);
});

function addToCart(vip, harga, cash) {
  cart.push({ vip, harga, cash });
  renderCart();
}

function renderCart() {
  cartList.innerHTML = '';
  cart.forEach((item, i) => {
    const li = document.createElement('li');
    li.textContent = `${item.vip} - ${item.harga} (${item.cash} cash)`;
    cartList.appendChild(li);
  });
}

document.getElementById('checkout-btn').onclick = () => {
  const phone = '6285713056206';
  const msg = cart.map(item => `VIP ${item.vip} - ${item.harga} (${item.cash} cash)`).join('%0A');
  const url = `https://wa.me/${phone}?text=Halo%2C%20saya%20ingin%20beli:%0A${msg}`;
  window.open(url, '_blank');
};

searchInput.addEventListener('input', (e) => {
  const q = e.target.value.toLowerCase();
  document.querySelectorAll('.price-list li').forEach(li => {
    li.style.display = li.textContent.toLowerCase().includes(q) ? 'flex' : 'none';
  });
});

toggleDark.onclick = () => {
  document.body.classList.toggle('dark');
};
