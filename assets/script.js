// Variabel untuk elemen HTML
const listCashBtn = document.getElementById('list-cash');
const goldenShotBtn = document.getElementById('golden-shot');
const poolPassBtn = document.getElementById('pool-pass');
const veniceLegalBtn = document.getElementById('venice-legal');

// Kontainer untuk pilihan VIP dan opsi lainnya
const vipOptionsContainer = document.querySelector('.vip-options');
const goldenShotOptionsContainer = document.querySelector('.golden-shot-options');
const poolPassOptionsContainer = document.querySelector('.pool-pass-options');
const veniceLegalOptionsContainer = document.querySelector('.venice-legal-options');

// Keranjang
const cartList = document.getElementById('cart-list');
const cartCount = document.getElementById('cart-count');
let selectedItems = [];

// Pilihan untuk masing-masing menu (List Cash, Golden Shot, dll.)
const vipList = ['Bronze', 'Silver', 'Gold', 'Zamrud', 'Diamond', 'Black Diamond'];
const goldenShotList = ['24 Golden Shot', '48 Golden Shot', '72 Golden Shot', '96 Golden Shot', '120 Golden Shot'];
const poolPassList = ['Biasa Rp 50.000', 'Elite Rp 85.000'];
const veniceLegalList = ['7 Hari Rp 80.000', '16 Hari Rp 155.000', '21 Hari Rp 230.000', '28 Hari Rp 285.000'];

// Fungsi untuk menampilkan opsi pilihan (List Cash, Golden Shot, dll.)
function toggleOptions(button, container, options) {
  if (container.style.display === 'flex') {
    container.style.display = 'none';
  } else {
    container.style.display = 'flex';
    container.innerHTML = ''; // Bersihkan kontainer

    // Menambahkan pilihan ke dalam kontainer
    options.forEach(item => {
      const optionDiv = document.createElement('div');
      optionDiv.classList.add('option');
      optionDiv.innerHTML = `${item}`;
      // Jika ada logo untuk setiap pilihan, Anda bisa menambahkannya di sini
      const logoImg = document.createElement('img');
      logoImg.src = `assets/img/${item.toLowerCase().replace(' ', '-')}.png`; // Misalnya, logo untuk "Bronze" -> bronze.png
      optionDiv.appendChild(logoImg);

      // Menambahkan event listener untuk memilih item
      optionDiv.addEventListener('click', () => toggleSelection(optionDiv, item));
      container.appendChild(optionDiv);
    });
  }
}

// Fungsi untuk menambah/menghapus item dari keranjang
function toggleSelection(optionDiv, item) {
  if (selectedItems.includes(item)) {
    selectedItems = selectedItems.filter(selectedItem => selectedItem !== item);
    optionDiv.classList.remove('selected');
  } else {
    selectedItems.push(item);
    optionDiv.classList.add('selected');
  }

  updateCart();
}

// Fungsi untuk memperbarui tampilan keranjang
function updateCart() {
  cartList.innerHTML = '';
  selectedItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.textContent = item;
    cartList.appendChild(itemDiv);
  });

  cartCount.textContent = selectedItems.length;
}

// Event listeners untuk tombol fitur
listCashBtn.addEventListener('click', () => toggleOptions(listCashBtn, vipOptionsContainer, vipList));
goldenShotBtn.addEventListener('click', () => toggleOptions(goldenShotBtn, goldenShotOptionsContainer, goldenShotList));
poolPassBtn.addEventListener('click', () => toggleOptions(poolPassBtn, poolPassOptionsContainer, poolPassList));
veniceLegalBtn.addEventListener('click', () => toggleOptions(veniceLegalBtn, veniceLegalOptionsContainer, veniceLegalList));

// Checkout function
function checkout() {
  alert('Checkout: ' + selectedItems.join(', '));
  selectedItems = [];
  updateCart();
}
