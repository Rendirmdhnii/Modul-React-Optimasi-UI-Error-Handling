# Tugas Pertemuan 12/13 - Modul React: Optimasi UI & Error Handling

Repository ini berisi hasil pengerjaan tugas pertemuan 12 dan 13 mengenai optimasi antarmuka (UI) dan penanganan error pada aplikasi React.

## 📝 Deskripsi Proyek
Proyek ini merupakan aplikasi **Product Dashboard** yang mengimplementasikan berbagai teknik lanjutan dalam React untuk meningkatkan performa dan stabilitas aplikasi. 

Konsep utama yang diterapkan pada proyek ini meliputi:
- **Error Boundaries**: Untuk menangkap error pada komponen sehingga aplikasi tidak *crash* sepenuhnya dan dapat menampilkan pesan error (*fallback UI*).
- **Performance Optimization**: 
  - `React.memo`: Mencegah proses *render* ulang yang tidak perlu pada komponen.
  - `useMemo`: Melakukan *caching* pada hasil komputasi data agar lebih cepat.
  - `useCallback`: Menghindari pembuatan ulang fungsi pada setiap proses render.
- **Concurrent Features & Responsiveness**: Penggunaan fitur seperti `useTransition` dan `Suspense` untuk menjaga antarmuka tetap responsif.
- **Custom Hooks**: Memisahkan logika aplikasi agar struktur komponen lebih rapi.

## 🚀 Cara Menjalankan Aplikasi (Lokal)

Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) di komputer Anda.

1. Clone repository ini:
   ```bash
   git clone https://github.com/Rendirmdhnii/Modul-React-Optimasi-UI-Error-Handling.git
   ```
2. Masuk ke direktori proyek:
   ```bash
   cd Modul-React-Optimasi-UI-Error-Handling
   ```
3. Install *dependencies*:
   ```bash
   npm install
   ```
4. Jalankan aplikasi:
   ```bash
   npm start
   ```
5. Buka `http://localhost:3000` di browser Anda.

## 👨‍💻 Informasi Mahasiswa
- **Nama**: (Isi nama Anda di sini / Rendi Ramadhani)
- **NPM / NIM**: (Isi NPM/NIM Anda)
- **Tugas**: Pertemuan 12 & 13

---
*Dibuat menggunakan React.js*
