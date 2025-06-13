const vipOptionsContainer = document.querySelector('.vip-options');
const cartList = document.getElementById('cart-list');
const cartCount = document.getElementById('cart-count');
let selectedVIP = [];

// Fitur List Cash - Menampilkan VIP berdasarkan akun
document.getElementById('list-cash').addEventListener('click', () => {
  const vipList = [
    'Bronze', 'Silver', 'Gold', 'Zamrud', 'Diamond', 'Black Diamond'
  ];

  // Bersihkan daftar VIP yang lama
  vipOptionsContainer.innerHTML = '';

  // Menambahkan opsi VIP ke dalam daftar
  vipList.forEach(vip => {
    const vipOption = document.createElement('div');
    vipOption.classList.add('vip-option');
    vipOption.setAttribute('data-vip', vip);

    const vipText = document.createElement('span');
    vipText.textContent = vip;

    const vipIcon = document.createElement('img');
    vipIcon.classList.add('vip-icon');
    vipIcon.src = `assets/img/${vip.toLowerCase().replace(" ", "")}.png`; // Sesuaikan nama file gambar

    vipOption.appendChild(vipText);
    vipOption.appendChild(vipIcon);

    vipOption.addEventListener('click', () => {
      toggleVIPSelection(vip, vipOption);
    });

    vipOptionsContainer.appendChild(vipOption);
  });
});

// Menangani pemilihan VIP
function toggleVIPSelection(vipName, vipOption) {
  if (vipOption.classList.contains('selected')) {
    // Deselect VIP
    vipOption.classList.remove('selected');
    selectedVIP = selectedVIP.filter(item => item !== vipName);
  } else {
    // Select VIP
    vipOption.classList.add('selected');
    selectedVIP.push(vipName);
  }

  updateCart();
}

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
