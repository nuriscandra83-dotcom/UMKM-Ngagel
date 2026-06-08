# 🏪 UMKM Ngagel

**Direktori digital UMKM lokal berbasis web — open source, gratis, bisa dikontribusi siapa saja.**

[![GitHub Pages](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?logo=github)](https://USERNAME.github.io/umkm-ngagel)

---

## 🚀 Demo Langsung

Setelah deploy ke GitHub Pages, bisa diakses di:
```
https://USERNAME.github.io/umkm-ngagel
```

---

## ✨ Fitur

- 🗺️ **Peta interaktif** — lokasi UMKM langsung di peta OpenStreetMap
- 🔍 **Pencarian real-time** — cari berdasarkan nama, produk, atau deskripsi
- 🏷️ **Filter kategori** — Kuliner, Jasa, Belanja
- 📱 **Mobile-first** — dioptimalkan untuk tampilan HP
- 📋 **Halaman detail** — info lengkap + daftar produk/layanan tiap UMKM
- ⚡ **Cepat & ringan** — tidak butuh backend, murni HTML/CSS/JS

---

## 📁 Struktur File

```
umkm-ngagel/
├── index.html    ← Struktur halaman
├── style.css     ← Desain & tampilan
├── app.js        ← Logika aplikasi
├── data.js       ← 📝 DATA UMKM (edit di sini!)
└── README.md
```

---

## ➕ Cara Menambahkan UMKM

Edit file `data.js`, salin template berikut dan isi datanya:

```javascript
{
  id: 4,                          // Nomor unik (tambah dari yang terakhir)
  name: "Nama Usaha",             // Nama UMKM
  category: "Kuliner",            // "Kuliner" | "Jasa" | "Belanja"
  lat: -7.2900,                   // Koordinat latitude (dari Google Maps)
  lng: 112.7510,                  // Koordinat longitude
  desc: "Deskripsi singkat.",     // Maks 1-2 kalimat
  distance: "0.5 km",             // Jarak estimasi dari pusat
  status: "Buka",                 // "Buka" atau "Tutup"
  icon: "🍜",                     // Emoji representasi usaha
  products: [
    {
      name: "Nama Produk",
      desc: "Deskripsi produk",
      price: "Rp 10.000",
      img: "🍜"                   // Emoji produk
    }
  ]
}
```

> 💡 **Tip:** Koordinat bisa dicari di [Google Maps](https://maps.google.com) → klik kanan lokasi → "Koordinat ini"

---

## 🌐 Deploy ke GitHub Pages

1. **Fork** atau clone repo ini
2. Upload semua file ke repositori GitHub kamu
3. Buka **Settings → Pages**
4. Pilih branch `main`, folder `/ (root)`
5. Klik **Save** — website langsung online! 🎉

---

## 🤝 Kontribusi

Pull request sangat disambut! Cara berkontribusi:

1. Fork repo ini
2. Buat branch baru: `git checkout -b tambah-umkm-baru`
3. Edit `data.js` dengan data UMKM baru
4. Commit: `git commit -m "Tambah: Nama UMKM"`
5. Push & buat Pull Request

---

## 📄 Lisensi

MIT License — bebas digunakan, dimodifikasi, dan didistribusikan.

---

*Dibuat dengan ❤️ untuk komunitas UMKM Ngagel*
