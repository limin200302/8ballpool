const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  modeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

const sections = document.querySelectorAll('.price-section');
const buttons = document.querySelectorAll('.toggle-section');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.dataset.target;
    sections.forEach(section => {
      if (section.id === targetId) {
        section.style.display = section.style.display === 'block' ? 'none' : 'block';
      } else {
        section.style.display = 'none';
      }
    });
  });
});

let cart = [];

function addToCart(itemName, price) {
  const exists = cart.find(item => item.name === itemName);
  const button = event.target;

  if (exists) {
    // Remove from cart
    cart = cart.filter(item => item.name !== itemName);
    button.classList.remove('selected');
  } else {
    // Add to cart
    cart.push({ name: itemName, price });
    button.classList.add('selected');
  }

  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - Rp ${item.price.toLocaleString('id-ID')}`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = '❌';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = () => {
      cart.splice(index, 1);
      document.querySelectorAll('.item button').forEach(btn => {
        if (btn.textContent.includes(item.name)) {
          btn.classList.remove('selected');
        }
      });
      renderCart();
    };

    li.appendChild(removeBtn);
    cartItems.appendChild(li);
  });
}

document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (cart.length === 0) return alert("Keranjang kosong!");

  const waNumber = '6285713056206';
  const message = cart.map(item => `- ${item.name}: Rp ${item.price.toLocaleString('id-ID')}`).join('\n');
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const fullMsg = `Halo Mamet Ucup! Saya ingin memesan:\n\n${message}\n\nTotal: Rp ${total.toLocaleString('id-ID')}`;

  window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(fullMsg)}`);
});

// Drag & move chibi
const chibi = document.getElementById('chibi');
let isDragging = false;

chibi.addEventListener('mousedown', e => {
  isDragging = true;
  let shiftX = e.clientX - chibi.getBoundingClientRect().left;
  let shiftY = e.clientY - chibi.getBoundingClientRect().top;

  function moveAt(pageX, pageY) {
    chibi.style.left = pageX - shiftX + 'px';
    chibi.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(e) {
    moveAt(e.pageX, e.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);
  chibi.onmouseup = () => {
    document.removeEventListener('mousemove', onMouseMove);
    chibi.onmouseup = null;
    isDragging = false;
  };
});

chibi.ondragstart = () => false;
