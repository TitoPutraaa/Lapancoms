<h1 align="center">🏘️ Frontend CMS Desa Wisata</h1>

Frontend application untuk **Content Management System (CMS) Desa Wisata** yang berfungsi sebagai antarmuka pengguna (user interface) bagi **Public, Admin, dan Super Admin** dalam mengakses dan mengelola konten website.

Project ini dikembangkan sebagai bagian dari **Project Akademik Program Studi Teknologi Rekayasa Perangkat Lunak, Semester 3 – Politeknik Negeri Bali**.

---

## 📌 Deskripsi Singkat

🎨 **Frontend ini bertanggung jawab untuk:**

- Menyajikan tampilan website Desa Wisata yang informatif dan interaktif
- Menghubungkan pengguna dengan backend melalui **REST API**
- Menyediakan dashboard admin untuk pengelolaan konten
- Mengelola state dan alur navigasi aplikasi

🧑 **Sistem memiliki 3 jenis pengguna:**

- **Public** → Mengakses informasi desa wisata (landing page, blog, galeri)
- **Admin** → Mengelola konten blog & galeri miliknya
- **Super Admin** → Mengelola seluruh konten dan admin

---

## 🪶 Fitur Utama

🌐 **Public Website**

- Landing page (Home, About, Map, Footer)
- Halaman Blog
- Galeri Desa Wisata
- Tampilan responsif (desktop & mobile)

🔐 **Autentikasi**

- Halaman login Admin & Super Admin
- Proteksi halaman berdasarkan role
- Redirect otomatis sesuai hak akses

📝 **Manajemen Konten (Admin & Super Admin)**

- Membuat dan mengedit blog
- Menggunakan beberapa template blog
- Upload dan hapus gambar galeri
- Pengaturan visibilitas konten

👤 **Manajemen Admin (Super Admin)**

- Menambahkan admin baru
- Menghapus admin
- Melihat daftar admin
