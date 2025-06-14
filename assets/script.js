let selectedVIP = "";

function selectVIP(vip) {
  selectedVIP = vip;
  alert("VIP " + vip + " dipilih.");
}

function orderNow() {
  if (!selectedVIP) {
    alert("Silakan pilih VIP terlebih dahulu.");
    return;
  }
  const phone = "085713056206";
  const message = `Halo, saya ingin memesan Cash untuk VIP ${selectedVIP}.`;
  const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");
}
