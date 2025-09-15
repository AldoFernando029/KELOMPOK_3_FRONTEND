# DOKUMENTASI TUGAS KULIAH FRONT-END PROGRAMMING

##  **IMPLEMENTASI COUNTDOWN TIMER PADA APLIKASI BERBASIS WEB**

**Disusun oleh:**  
- **Jessica Winola (535240026)**  
- **Aldo Fernando (535240029)**
  
## **1.PENDAHULUAN**

### **1.1. Deskripsi Aplikasi Web**
Aplikasi Countdown Timer adalah aplikasi berbasis web yang memungkinkan pengguna untuk mengatur hitungan mundur waktu (jam, menit, detik).  
Fitur utama yang tersedia:
- Edit waktu hitungan mundur  
- Reset timer  
- Alarm otomatis saat waktu habis  
- Pemilihan tema background (Galaxy, House, Sunset Valley, Cherry Blossom)  

Aplikasi dibuat menggunakan:  
- HTML: Struktur halaman  
- CSS: Tampilan dan tata letak  
- JavaScript: Logika timer, alarm, serta pengaturan tema  

### **1.2. Tujuan**
Tujuan pembuatan aplikasi ini adalah:  
1. Memberikan pengalaman interaktif dalam mengatur timer.  
2. Melatih penerapan HTML, CSS, dan JavaScript dalam web development.  
3. Menyediakan aplikasi sederhana yang bermanfaat untuk aktivitas sehari-hari (belajar, olahraga, masak, dll).  

## **2.LANDASAN TEORI**

### **2.1. Timer dan Hitungan Mundur**
Timer adalah alat atau program yang digunakan untuk menghitung waktu mundur dari nilai tertentu menuju nol.  
Dalam pemrograman, timer biasanya menggunakan setInterval untuk mengurangi nilai detik secara konsisten.  

### **2.2. Perhitungan Manual Countdown Timer**
Konversi waktu secara manual:  
- Jam → Detik: jam × 3600  
- Menit → Detik: menit × 60 
- Detik → Detik: detik

### **2.3. Perhitungan dan Cara Kerja Countdown Timer**
Aplikasi Countdown Timer bekerja dengan mengonversi waktu input (jam, menit, detik) menjadi total detik terlebih dahulu. Misalnya, jika pengguna memasukkan:  
- Jam = 1  
- Menit = 30  
- Detik = 20  

Maka total waktu dalam detik dihitung sebagai:  
Total Detik = (Jam × 3600) + (Menit × 60) + Detik
Total Detik = (1 × 3600) + (30 × 60) + 20 = 5420 detik


Setelah total detik dihitung, timer dijalankan menggunakan fungsi setInterval yang mengurangi nilai timeLeft sebanyak 1 setiap detik.
Setiap kali nilai detik berubah, tampilan timer (hh:mm:ss) diperbarui dengan rumus:  
- Jam = floor(timeLeft / 3600)
- Menit = floor((timeLeft % 3600) / 60)
- Detik = timeLeft % 60

Proses ini berulang hingga timeLeft mencapai 0. Saat timer habis:  
1. Timer berhenti (clearInterval dipanggil).  
2. Alarm berbunyi untuk memberi peringatan.  
3. Pesan “Waktu habis!” muncul pada layar.  

## **3.PROGRAM**

### **3.1. Algoritma Countdown Timer**
1. Input waktu (jam, menit, detik).  
2. Konversi semua waktu menjadi total detik (timeLeft).  
3. Tampilkan format hh:mm:ss(hours:minutte:second).  
4. Jika tombol Start ditekan → timer berjalan dengan setInterval.  
5. timeLeft berkurang setiap 1 detik.  
6. Jika timeLeft == 0:  
   - Timer berhenti  
   - Alarm berbunyi  
   - Pesan "Waktu habis!" muncul  
7. Tombol Reset mengembalikan timer ke 00:00:00.  
8. Pengguna dapat mengganti background sesuai pilihan tema.  

### **3.2. Fitur-Fitur Aplikasi Web**
- Edit timer (jam, menit, detik)  
- Reset timer  
- Start/Stop timer  
- Alarm otomatis saat waktu habis  
- Pilihan tema background  

## **4.ANALISIS HASIL DAN RELEVANSI**
### **4.1. Relevansi dengan Konsep STEM**
Aplikasi Countdown Timer memiliki relevansi dengan konsep STEM. Dari sisi Science, aplikasi ini memanfaatkan logika perhitungan waktu dan interval detik. Pada aspek Technology, 
aplikasi dikembangkan menggunakan teknologi berbasis web dengan HTML, CSS, dan JavaScript. Dari segi Engineering, perancangan algoritma countdown timer dilakukan agar sistem dapat berjalan efisien dan responsif.
Sedangkan pada bagian Mathematics, aplikasi ini menerapkan konversi waktu (jam, menit, detik) menjadi total detik serta perhitungan mundur yang akurat.  
- Science (S): Logika perhitungan waktu dan interval.  
- Technology (T): Implementasi aplikasi berbasis web.  
- Engineering (E): Perancangan algoritma countdown timer.  
- Mathematics (M): Konversi waktu (jam, menit, detik → total detik).  


