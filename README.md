# Surabaya Diary 🎀

Personal website statis bertema **scrapbook pink-kuning** yang memperkenalkan diri penulis dan kota asalnya, **Surabaya**. Dibuat untuk *Quiz 1 – Website Development Project* mata kuliah Web Programming (EF234301, Kelas D).

🔗 **Live website:** (https://isi-link-website-kamu)
📁 **Source code:** (https://github.com/username/nama-repo)

---

## Halaman dan Routing

| Halaman | URL | Isi |
|---|---|---|
| Homepage | `/quiz1` | Landing page dengan sapaan dan navigasi ke halaman lain |
| Profile | `/quiz1/profile` | Biodata dan galeri foto interaktif (carousel yang bisa digeser) |
| Hometown | `/quiz1/hometown` | Deskripsi singkat Surabaya dengan kolase foto |
| Local Food | `/quiz1/food` | Rawon, Lontong Balap, dan Rujak Cingur |
| Tourist Places | `/quiz1/tourist` | Jembatan Suramadu, Monumen Kapal Selam, dan House of Sampoerna, masing-masing dengan galeri foto |

Setiap halaman berupa folder berisi `index.html`, sehingga URL bersih tanpa ekstensi `.html`.

## Konsep Desain

- **Tema:** scrapbook, dengan foto berbingkai polaroid bergaya washi-tape yang sedikit miring.
- **Palet warna:** Blush `#FFD6E0`, Rose `#FF8FAB`, Butter `#FFF1A8`, Sun `#FFE066`, Cream `#FFFBF2`, dan Cocoa `#5E3A4C` untuk teks.
- **Tipografi:** Fredoka (judul), Quicksand (isi), dan Caveat (caption tulisan tangan) dari Google Fonts.
- **Layout:** bersih, responsif, dengan navigasi pill yang tetap terlihat saat scroll.

## Fitur

- Image carousel berbasis CSS `scroll-snap` dengan tombol prev/next, indikator dots, dan dukungan swipe di layar sentuh
- Layout responsif untuk desktop dan mobile (CSS Grid dan Flexbox)
- Animasi pembuka di Homepage dan hover effect pada menu serta tile
- Mendukung `prefers-reduced-motion` dan fokus keyboard yang terlihat
- Placeholder emoji otomatis muncul jika file foto tidak ditemukan

## Teknologi

- HTML5
- CSS3 (custom properties, grid, flexbox, scroll-snap)
- JavaScript (vanilla, tanpa library atau framework)
- Google Fonts

## Struktur Folder

```
quiz1/
├── index.html            # Homepage
├── profile/index.html
├── hometown/index.html
├── food/index.html
├── tourist/index.html
├── assets/
│   ├── style.css
│   └── script.js
└── img/                  # foto yang dipakai di website
```

## Menjalankan Secara Lokal

Tautan memakai path absolut (`/quiz1/...`), jadi website perlu dijalankan lewat server lokal dari **folder induk** `quiz1`, bukan dengan membuka file langsung.

1. Clone repo ini.
2. Buka folder hasil clone di VS Code.
3. Pasang ekstensi **Live Server**, lalu klik kanan `quiz1/index.html` dan pilih **Open with Live Server**.
4. Buka `http://127.0.0.1:5500/quiz1/` di browser.

## Deployment

Website di-*deploy* sebagai static site ke [ISI NAMA HOSTING, mis. Netlify] langsung dari repo ini. Folder `quiz1` berada di root repo agar alamatnya sesuai ketentuan, yaitu `{domain}/quiz1`.

## Penulis

**[Nama Lengkap]** · [NIM] · Teknik Informatika
