/**
 * data.js — Database UMKM Ngagel
 * ─────────────────────────────────
 * Cara menambahkan UMKM baru:
 * 1. Salin salah satu blok objek di bawah
 * 2. Ubah id, name, category, lat, lng, dll.
 * 3. Tambahkan produk di dalam array products[]
 *
 * Kategori yang tersedia: "Kuliner" | "Jasa" | "Belanja"
 * Koordinat: cari di Google Maps, klik kanan → "Koordinat ini"
 */

const umkmData = [
  {
    id: 1,
    name: "Mind Munch",
    category: "Kuliner",
    lat: -7.2910,
    lng: 112.7520,
    desc: "Camilan fungsional pendukung fokus mahasiswa.",
    distance: "0.2 km",
    status: "Buka",
    icon: "🧠",
    products: [
      {
        name: "Matcha Energy Bites",
        desc: "Snack sehat kaya antioksidan, cocok buat belajar",
        price: "Rp 15.000",
        img: "🍵"
      },
      {
        name: "Dark Choco Focus Bar",
        desc: "Cokelat hitam pilihan untuk meningkatkan konsentrasi",
        price: "Rp 18.000",
        img: "🍫"
      },
      {
        name: "Granola Mix Jar",
        desc: "Granola serbaguna, cocok sarapan atau camilan",
        price: "Rp 22.000",
        img: "🥣"
      }
    ]
  },
  {
    id: 2,
    name: "Laundrelax",
    category: "Jasa",
    lat: -7.2925,
    lng: 112.7485,
    desc: "Platform jasa laundry terpercaya untuk pakaian harian dan khusus.",
    distance: "0.3 km",
    status: "Buka",
    icon: "🧺",
    products: [
      {
        name: "Cuci Komplit (Kiloan)",
        desc: "Cuci, kering, setrika, wangi — harga per kg",
        price: "Rp 6.000/kg",
        img: "👕"
      },
      {
        name: "Cuci Sepatu",
        desc: "Pembersihan mendalam sepatu sneakers & kasual",
        price: "Rp 25.000",
        img: "👟"
      },
      {
        name: "Setrika Saja",
        desc: "Pakaian rapi siap pakai — harga per kg",
        price: "Rp 4.000/kg",
        img: "✨"
      },
      {
        name: "Laundry Express 3 Jam",
        desc: "Layanan kilat, selesai dalam 3 jam",
        price: "Rp 10.000/kg",
        img: "⚡"
      }
    ]
  },
  {
    id: 3,
    name: "Toko Sembako Rejeki",
    category: "Belanja",
    lat: -7.2895,
    lng: 112.7535,
    desc: "Sedia kebutuhan pokok sehari-hari dengan harga bersahabat.",
    distance: "0.4 km",
    status: "Buka",
    icon: "🏪",
    products: [
      {
        name: "Beras Premium 5kg",
        desc: "Beras putih pulen pilihan petani lokal",
        price: "Rp 75.000",
        img: "🌾"
      },
      {
        name: "Minyak Goreng 2L",
        desc: "Minyak kelapa sawit murni",
        price: "Rp 32.000",
        img: "🛢️"
      },
      {
        name: "Gula Pasir 1kg",
        desc: "Gula pasir putih halus",
        price: "Rp 14.000",
        img: "🍬"
      },
      {
        name: "Telur Ayam 1kg",
        desc: "Telur ayam kampung segar",
        price: "Rp 28.000",
        img: "🥚"
      }
    ]
  }
  // ── Tambahkan UMKM baru di sini ──
  // {
  //   id: 4,
  //   name: "Nama Usaha",
  //   category: "Kuliner",
  //   lat: -7.2900,
  //   lng: 112.7510,
  //   desc: "Deskripsi singkat usaha.",
  //   distance: "0.5 km",
  //   status: "Buka",
  //   icon: "🍜",
  //   products: [
  //     { name: "Produk 1", desc: "Deskripsi produk", price: "Rp 10.000", img: "🍜" }
  //   ]
  // }
];
