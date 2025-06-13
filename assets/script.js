const listCashBtn = document.getElementById('list-cash');
const goldenShotBtn = document.getElementById('golden-shot');
const poolPassBtn = document.getElementById('pool-pass');
const veniceLegalBtn = document.getElementById('venice-legal');
const vipOptionsContainer = document.querySelector('.vip-options');
const goldenShotOptionsContainer = document.querySelector('.golden-shot-options');
const poolPassOptionsContainer = document.querySelector('.pool-pass-options');
const veniceLegalOptionsContainer = document.querySelector('.venice-legal-options');
const cartList = document.getElementById('cart-list');
const cartCount = document.getElementById('cart-count');
let selectedItems = [];

const vipList = [
  { name: 'Bronze', icon: 'bronze.png' },
  { name: 'Silver', icon: 'silver.png' },
  { name: 'Gold', icon: 'gold.png' },
  { name: 'Zamrud', icon: 'zamrud.png' },
  { name: 'Diamond', icon: 'diamond.png' },
  { name: 'Black Diamond', icon: 'blackdiamond.png' }
];

const goldenShotList = ['24 Golden Shot', '48 Golden Shot', '72 Golden Shot', '96 Golden Shot', '120 Golden Shot'];
const poolPassList = ['Biasa Rp 50.000', 'Elite Rp 85.000'];
const veniceLegalList = ['7 Hari Rp 80.000', '16 Hari Rp 155.000', '21 Hari Rp 230.000', '28 Hari Rp 285.000'];

// Function to toggle options visibility
function toggleOptions(button, container, optionsList) {
  const isVisible = container.style.display === 'block';
  container.style.display = isVisible ? 'none' : 'block';

  if (!isVisible) {
    container.innerHTML = ''; // Clear previous options
    optionsList.forEach(option => {
      const optionDiv = document.createElement('div');
      optionDiv.classList.add('option');
      optionDiv.textContent = option.name || option; // In case it's a text-based list

      // Add image for VIP options
      if (option.icon) {
        const img = document.createElement('img');
        img.src = `assets/img/${option.icon}`;
        optionDiv.appendChild(img);
      }

      optionDiv.addEventListener('click', () => {
        toggleSelection(optionDiv, option.name || option);
      });

      container.appendChild(optionDiv);
    });
  }
}

// Toggle selection on click
function toggleSelection(optionDiv, optionName) {
  if (optionDiv.classList.contains('selected')) {
    optionDiv.classList.remove('selected');
    selectedItems = selectedItems.filter(item => item !== optionName);
  } else {
    optionDiv.classList.add('selected');
    selectedItems.push(optionName);
  }

  updateCart();
}

// Update cart
function updateCart() {
  cartList.innerHTML = '';
  selectedItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.textContent = item;
    cartList.appendChild(itemDiv);
  });

  cartCount.textContent = selectedItems.length;
}

// Add event listeners
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
