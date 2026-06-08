/**
 * app.js — Logika Aplikasi UMKM Ngagel
 */

/* ── Inisialisasi Peta ── */
const map = L.map('map', { zoomControl: true }).setView([-7.2915, 112.7500], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
  maxZoom: 19
}).addTo(map);

/* Ikon custom untuk marker */
const customIcon = L.divIcon({
  className: '',
  html: `<div style="
    width:32px; height:32px;
    background:#0a2a5e;
    border:3px solid #c9a84c;
    border-radius:50% 50% 50% 0;
    transform:rotate(-45deg);
    box-shadow: 0 3px 10px rgba(10,42,94,0.35);
  "></div>`,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -36]
});

let markers = [];
let currentCategory = 'Semua';

/* ── Render Peta & Katalog ── */
function renderApp(data) {
  // Hapus marker lama
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  const catalogContainer = document.getElementById('catalog-list');
  const resultCount = document.getElementById('result-count');
  catalogContainer.innerHTML = '';

  // Update jumlah hasil
  resultCount.textContent = `${data.length} usaha`;

  if (data.length === 0) {
    catalogContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <p>Usaha tidak ditemukan.<br>Coba kata kunci lain.</p>
      </div>
    `;
    return;
  }

  data.forEach((item, index) => {
    // Tambah marker ke peta
    const marker = L.marker([item.lat, item.lng], { icon: customIcon })
      .addTo(map)
      .bindPopup(`
        <div style="font-family:'DM Sans',sans-serif; min-width:130px;">
          <strong style="color:#0a2a5e; font-size:0.9rem;">${item.name}</strong><br>
          <span style="font-size:0.75rem; color:#666;">${item.category} · ${item.distance}</span><br>
          <span style="font-size:0.75rem; color:#16a34a;">${item.status}</span>
        </div>
      `);

    marker.on('click', () => openDetail(item));
    markers.push(marker);

    // Buat kartu UMKM
    const card = document.createElement('div');
    card.className = 'umkm-card';
    card.style.animationDelay = `${index * 60}ms`;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.innerHTML = `
      <div class="umkm-icon-wrap">${item.icon}</div>
      <div class="umkm-info">
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
        <div class="umkm-meta">
          <span class="tag tag-cat">${item.category}</span>
          <span class="tag tag-open">${item.status}</span>
        </div>
      </div>
      <span class="umkm-arrow">›</span>
    `;
    card.addEventListener('click', () => openDetail(item));
    card.addEventListener('keydown', (e) => { if (e.key === 'Enter') openDetail(item); });
    catalogContainer.appendChild(card);
  });
}

/* ── Filter Kategori ── */
function filterCategory(category, el) {
  currentCategory = category;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  applyFilters();
}

/* ── Filter Gabungan (Search + Kategori) ── */
function applyFilters() {
  const searchText = document.getElementById('searchInput').value.toLowerCase().trim();
  const clearBtn = document.getElementById('clearSearch');
  clearBtn.style.display = searchText ? 'block' : 'none';

  const filtered = umkmData.filter(item => {
    const matchCategory = currentCategory === 'Semua' || item.category === currentCategory;
    const matchSearch = !searchText ||
      item.name.toLowerCase().includes(searchText) ||
      item.desc.toLowerCase().includes(searchText) ||
      item.category.toLowerCase().includes(searchText) ||
      item.products.some(p =>
        p.name.toLowerCase().includes(searchText) ||
        p.desc.toLowerCase().includes(searchText)
      );
    return matchCategory && matchSearch;
  });

  renderApp(filtered);
}

/* ── Buka Halaman Detail ── */
function openDetail(item) {
  document.getElementById('main-screen').style.display = 'none';

  const detailPage = document.getElementById('detail-page');
  detailPage.style.display = 'flex';

  // Isi data header
  document.getElementById('detail-title').innerText = item.name;
  document.getElementById('detail-desc').innerText = item.desc;
  document.getElementById('detail-cover-icon').innerText = item.icon;
  document.getElementById('detail-category-badge').innerText = item.category;
  document.getElementById('detail-status-chip').innerHTML = `🟢 ${item.status}`;
  document.getElementById('detail-distance-chip').innerHTML = `📍 ${item.distance}`;

  // Isi daftar produk
  const productContainer = document.getElementById('product-list');
  productContainer.innerHTML = '';

  if (item.products && item.products.length > 0) {
    item.products.forEach(prod => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-img">${prod.img}</div>
        <div class="product-info">
          <h5>${prod.name}</h5>
          <p>${prod.desc}</p>
          <span class="product-price">${prod.price}</span>
        </div>
      `;
      productContainer.appendChild(card);
    });
  } else {
    productContainer.innerHTML = '<p style="color:#888; font-size:0.85rem;">Belum ada produk yang ditambahkan.</p>';
  }

  // Scroll ke atas
  detailPage.scrollTop = 0;
}

/* ── Tutup Detail ── */
function closeDetail() {
  document.getElementById('detail-page').style.display = 'none';
  document.getElementById('main-screen').style.display = 'block';
}

/* ── Event Listeners ── */
document.getElementById('searchInput').addEventListener('input', applyFilters);

document.getElementById('clearSearch').addEventListener('click', () => {
  document.getElementById('searchInput').value = '';
  applyFilters();
  document.getElementById('searchInput').focus();
});

// Tombol back hardware (Android)
window.addEventListener('popstate', () => {
  const detailPage = document.getElementById('detail-page');
  if (detailPage.style.display === 'flex') closeDetail();
});

/* ── Render Awal ── */
renderApp(umkmData);

// Invalidate map size setelah render (fix tile loading)
setTimeout(() => map.invalidateSize(), 100);
