function togglePrices(id) {
  const el = document.getElementById(id);
  el.classList.toggle("hidden");
}

function buy(vip, detail) {
  const message = `Halo, saya ingin beli ${vip} - ${detail}`;
  const phone = "085713056206";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
