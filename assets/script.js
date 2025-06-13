const checkboxes = document.querySelectorAll('.vip-options input[type="checkbox"]');
const cartList = document.getElementById('cart-list');
const cartCount = document.getElementById('cart-count');

checkboxes.forEach(box => {
  box.addEventListener('change', updateCart);
});

function updateCart() {
  const selected = [];
  cartList.innerHTML = '';
  checkboxes.forEach(box => {
    if (box.checked) {
      selected.push(box.value);
      const item = document.createElement('div');
      item.textContent = box.value;
      cartList.appendChild(item);
    }
  });
  cartCount.textContent = selected.length;
}

function checkout() {
  const selected = [];
  checkboxes.forEach(box => {
    if (box.checked) selected.push(box.value);
  });

  if (selected.length === 0) {
    alert("Silakan pilih minimal satu paket VIP.");
  } else {
    alert("Pesanan Anda:\n" + selected.join(", "));
  }
}
