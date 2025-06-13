document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const loginType = document.getElementById("loginType").value;
  const playerId = document.getElementById("playerId").value;
  const vipLevel = document.getElementById("vipLevel").value;
  const vipTier = document.getElementById("vipTier").value;
  const checkboxes = document.querySelectorAll(".checkbox-group input:checked");

  const selectedPackages = Array.from(checkboxes)
    .map(cb => cb.value)
    .join(", ");

  const message = `Halo Admin, saya ingin top up 8 Ball Pool:\n\n` +
                  `🔐 Tipe Login: ${loginType}\n` +
                  `🆔 ID Pemain: ${playerId}\n` +
                  `⭐ Level VIP: ${vipLevel}\n` +
                  `💎 Tipe VIP Akun: ${vipTier}\n` +
                  `📦 Paket yang Dipilih: ${selectedPackages}`;

  const whatsappNumber = "6281234567890"; // Ganti sesuai nomor WA admin
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});
