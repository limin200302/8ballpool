const vipOptions = document.querySelectorAll('.vip-option');
const cartList = document.getElementById('cart-list');
const cartCount = document.getElementById('cart-count');
let selectedVIP = [];

vipOptions.forEach(option => {
  option.addEventListener('click', () => {
    const vipName = option.getAttribute('data-vip');

    if (option.classList.contains('selected')) {
      // Deselect VIP
      option.classList.remove('selected');
      selectedVIP = selectedVIP.filter(item => item !== vipName);
    } else {
      // Select VIP
      option.classList.add('selected');
      selectedVIP.push(vipName);
    }

    updateCart();
  });
});

function updateCart() {
  cartList.innerHTML = '';
  selectedVIP.forEach(vip => {
    const item = document.createElement('div');
    item.textContent = vip;
    cartList.appendChild(item);
  });

  cartCount.textContent = selectedVIP.length;
}

function checkout() {
  if (selectedVIP.length === 0) {
    alert("Silakan pilih minimal satu paket VIP.");
  } else {
    alert("Pesanan Anda:\n" + selectedVIP.join(", "));
  }
}

// Fitur List Cash
document.getElementById('list-cash').addEventListener('click', () => {
  const vipList = [
    'Bronze', 'Silver', 'Gold', 'Zamrud', 'Diamond', 'Black Diamond'
  ];
  const account = prompt("Masukkan akun untuk memilih VIP:");

  if (account) {
    alert(`Akun ${account} dapat memilih paket VIP:\n${vipList.join(", ")}`);
  } else {
    alert("Akun tidak valid!");
  }
});
