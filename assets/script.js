document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil data dari form
  const loginType = document.getElementById("loginType").value;
  const playerId = document.getElementById("playerId").value;
  const vipLevel = document.getElementById("vipLevel").value;
  const vipTier = document.getElementById("vipTier").value;
  const checkboxes = document.querySelectorAll(".checkbox-group input:checked");

  // Ambil pilihan paket
  const selectedPackages = Array.from(checkboxes).map(cb => cb.value).join(", ");

  // Buat isi pesan WhatsApp
  const message = `Halo Admin, saya ingin top up 8 Ball Pool:\n\n` +
                  `🔐 Tipe Login: ${loginType}\n` +
                  `🆔 ID Pemain: ${playerId}\n` +
                  `⭐ Level VIP: ${vipLevel}\n` +
                  `💎 Tipe VIP Akun: ${vipTier}\n` +
                  `📦 Paket yang Dipilih: ${selectedPackages}`;

  // Nomor WhatsApp tujuan (ganti dengan nomor admin kamu)
  const whatsappNumber = "6281234567890";

  // Encode pesan & redirect ke WhatsApp
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});
