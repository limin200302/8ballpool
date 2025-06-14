const vipData = {
  Silver: {
    icon: 'silver.png',
    prices: [
      ['Rp 55.000', '605'],
      ['Rp 70.000', '880'],
      ['Rp 95.000', '1.210'],
      ['Rp 135.000', '1.892'],
      ['Rp 190.000', '2.992'],
      ['Rp 250.000', '3.872'],
      ['Rp 275.000', '6.600'],
    ],
  },
  Gold: {
    icon: 'gold.png',
    prices: [
      ['Rp 55.000', '688'],
      ['Rp 70.000', '1.000'],
      ['Rp 95.000', '1.375'],
      ['Rp 135.000', '2.150'],
      ['Rp 190.000', '3.400'],
      ['Rp 250.000', '4.400'],
      ['Rp 275.000', '7.500'],
    ],
  },
  Zamrud: {
    icon: 'zamrud.png',
    prices: [
      ['Rp 55.000', '825'],
      ['Rp 70.000', '1.200'],
      ['Rp 95.000', '1.650'],
      ['Rp 135.000', '2.580'],
      ['Rp 190.000', '4.080'],
      ['Rp 250.000', '5.280'],
      ['Rp 275.000', '9.000'],
    ],
  },
  Diamond: {
    icon: 'diamond.png',
    prices: [
      ['Rp 55.000', '963'],
      ['Rp 70.000', '1.400'],
      ['Rp 95.000', '1.925'],
      ['Rp 135.000', '3.010'],
      ['Rp 190.000', '4.760'],
      ['Rp 250.000', '6.160'],
      ['Rp 275.000', '10.500'],
    ],
  },
  "Black Diamond": {
    icon: 'blackdiamond.png',
    prices: [
      ['Rp 55.000', '1.100'],
      ['Rp 70.000', '1.600'],
      ['Rp 95.000', '2.200'],
      ['Rp 135.000', '3.440'],
      ['Rp 190.000', '5.440'],
      ['Rp 250.000', '7.040'],
      ['Rp 275.000', '12.000'],
    ],
  },
};

const container = document.getElementById('vip-container');

Object.entries(vipData).forEach(([vip, data]) => {
  const div = document.createElement('div');
  div.className = 'vip-category';

  const header = document.createElement('div');
  header.className = 'vip-header';
  header.innerHTML = `
    <img src="assets/img/${data.icon}" class="vip-icon" alt="${vip}" />
    <h2>${vip}</h2>
  `;
  header.onclick = () => {
    const list = document.getElementById(vip.replace(/\s/g, ''));
    list.style.display = list.style.display === 'block' ? 'none' : 'block';
  };

  const ul = document.createElement('ul');
  ul.className = 'price-list';
  ul.id = vip.replace(/\s/g, '');

  data.prices.forEach(([harga, cash]) => {
    const li = document.createElement('li');
    li.innerHTML = `${harga} - ${cash} <img src="assets/img/dollar.png" class="dollar-icon" />`;
    li.onclick = () => buy(vip, harga, cash);
    ul.appendChild(li);
  });

  div.appendChild(header);
  div.appendChild(ul);
  container.appendChild(div);
});

function buy(vip, harga, cash) {
  const phone = '6285713056206';
  const message = `Halo, saya ingin beli cash 8Ball Pool VIP ${vip} dengan harga ${harga} (${cash} Cash)`;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}
