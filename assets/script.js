const cart = [];
const cartCount = document.getElementById('cart-count');
const cartList = document.getElementById('cart-list');
const cartItems = document.getElementById('cart-items');
const checkoutBtn = document.getElementById('checkout-btn');

document.querySelectorAll('.vip-option').forEach(option => {
    option.addEventListener('click', () => {
        const vip = option.getAttribute('data-vip');
        if (!cart.includes(vip)) {
            cart.push(vip);
            updateCart();
        }
    });
});

function updateCart() {
    cartCount.textContent = cart.length;
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.charAt(0).toUpperCase() + item.slice(1);
        cartList.appendChild(li);
    });
    cartItems.style.display = cart.length > 0 ? 'block' : 'none';
}

checkoutBtn.addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Checkout berhasil!');
        cart.length = 0;
        updateCart();
    } else {
        alert('Keranjang kosong!');
    }
});
