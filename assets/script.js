const vipData = {
  Silver: {
    icon: 'silver.png',
    prices: [['Rp 55.000', '605'], ['Rp 70.000', '880'], ['Rp 95.000', '1210'], ['Rp 135.000', '1892'], ['Rp 190.000', '2992'], ['Rp 250.000', '3872'], ['Rp 275.000', '6600']]
  },
  Gold: {
    icon: 'gold.png',
    prices: [['Rp 55.000', '688'], ['Rp 70.000', '1000'], ['Rp 95.000', '1375'], ['Rp 135.000', '2150'], ['Rp 190.000', '3400'], ['Rp 250.000', '4400'], ['Rp 275.000', '7500']]
  },
  Zamrud: {
    icon: 'zamrud.png',
    prices: [['Rp 55.000', '825'], ['Rp 70.000', '1200'], ['Rp 95.000', '1650'], ['Rp 135.000', '2580'], ['Rp 190.000', '4080'], ['Rp 250.000', '5280'], ['Rp 275.000', '9000']]
  },
  Diamond: {
    icon: 'diamond.png',
    prices: [['Rp 55.000', '963'], ['Rp 70.000', '1400'], ['Rp 95.000', '1925'], ['Rp 135.000', '3010'], ['Rp 190.000', '4760'], ['Rp 250.000', '6160'], ['Rp 275.000', '10500']]
  },
  "Black Diamond": {
    icon: 'blackdiamond.png',
    prices: [['Rp 55.000', '1100'], ['Rp 70.000', '1600'], ['Rp 95.000', '2200'], ['Rp 135.000', '3440'], ['Rp 190.000', '5440'], ['Rp 250.000', '7040'], ['Rp 275.000', '12000']]
  }
};

const vipWrapper = document.getElementById('vip-container');
const cartList = document.getElementById('cart-list');
const checkoutBtn = document.getElementById('checkout-btn');
const toggleDark = document.getElementById('toggle-dark');
const togglePriceList = document.getElementById('toggle-pricelist');

let cart = [];
let listOpen = false;

togglePriceList.onclick = () => {
  listOpen = !listOpen;
  vipWrapper.style.display = listOpen ? 'block' : 'none';
};

Object.entries(vipData).forEach(([name, data]) => {
  const box = document.createElement('div');
  box.className = 'vip-box';
  const h3 = document.createElement('h3');
  h3.innerHTML = `<img src="assets/img/${data.icon}" alt="${name}"> ${name}`;
  box.appendChild(h3);

  const ul = document.createElement('ul');
  ul.className = 'price-list';

  data.prices.forEach(([harga, cash]) => {
    const li = document.createElement('li');
    li.innerHTML = `${harga} - ${cash}<img src="assets/img/dollar.png" class="dollar-icon">`;
    li.onclick = () => addToCart(name, harga, cash);
    ul.appendChild(li);
  });

  box.appendChild(ul);
  vipWrapper.appendChild(box);
});

function addToCart(vip, harga, cash) {
  cart.push({ vip, harga, cash });
  renderCart();
}

function renderCart() {
  cartList.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.vip} - ${item.harga} (${item.cash} cash)`;
    cartList.appendChild(li);
  });
}

checkoutBtn.onclick = () => {
  const nomor = '6285713056206';
  const text = cart.map(item => `VIP ${item.vip} - ${item.harga} (${item.cash} cash)`).join('%0A');
  window.open(`https://wa.me/${nomor}?text=Halo%2C%20saya%20ingin%20beli:%0A${text}`, '_blank');
};

toggleDark.onclick = () => {
  document.body.classList.toggle('dark');
};
