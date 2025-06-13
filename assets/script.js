document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const loginType = document.getElementById("loginType").value;
  const playerId = document.getElementById("playerId").value;
  const vipLevel = document.getElementById("vipLevel").value;
  const checkboxes = document.querySelectorAll(".checkbox-group input:checked");

  const selectedPackages = Array.from(checkboxes).map(cb => cb.value).join(", ");

  const message = `Halo admin, saya mau top up:\n- Tipe Akun: ${loginType}\n- ID Pemain: ${playerId}\n- Level VIP: ${vipLevel}\n- Paket Pilihan: ${selectedPackages}`;

  const whatsappNumber = "6281234567890"; // GANTI dengan nomor admin kamu
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");
});

