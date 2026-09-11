# Aqours Showcase — Dokumentasi & Riwayat Revisi Desain (Revision Archive)

Dokumentasi ini menggabungkan seluruh catatan spesifikasi, prompt revisi desain, dan perbaikan fitur untuk website **Aqours Showcase** (selain `README.md`).

---

## Daftar Isi
1. [Melengkapi & Menyempurnakan Website Aqours-Showcase (`prompt-lengkapi-aqours-showcase.md`)](#1-melengkapi--menyempurnakan-website-aqours-showcase)
2. [Redesign Visual: Stat Cards, Sub-unit Cards & Member Cards (`design-revisi.md`)](#2-redesign-visual-stat-cards-sub-unit-cards--member-cards)
3. [Revisi Detail Character Card & Efek Hover Grid (`design-revisi-card.md`)](#3-revisi-detail-character-card--efek-hover-grid)
4. [Revisi Layout Detail Character: Background Full & Navigasi Tanpa Scroll (`designrev.md`)](#4-revisi-layout-detail-character-background-full--navigasi-tanpa-scroll)
5. [Perbaikan Fitur Fade-in Scroll (`designrev1.md`)](#5-perbaikan-fitur-fade-in-scroll)
6. [Sinkronisasi Fade-in Scroll Members vs 3D Card Flip (`desss.md`)](#6-sinkronisasi-fade-in-scroll-members-vs-3d-card-flip)
7. [Ubah Discography Menjadi Top 10 Most Popular Songs (`songrev.md`)](#7-ubah-discography-menjadi-top-10-most-popular-songs)
8. [Redesign Layout Most Popular Songs: Podium + Leaderboard (`songdesign.md`)](#8-redesign-layout-most-popular-songs-podium--leaderboard)
9. [Moving Collage Background di Home Section (`designhome.md`)](#9-moving-collage-background-di-home-section)
10. [Fitur Daily Like — Total Like Bersama Semua Pengunjung (`count.md`)](#10-fitur-daily-like--total-like-bersama-semua-pengunjung)

---

## 1. Melengkapi & Menyempurnakan Website Aqours-Showcase
*(Sumber asli: `prompt-lengkapi-aqours-showcase.md`)*

### Konteks Proyek
Saya sedang mengembangkan lanjutan dari website **Aqours-Showcase**, katalog interaktif tentang idol group *Aqours* (dari Love Live! Sunshine!!), dibangun dengan HTML/CSS/JavaScript murni (tanpa framework). Proyek ini bagian dari portofolio frontend saya, jadi fokus utamanya **kualitas desain UI, struktur informasi, dan interaksi** — bukan sekadar fungsi teknis.

### Struktur & Fitur yang Sudah Ada (Jangan Dibongkar)
Kode saat ini (`index.html` + `script.js`) sudah punya beberapa fitur yang **wajib dipertahankan**:

1. **Card flip di grid member** — 9 card di `.card-grid`, sisi depan menampilkan karakter, sisi belakang menampilkan seiyuu (voice actress), dengan warna aksen berbeda per member (`style="color: ..."` di tiap nama). **Pertahankan mekanisme flip ini apa adanya.**
2. **Detail view per member** (`#view-detail`) — saat card diklik, tampil halaman detail dengan *3D photo flip* antara foto karakter dan seiyuu (`profile-flip-wrapper`), lengkap dengan tombol Previous/Next (`#btn-prev`, `#btn-next`) yang berpindah antar member dengan animasi flip. **Ini flip kedua yang terpisah dari flip di grid — pertahankan juga.**
3. **Data member** di `script.js` (objek `MEMBERS`) sudah lengkap: nama, nama Jepang, tahun, sub-unit, ulang tahun, golongan darah, tinggi, hobi (untuk karakter) dan data seiyuu (ulang tahun, kota asal, golongan darah, agensi, debut, nickname). Section baru boleh memanfaatkan struktur data ini, tidak perlu membuat skema data baru dari nol kalau tidak perlu.
4. **Footer** (`.site-footer`) sudah ada tapi baru berisi nama project & credit — akan diperluas (lihat bagian Footer di bawah).

### Yang Perlu Dihapus
- **Seluruh Music Player Bar**: elemen `#music-bar` di HTML (toggle button, panel, track list, audio controls, elemen `<audio>`), blok JavaScript terkait musik di `script.js` (bagian "Music Player (Local Audio)"), CSS terkait `.music-bar`, `.music-toggle`, `.music-panel`, `.track-btn`, `.audio-*`, dan referensi ke file-file di `assets/music/`. Pastikan tidak ada kode/CSS mati yang tersisa.
- **Weather Machine** (`#weather-machine`): elemen HTML-nya, fungsi `initWeatherMachine()` beserta pemanggilannya di `script.js`, dan CSS terkait `.weather-machine`/`.weather-particle`/animasi `fall`. Efek ini yang bikin halaman berat karena terus-menerus memuat file logo `*_Logo.webp` untuk partikel yang berjatuhan. **Catatan:** file `*_Logo.webp` yang sama juga dipakai sebagai avatar di sisi depan card member (`avatar-logo`) — jangan hapus asetnya, cukup hapus logika weather machine yang memanggilnya berulang kali.

---

### Tugas Utama
Restrukturisasi halaman menjadi one-page dengan section-section berikut, sambil **membungkus** (bukan membongkar) pola list→detail yang sudah ada di dalam section Members:

1. **Navbar**
2. **Hero Section**
3. **About Section** (tentang grup Aqours)
4. **Members Section** — berisi grid card yang sudah ada (termasuk flip & detail view)
5. **Album & Songs Section**
6. **Footer**

---

### Detail per Section

#### Navbar (baru)
- Saat ini belum ada menu navigasi, hanya `<header>` berisi logo. Tambahkan navbar sticky/fixed dengan link ke: Home, About, Members, Album & Songs.
- Smooth scroll ke masing-masing section.
- Versi mobile: hamburger menu.
- Efek visual saat di-scroll (background solid/blur setelah melewati hero).
- Logo Aqours yang sudah ada (`assets/img/Aqours_Logo.webp`) bisa dipindah/dipakai ulang di navbar.

#### Hero Section (baru)
- Judul besar + tagline (tagline yang sudah ada — "Character & Seiyuu Showcase" — bisa dipakai ulang atau dikembangkan).
- Visual bertema laut/pantai sesuai identitas Aqours (setting Uranohoshi/Numazu) — gunakan pendekatan yang ringan (CSS gradient/pattern, bukan aset gambar besar atau efek partikel berat seperti weather machine yang sudah dihapus).
- CTA kecil, misalnya "Kenalan dengan Member" yang scroll ke section Members.
- Animasi masuk (fade-in/slide-up) saat halaman dimuat.

#### About Section (baru)
- Penjelasan singkat: Aqours adalah grup idol fiksi 9 orang dari Uranohoshi Girls' High School, bagian dari Love Live! Sunshine!!.
- Poin menarik: tahun debut, tema besar cerita (menyelamatkan sekolah lewat aktivitas idol), tiga sub-unit (CYaRon!, AZALEA, Guilty Kiss) — data sub-unit tiap member sudah ada di `MEMBERS[key].char.fields['Sub-unit']`, bisa dimanfaatkan untuk membuat ringkasan sub-unit otomatis dari data yang ada.
- Layout teks + visual pendukung, atau stat cards.

#### Members Section (bungkus dari yang sudah ada)
- Section ini berisi **grid card yang sudah ada** (`#view-list` / `.card-grid`) apa adanya, termasuk flip front/back.
- Saat card diklik, tetap masuk ke **detail view yang sudah ada** (`#view-detail`), termasuk 3D photo flip dan navigasi prev/next.
- Sesuaikan saja container/wrapper-nya supaya menyatu secara visual dengan section lain (padding, heading section "Members", dst) tanpa mengubah logika flip/detail yang sudah berjalan.

#### Album & Songs Section (baru, sepenuhnya belum ada)
- Tampilkan daftar album/single dalam grid/list: cover art, judul, tahun rilis, sub-unit terkait (kalau relevan).
- **Tanpa fitur play audio** — cukup tampilan visual/katalog.
- Filter/sort sederhana (berdasarkan tahun atau sub-unit) sebagai pengganti interaktivitas audio yang dihapus.
- Judul lagu dan info rilis boleh dicantumkan; **jangan sertakan lirik asli** (materi berhak cipta).

#### Footer (perluas dari yang sudah ada)
- Pertahankan teks project & credit yang sudah ada (`Aqours — Love Live! Sunshine!! · Fan Showcase`, `© 2026 | Alhaji Lede`).
- Tambahkan info kontak: email dan Instagram — gunakan placeholder `[email-kamu@domain.com]` dan `[@instagram-handle]`, akan saya isi sendiri.
- Rapikan layout jadi kolom (branding di kiri, kontak di kanan) dengan social icons kecil, bukan sekadar teks polos seperti sekarang.

---

### Panduan Desain & Interaksi
- Konsisten dengan tema visual yang sudah berjalan: nuansa biru/laut sebagai warna dasar + warna khas tiap member sebagai aksen (sudah diterapkan di grid card, teruskan pola ini ke section lain bila relevan).
- Fully responsive di semua breakpoint.
- Transisi/animasi halus di elemen baru (scroll reveal, hover), selaras dengan animasi yang sudah ada (card flip, 3D photo flip) — jangan berlebihan, dan hindari efek yang berat secara performa (pelajaran dari weather machine yang dihapus).
- Kalau ada ide konten tambahan yang relevan untuk memperkuat storytelling (timeline singkat, fun facts), boleh ditambahkan, tapi jangan mengubah 6 section utama di atas atau membongkar fitur flip yang sudah ada.

### Batasan Teknis
- Tetap HTML/CSS/JS murni (vanilla), konsisten dengan kode yang sudah ada — tidak perlu framework.
- Manfaatkan struktur data `MEMBERS` yang sudah ada di `script.js` untuk section baru (About, Album & Songs) sebisa mungkin, daripada membuat data terpisah yang duplikatif.
- Kode harus rapi dan terorganisir; saat menghapus fitur musik, pastikan tidak ada CSS/JS/HTML sisa yang tidak terpakai.
- Jangan menyertakan lirik lagu asli atau materi berhak cipta lain secara verbatim.

---

## 2. Redesign Visual: Stat Cards, Sub-unit Cards & Member Cards
*(Sumber asli: `design-revisi.md`)*

### Konteks
Section About dan Members sudah fungsional, tapi secara visual masih terasa flat dan generic — lebih mirip dashboard/landing page SaaS ketimbang fan showcase idol yang playful. Saya mau redesign di lapisan visual (CSS), **tanpa mengubah struktur/logika flip & detail view yang sudah berjalan**.

### Analisis Masalah Desain Saat Ini
- **Stat cards** (9 Members / 3 Sub-units / 2015 Debut Year): kotak putih polos dengan border tipis, tanpa ikon, tanpa shadow/depth — semua kotak terlihat identik dan datar.
- **Sub-unit cards** (CYaRon!, Guilty Kiss, AZALEA): sudah ada aksen warna di top border, tapi badan card masih flat putih. Tidak ada ilustrasi/icon yang merepresentasikan karakter musik tiap sub-unit.
- **Member cards di grid**: warna block flat + icon outline generik (buah, kue, dolphin), sudut kotak tajam tanpa rounded corner, tanpa shadow, dan grid 3 kolom terasa kaku/seragam tanpa variasi ritme visual.
- **Tipografi**: font display 'Fredoka One' yang sudah dipakai di tagline header belum dimanfaatkan di heading section lain, jadi identitas visual terasa kurang konsisten.
- Secara umum, halaman belum memanfaatkan tema ocean/idol pop yang jadi ciri khas Aqours — semuanya terasa terlalu "netral".

### Arah Redesign

#### 1. Stat Cards (About)
- Tambahkan icon kecil yang relevan di tiap card (misalnya wave icon untuk lokasi/laut, mic/star icon untuk member, calendar icon untuk debut year).
- Ganti background putih polos jadi soft gradient atau tinted background (bukan flat putih), rounded corner lebih besar.
- Tambahkan shadow lembut untuk kesan depth, dan hover-lift animation (card naik sedikit + shadow membesar saat di-hover).

#### 2. Sub-unit Cards (About)
- Perkuat identitas visual tiap sub-unit dengan gradient background sesuai warna masing-masing (bukan cuma border tipis di atas).
- Tambahkan icon/badge kecil yang merepresentasikan genre musik (energetic & pop / gothic rock & electronic / pure & electro-pop).
- Rounded corner lebih besar, shadow, dan sedikit efek scale/tilt saat hover supaya terasa interaktif.

#### 3. Member Cards (Members Grid) — Prioritas Utama
- Ganti flat color block dengan gradient duotone sesuai warna signature tiap member, atau tambahkan overlay pattern ringan (wave/sparkle) di background block — bukan warna solid polos.
- Icon representatif per member boleh dipertahankan konsepnya, tapi buat lebih illustrative/detail (bukan outline sederhana single-color).
- Rounded corner besar di seluruh card, shadow yang lebih hidup (soft drop shadow, bukan flat), sedikit rotasi/scale saat hover untuk kesan playful.
- Variasikan sedikit ukuran/posisi card dalam grid (misalnya staggered layout, atau card tengah sedikit lebih besar) supaya grid tidak terlalu seragam dan kaku.
- Manfaatkan mekanisme card flip yang sudah ada — tambahkan micro-interaction kecil di sisi depan sebelum flip (misalnya sparkle/star icon muncul halus saat hover) supaya card terasa lebih "hidup", tanpa mengganggu logika flip yang sudah berjalan.

#### 4. Tipografi
- Manfaatkan font display 'Fredoka One' secara lebih luas untuk heading di section About dan Members, supaya konsisten dengan tagline header dan terasa lebih playful/idol-themed.

#### 5. Aksen Tema Ocean/Idol
- Tambahkan elemen dekoratif ringan (wave-shape divider antar section, sparkle/star kecil di sekitar heading) untuk memperkuat identitas laut + idol pop Aqours.
- **Catatan penting:** elemen ini harus CSS-only/statis (misalnya SVG shape atau CSS gradient), bukan particle system atau efek animasi berat — kita sudah menghapus weather machine karena berat, jangan sampai muncul lagi masalah serupa dalam bentuk lain.

### Batasan
- Tetap ringan secara performa — hindari efek/animasi yang berat.
- Tetap HTML/CSS/JS vanilla, konsisten dengan kode yang sudah ada.
- **Jangan mengubah struktur atau logika flip & detail view** yang sudah berjalan — perubahan fokus di CSS/visual dan penambahan elemen dekoratif ringan saja.
- Pastikan kontras warna teks tetap terjaga meskipun background card diganti jadi gradient (keterbacaan nama, subunit badge, dsb tidak boleh menurun).

---

## 3. Revisi Detail Character Card & Efek Hover Grid
*(Sumber asli: `design-revisi-card.md`)*

### Konteks
Dua bagian ini masih perlu dipoles supaya konsisten dengan arah redesign catchy yang sudah diterapkan di stat cards & sub-unit cards (About section):
1. **Detail Character Card** (`#view-detail` / `profile-layout`) — halaman profil per member (foto + data karakter).
2. **Hover effect di Members grid** — saat ini kemungkinan cuma menambah shadow, mau diganti jadi efek zoom yang lebih hidup.

---

### 1. Revisi Detail Character Card

#### Masalah Saat Ini
- Background di sekitar foto cuma warna cream polos, tanpa aksen visual (padahal versi lain di web sudah mulai pakai gradient/icon).
- Badge "CHARACTER" berwarna abu-abu netral — tidak memanfaatkan warna signature tiap member.
- Data fields (Year, Sub-unit, Birthday, Blood Type, Height, Hobbies) ditampilkan sebagai list dua kolom teks polos tanpa icon atau pengelompokan visual — kurang menarik dibanding card-card lain yang sudah pakai icon.
- Tombol Previous/Next di bawah masih pill putih polos, tidak terhubung secara visual dengan warna member yang sedang ditampilkan.
- Border/accent warna cuma ada di garis tipis sudut card (top-left orange), belum benar-benar menyatu dengan keseluruhan card.

#### Arah Revisi
- **Badge "CHARACTER"/"SEIYUU"**: beri warna sesuai warna signature member yang sedang tampil (background tinted atau solid dengan warna member), bukan abu-abu netral.
- **Data fields**: tambahkan icon kecil per field (misalnya kalender untuk Birthday, tetesan darah untuk Blood Type, penggaris untuk Height, hati/bintang untuk Hobbies) dan kelompokkan dalam mini-card/chip berlatar tinted color, bukan cuma teks list rata kiri-kanan.
- **Background sekitar foto**: tambahkan elemen dekoratif ringan bertema warna member (soft gradient blob, pattern lingkaran/wave tipis di belakang foto) — tetap CSS-only/ringan, tanpa animasi berat.
- **Tombol Previous/Next**: beri aksen warna sesuai member yang dituju (misalnya warna teks/border berubah mengikuti warna signature member berikutnya/sebelumnya), dengan hover state yang jelas.
- **Card container**: perkuat penggunaan warna signature member di seluruh card (border penuh atau gradient tipis di tepi card), bukan cuma di satu sudut.
- Pertahankan seluruh logika yang sudah ada (3D photo flip character⇄seiyuu, navigasi prev/next dengan animasi flip) — perubahan murni di lapisan visual/CSS.

---

### 2. Efek Hover Grid — Zoom, Bukan Cuma Shadow

#### Masalah Saat Ini
Hover pada card di Members grid kemungkinan cuma menambahkan shadow, terasa kurang hidup dan tidak cukup catchy.

#### Arah Revisi
Ganti/lengkapi jadi efek **"spotlight zoom"**:
- Saat cursor hover ke salah satu card, card yang di-hover **membesar sedikit (scale up)** dan naik ke depan (z-index lebih tinggi), sementara card-card lain di grid **sedikit mengecil dan/atau meredup opacity-nya** — menciptakan efek fokus seperti card yang di-hover jadi pusat perhatian.
- Transisi harus smooth (CSS transition, misalnya `transform` + `opacity` dengan durasi sekitar 200–300ms, easing halus).
- Shadow tetap boleh dipertahankan sebagai pelengkap efek scale, tapi bukan satu-satunya efek hover.
- Pastikan efek ini tidak mengganggu mekanisme click-to-flip-detail yang sudah ada — user tetap bisa klik card dengan lancar meski sedang dalam kondisi scaled.
- Terapkan efek ini secara konsisten di grid Members (dan bisa dipertimbangkan juga untuk sub-unit cards di About bila relevan secara visual).

---

### Batasan
- Tetap HTML/CSS/JS vanilla, konsisten dengan kode yang sudah ada.
- Tetap ringan secara performa — gunakan CSS transform/transition, hindari JavaScript animation loop yang berat.
- Jangan mengubah struktur data (`MEMBERS` object) atau logika navigasi/flip yang sudah berjalan — fokus revisi di CSS dan penambahan elemen visual ringan (icon, badge warna, gradient aksen).
- Pastikan kontras teks tetap terjaga di semua kombinasi warna baru.

---

## 4. Revisi Layout Detail Character: Background Full & Navigasi Tanpa Scroll
*(Sumber asli: `designrev.md`)*

### Konteks
Detail character card (`#view-detail`) sudah bagus dari sisi konten (badge warna, field dengan icon, dsb — lihat screenshot Riko & Kanan). Yang masih perlu dibenahi: layout background dan posisi tombol navigasi, supaya seluruh halaman detail muat dalam satu viewport tanpa perlu scroll.

### Masalah Saat Ini
- Background berwarna (tinted sesuai warna member) cuma muncul sebagai panel/blok di area tengah, dikelilingi ruang kosong putih di kiri-kanan — belum "full", masih terasa seperti card yang mengambang di tengah halaman.
- Tombol Previous/Next (`#btn-prev`, `#btn-next`) diletakkan di bawah card, sehingga di beberapa ukuran layar halaman jadi lebih panjang dari viewport dan perlu di-scroll untuk mencapainya.

### Arah Revisi

#### 1. Background Full sesuai Warna Member
- Ganti background section detail (`#view-detail`) supaya **mengisi penuh lebar dan tinggi viewport** (full-bleed), bukan cuma panel di tengah dengan ruang kosong di sisi kiri-kanan.
- Warna/gradient background tetap mengikuti warna signature member yang sedang ditampilkan (seperti yang sudah diterapkan sekarang — pink untuk Riko, hijau untuk Kanan, dst), tapi diterapkan ke seluruh area halaman detail, bukan hanya ke panel card.
- Card konten (foto + info) tetap bisa punya elemen visual sendiri (misalnya sedikit lebih terang/putih) di atas background full-color ini, supaya teks tetap kontras dan mudah dibaca.

#### 2. Tombol Previous/Next Dipindah ke Kiri-Kanan Card
- Pindahkan tombol Previous dan Next dari bawah card ke **sisi kiri dan kanan card** (sejajar secara vertikal dengan card, bukan di bawahnya) — semacam tombol navigasi arrow yang menempel di tepi kiri dan kanan layar/card.
- Indicator posisi (`1 / 9`, dst.) bisa tetap diletakkan di posisi yang tidak memakan tinggi ekstra — misalnya kecil di dekat salah satu sudut card atau di dalam card itu sendiri, bukan sebagai baris terpisah di bawah.
- Di layar mobile/sempit, tombol prev/next boleh tetap di sisi kiri-kanan dalam ukuran lebih kecil, atau — kalau ruang benar-benar tidak cukup — swipe gesture bisa jadi alternatif, tapi prioritaskan tetap muat tanpa scroll di desktop/tablet.

#### 3. Tanpa Scroll
- Pastikan keseluruhan halaman detail (navbar + card + navigasi) muat dalam satu layar penuh (`100vh`) tanpa perlu scroll vertikal, di breakpoint desktop/tablet standar.
- Sesuaikan ukuran foto, spacing antar elemen, dan card kalau perlu supaya semuanya proporsional dan tetap muat, tanpa membuat elemen jadi terlalu kecil/susah dibaca.
- Kalau di layar yang sangat pendek/kecil scroll benar-benar tidak terhindarkan, itu masih bisa ditoleransi — tapi target utamanya adalah viewport standar desktop/tablet bebas scroll.

### Batasan
- Pertahankan seluruh logika yang sudah berjalan (3D photo flip character⇄seiyuu, navigasi index `1/9`, transisi flip antar member) — perubahan fokus di layout/posisi elemen dan CSS background, bukan logika JS.
- Tetap HTML/CSS/JS vanilla, konsisten dengan kode yang sudah ada.
- Pastikan kontras teks tetap terjaga di atas background full-color yang baru.

---

## 5. Perbaikan Fitur Fade-in Scroll
*(Sumber asli: `designrev1.md`)*

### Masalah
Setelah refresh, efek fade-in pada elemen (section, card) saat halaman di-scroll **tidak muncul sama sekali** — semua elemen langsung tampil penuh (opacity 100%) begitu masuk viewport, tanpa transisi apa pun.

### Yang Perlu Dilakukan

#### 1. Audit Dulu
- Cek ulang seluruh `script.js` dan file CSS untuk memastikan benar-benar tidak ada sisa kode fade-in yang cuma "setengah jalan" (misalnya CSS class `.fade-in { opacity: 0 }` ada tapi JS yang men-trigger `.visible`-nya hilang, atau sebaliknya).
- Kalau ditemukan sisa kode yang tidak lengkap/konsisten, bersihkan dulu sebelum menulis ulang.

#### 2. Implementasikan (atau Implementasikan Ulang) dengan Benar
- Gunakan `IntersectionObserver` untuk mendeteksi kapan sebuah elemen section/card masuk ke viewport saat di-scroll.
- Elemen yang ingin diberi efek fade-in diberi kondisi awal via CSS (`opacity: 0` + sedikit `translateY`, misalnya turun 20–30px), lalu saat `IntersectionObserver` mendeteksi elemen masuk viewport, tambahkan class (misalnya `.in-view`) yang mengubah `opacity` jadi 1 dan `transform` kembali ke posisi normal, dengan CSS `transition` yang halus (durasi ±500–700ms, easing halus seperti `ease-out`).
- Terapkan secara konsisten ke: heading tiap section (Hero, About, Members, Album & Songs), stat cards, sub-unit cards, dan member cards di grid — supaya semuanya punya efek reveal yang seragam saat pertama kali muncul di layar.
- Elemen sebaiknya cukup di-reveal **sekali saja** (tidak fade-out lagi saat di-scroll balik ke atas), jadi setelah class `.in-view` ditambahkan, hentikan observasi elemen tersebut (`observer.unobserve(el)`).
- Beri sedikit stagger/delay antar elemen dalam grid yang sama (misalnya card ke-2 muncul sedikit lebih lambat dari card ke-1) supaya efeknya terasa lebih hidup, tidak semua muncul barengan persis.

#### 3. Verifikasi
- Setelah selesai, tolong pastikan efek ini benar-benar teruji dengan scroll dari atas ke bawah halaman penuh — semua section (bukan cuma satu-dua) harus menunjukkan fade-in saat pertama kali terlihat.
- Pastikan efek ini tidak mengganggu interaksi lain yang sudah ada (card flip, hover zoom effect, detail view, dst).

### Batasan
- Tetap vanilla JS (`IntersectionObserver` adalah API bawaan browser, tidak perlu library tambahan).
- Pastikan performa tetap ringan — jangan pasang observer yang berjalan terus-menerus tanpa `unobserve`, supaya tidak membebani scroll performance.

---

## 6. Sinkronisasi Fade-in Scroll Members vs 3D Card Flip
*(Sumber asli: `desss.md`)*

### Masalah
Fitur fade-in-on-scroll sekarang sudah berfungsi di section **Discography** — card muncul satu per satu dengan efek fade saat di-scroll. Tapi di section **Members**, card tiap member (`.card-wrapper`) **tidak muncul efek fade-in-nya sama sekali** — langsung tampil penuh begitu masuk viewport.

### Temuan dari Cek Kode
- Class `fade-in` **sudah ada** di setiap elemen `.card-wrapper` di `index.html` (statis, ditulis langsung di markup — bukan digenerate lewat JS).
- `initScrollReveal()` di `script.js` melakukan `document.querySelectorAll('.fade-in:not(.in-view)')` dan meng-observe semuanya — secara logika ini seharusnya ikut menangkap `.card-wrapper.fade-in` juga, sama seperti `.subunit-card.fade-in` dan `.disco-card.fade-in` yang sudah terbukti jalan.
- Karena `.card-wrapper` juga punya elemen `.card` di dalamnya dengan mekanisme **3D card flip** (front/back, kemungkinan pakai `perspective`, `transform-style: preserve-3d`, atau `transform: rotateY(...)` di CSS), dugaan kuat masalahnya ada di **konflik CSS**, bukan di JS observer-nya. Kemungkinan penyebab:
  1. Ada rule CSS untuk `.card-wrapper` (terkait setup 3D flip) yang secara tidak sengaja menimpa `opacity`/`transform` awal dari `.fade-in`, sehingga elemen selalu tampil `opacity: 1` walau class `.in-view` belum ditambahkan.
  2. Urutan/specificity CSS antara rule `.fade-in` (opacity: 0 by default) dan rule khusus `.card-wrapper` bentrok — kalau rule `.card-wrapper` ditulis setelah `.fade-in` di file CSS dengan specificity setara/lebih tinggi, dia yang menang di cascade.
  3. Parent container `.card-grid` punya property yang membuat efek transform/opacity pada child tidak ter-render sebagaimana mestinya (misalnya `overflow: hidden` yang memotong `translateY`, atau context 3D transform yang tidak sinkron dengan transisi fade).

### Yang Perlu Dilakukan
1. **Cek `style.css`** khusus pada selector yang menyentuh `.card-wrapper` dan `.card-grid` — cari apakah ada rule yang men-set `opacity: 1` atau me-reset `transform` pada `.card-wrapper` secara eksplisit maupun implisit, yang bentrok dengan state awal `.fade-in { opacity: 0; transform: translateY(...); }`.
2. **Pastikan card flip (`.card` di dalam `.card-wrapper`) dan fade-in reveal (`.card-wrapper` itu sendiri) berjalan di elemen/layer yang berbeda** — jangan sampai animasi flip dan animasi reveal saling menimpa property CSS yang sama (`transform`/`opacity`) di elemen yang sama. Kalau perlu, pisahkan: `.card-wrapper` yang menangani fade-in reveal (opacity + translateY), sementara `.card` di dalamnya yang menangani rotasi flip (`transform: rotateY`) — supaya keduanya tidak rebutan property `transform` yang sama.
3. **Setelah diperbaiki, tes ulang**: scroll ke section Members dari atas, pastikan tiap card member (Chika, Riko, Kanan, dst.) muncul dengan fade-in satu per satu seperti halnya di Discography — termasuk stagger/delay antar card supaya konsisten dengan section lain.
4. Pastikan perbaikan ini **tidak mengganggu fungsi card flip** (front/back character⇄seiyuu) yang sudah berjalan di grid Members.

### Batasan
- Perbaikan fokus di CSS (dan penyesuaian kecil di JS kalau memang dibutuhkan untuk memisahkan elemen), bukan menulis ulang seluruh sistem scroll reveal yang sudah jalan di Discography — sistem itu jadi acuan/referensi karena sudah terbukti benar.
- Tetap vanilla HTML/CSS/JS, konsisten dengan kode yang sudah ada.

---

## 7. Ubah Discography Menjadi Top 10 Most Popular Songs
*(Sumber asli: `songrev.md`)*

### Konteks
Section Discography saat ini menampilkan seluruh katalog rilis (`DISCOGRAPHY` array di `script.js`, ±25+ entri single/album/sub-unit release) dengan filter All/Singles/Albums/Sub-unit. Saya mau ganti isinya jadi **Top 10 lagu Aqours paling populer**, berdasarkan data ranking dari JOYSOUND (situs karaoke Jepang, berdasarkan seberapa sering lagu dinyanyikan).

### Data Ranking (Sumber: joysound.com, ranking artis Aqours)

| Rank | Judul Lagu | Tahun Rilis Asli | Single Asal |
|------|-----------|------|-------------|
| 1 | Aozora Jumping Heart | 2016 | Aozora Jumping Heart |
| 2 | WATER BLUE NEW WORLD | 2018 | WATER BLUE NEW WORLD / WONDERFUL STORIES |
| 3 | HAPPY PARTY TRAIN | 2017 | HAPPY PARTY TRAIN |
| 4 | Koi ni Naritai AQUARIUM | 2016 | Koi ni Naritai AQUARIUM |
| 5 | Kimi no Kokoro wa Kagayaiteru kai? | 2015 | Kimi no Kokoro wa Kagayaiteru kai? |
| 6 | Omoi yo Hitotsu ni Nare | 2016 | Omoi yo Hitotsu ni Nare / MIRAI TICKET |
| 7 | Yuuki wa doko ni? Kimi no Mune ni! | 2017 | Yuuki wa doko ni? Kimi no Mune ni! |
| 8 | Yume Kataru yori Yume Utaou | 2016 | Yume Kataru yori Yume Utaou |
| 9 | Mirai no Bokura wa Shitteru yo | 2017 | Mirai no Bokura wa Shitteru yo |
| 10 | MIRAI TICKET | 2016 | Omoi yo Hitotsu ni Nare / MIRAI TICKET |

**Catatan penting:** kesepuluh judul lagu ini sebenarnya sudah ada di data `DISCOGRAPHY` yang sekarang, tapi sebagian digabung sebagai satu entri single yang berisi 2 lagu sekaligus (misalnya "Omoi yo Hitotsu ni Nare / MIRAI TICKET" adalah satu single, tapi kedua lagunya (#6 dan #10) sama-sama masuk top 10 secara terpisah). Jadi untuk keperluan ranking ini, **entri harus per lagu (song-level), bukan per single/release package** seperti sebelumnya.

*(Catatan Revisi Tambahan dari User: Cukup judul lagu saja, tidak perlu menampilkan single asal).*

### Yang Perlu Dilakukan

#### 1. Restrukturisasi Data
- Buat struktur data baru (`TOP_SONGS`) berisi 10 objek lagu, masing-masing dengan: `rank` (1–10), `title` (nama lagu), dan tahun rilis.
- Manfaatkan gradient warna ranking (rank 1–3 emas/perak/perunggu, rank 4–10 palet warna seragam/harmonis).
- Ganti isi section Discography untuk merender `TOP_SONGS` ini.

#### 2. Tampilan Card
- Tampilkan **nomor rank** secara jelas di tiap card (angka besar `#1`, `#2`, dst, atau badge khusus).
- Beri penekanan visual khusus untuk 3 besar (rank 1–3) — misalnya card sedikit lebih besar, aksen warna gold/silver/bronze, atau badge "Top 3".
- Tetap tampilkan info pendukung: tahun rilis.
- Urutan tampilan **mengikuti rank (1 → 10)**, bukan diurutkan berdasarkan tahun seperti Discography sebelumnya.

#### 3. Filter (All/Singles/Albums/Sub-unit) — Dihapus
- Hapus seluruh filter kategori (`disco-filters` beserta tombol All/Singles/Albums/Sub-unit) dari HTML dan JS terkait — sudah tidak relevan karena section ini sekarang murni daftar top 10 lagu, bukan campuran single/album/sub-unit release.
- Ganti framing section header jadi "Most Popular Songs" / "JOYSOUND Karaoke Ranking", dengan keterangan sumber data joysound.com.
- **Data `DISCOGRAPHY` lama dihapus dari kode.**

#### 4. Pertahankan yang Sudah Berjalan
- Fade-in scroll reveal (`.fade-in` + `IntersectionObserver`) harus tetap jalan di card-card baru ini.
- Struktur card style dan hover effect dipertahankan.

### Batasan
- Tetap HTML/CSS/JS vanilla, konsisten dengan kode yang ada.
- Jangan menyertakan lirik lagu — cukup judul, rank, dan tahun rilis.
- Data 10 lagu di atas final dan sudah diverifikasi dari sumber ranking.

---

## 8. Redesign Layout Most Popular Songs: Podium + Leaderboard
*(Sumber asli: `songdesign.md`)*

### Konteks
Section "Most Popular Songs" sekarang menampilkan 10 card dalam grid 3 kolom rata semua. Saya mau ubah jadi layout yang lebih dinamis, terbagi dua bagian: **podium untuk top 3**, dan **leaderboard list untuk rank 4–10**.

### Layout yang Diinginkan

#### Bagian 1: Podium (Rank 1–3)
- **#1 di tengah**, posisinya **lebih tinggi/elevated** dibanding #2 dan #3 (seperti podium juara — naik ke atas, efek podium klasik: 2 - 1 - 3 dari kiri ke kanan, dengan #1 paling menonjol).
- **#2 di kiri**, **#3 di kanan**, keduanya di posisi lebih rendah dari #1.
- Card #1 dibuat sedikit lebih besar dari #2 dan #3 untuk penekanan visual sebagai juara utama.
- Pertahankan elemen yang ada di tiap card (tahun, badge TOP 1/2/3, angka rank besar, judul lagu, gradient warna emas/perak/perunggu).

#### Bagian 2: Leaderboard List (Rank 4–10)
- Ganti dari grid card menjadi **list memanjang ke samping (full-width row)**, disusun berurutan ke bawah seperti leaderboard/tabel ranking — bukan grid kotak-kotak lagi.
- Tiap row berisi: nomor rank (kiri), judul lagu, tahun rilis — ditata horizontal dalam satu baris penuh lebar container.
- Rank 4 di baris paling atas, rank 10 di baris paling bawah, berurutan.
- Desain row ringkas dengan aksen warna yang selaras (sama untuk rank 4–10), rounded corner, padding nyaman.
- Tambahkan hover state ringan pada tiap row (background sedikit lebih terang / border glow / sedikit bergeser ke kanan).

### Struktur Section Secara Keseluruhan
1. Header (badge "✦ JOYSOUND Karaoke Ranking ✦", judul "Most Popular Songs", subtitle sumber joysound.com dengan link eksternal).
2. Podium (#1 tengah-atas, #2 kiri, #3 kanan) di bawah header.
3. Leaderboard list (#4–#10) di bawah podium, urut ke bawah.

### Batasan
- Pertahankan fade-in scroll reveal yang sudah berjalan (`.fade-in` + `IntersectionObserver`) dengan stagger delay berurutan.
- Tetap HTML/CSS/JS vanilla, konsisten dengan kode yang sudah ada.
- Pastikan responsif di mobile (podium beradaptasi ke urutan stack #1 -> #2 -> #3 atau layout mobile yang rapi, row leaderboard fleksibel).

---

## 9. Moving Collage Background di Home Section
*(Sumber asli: `designhome.md`)*

### Konteks
Saya mau menambahkan background berupa kolase foto yang bergerak (moving collage) di section Home/Hero, memakai kumpulan foto Aqours (ilustrasi resmi + foto event/konser). File-fotonya ditaruh di folder `assets/collage/` (a.webp sampai o.webp).

### Yang Diinginkan

#### Struktur Visual
- Buat beberapa baris (3 baris horizontal) berisi foto-foto yang disusun berjajar memanjang ke samping.
- Tiap baris berisi campuran foto dari folder collage (a.webp s/d o.webp).
- Baris-baris ini **scroll otomatis secara terus-menerus (infinite loop)**, dengan arah gerak berselang-seling: baris pertama bergerak ke kiri, baris kedua ke kanan, baris ketiga ke kiri lagi — supaya terasa dinamis.
- Kecepatan scroll pelan dan halus sebagai ambient background.
- Foto ditampilkan dalam ukuran kecil-menengah dan looping mulus tanpa patah/jeda menggunakan teknik duplikasi track.

#### Supaya Teks Hero Tetap Terbaca
- Pasang **overlay gelap/gradient semi-transparan** di atas seluruh kolase foto dengan warna ocean Aqours ber-opacity seimbang, sehingga judul dan teks CTA di hero tetap kontras dan sangat jelas terbaca.
- Kolase murni sebagai ambient/dekoratif background.

#### Performa
- Kompresi format WebP ringan.
- Animasi scroll menggunakan CSS `transform: translateX()` dengan `@keyframes` hardware-accelerated (bukan JS loop/interval).

### Batasan
- Tetap HTML/CSS/JS vanilla, konsisten dengan kode yang sudah ada.
- Tidak mengganggu interaksi atau keterbacaan elemen hero (judul, CTA button, dsb).

---

## 10. Fitur Daily Like — Total Like Bersama Semua Pengunjung
*(Sumber asli: `count.md`)*

### Konsep
Tombol "Press this if you love Aqours ❤️" di section Home. Setiap pengunjung bisa klik **sekali per hari**, dan hitungan total like-nya **sama untuk semua orang** (bukan cuma tersimpan di browser masing-masing) — tanpa perlu bikin backend/database/login sendiri, memanfaatkan counter API publik gratis.

### Cara Kerja
1. **Total Like (Global via Abacus API)**:
   - Endpoint: `https://abacus.jasoncameron.dev/get/aqours-showcase/daily-like` (ambil total) & `/hit/aqours-showcase/daily-like` (increment +1).
   - Format separator ribuan (`1,258`) dengan animasi *count-up* halus.
2. **Batasan 1x per Hari (localStorage)**:
   - Menyimpan tanggal hari ini (`YYYY-MM-DD`) di `localStorage['aqours-last-liked']`.
   - Mengunci tombol ke state disabled dan teks *"Already loved today! Come back tomorrow ✨"*.
3. **Animasi & Interaksi**:
   - Denyut ikon hati (*heartbeat animation*).
   - Efek ledakan partikel hati (*floating heart burst*) saat diklik.
   - *Bump animation* pada badge angka counter saat bertambah.
4. **Graceful Fallback**:
   - Jika jaringan/API offline, sistem secara otomatis memakai angka cache lokal terakhir di `localStorage['aqours-cached-likes']` sehingga UI tidak rusak dan animasi klik lokal tetap berjalan lancar.
