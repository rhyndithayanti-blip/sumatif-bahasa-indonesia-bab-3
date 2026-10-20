import { Question } from '../types';
import {
  SVG_RAMBU_LAMPU_LALU_LINTAS,
  SVG_RAMBU_DILARANG_PUTAR_BALIK,
  SVG_RAMBU_RUMAH_SAKIT,
  SVG_RAMBU_WAJIB_BELOK_KIRI,
  SVG_DENAH_PERJALANAN,
  SVG_KOMPAS_8_ARAH,
  SVG_BURUNG_JALAK_BALI,
  SVG_RAMBU_ANAK_MENYEBERANG,
} from './questionSvgAssets';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN 1: PILIHAN GANDA (25 SOAL)
  // =========================================================================

  // --- LINGKUP MATERI 1: RAMBU-RAMBU LALU LINTAS (SOAL 1 - 5) ---
  {
    id: 1,
    type: 'pg',
    topic: 'Rambu-Rambu Lalu Lintas',
    difficulty: 'Mudah',
    image: SVG_RAMBU_LAMPU_LALU_LINTAS,
    imageCaption: 'Gambar 1: Rambu lalu lintas berlatar warna kuning dengan tiga warna isyarat lampu',
    text: 'Perhatikan gambar rambu lalu lintas di atas!\n\nRambu berbentuk belah ketupat dengan warna dasar kuning dan lambang lampu lalu lintas tersebut memiliki arti...',
    options: [
      { id: 'A', text: 'Peringatan bahwa ada lampu pengatur lalu lintas (APILL) di depan' },
      { id: 'B', text: 'Larangan menyalakan lampu kendaraan di malam hari' },
      { id: 'C', text: 'Perintah untuk segera mematikan mesin kendaraan' },
      { id: 'D', text: 'Petunjuk tempat perbaikan lampu dan suku cadang mobil' },
    ],
    correctAnswer: 'A',
    explanation:
      'Rambu dengan warna dasar kuning dan lambang hitam merupakan jenis rambu peringatan. Gambar tiga warna lampu tersebut memperingatkan pengemudi bahwa di depan terdapat Alat Pemberi Isyarat Lalu Lintas (APILL) atau lampu lalu lintas, sehingga pengemudi harus waspada dan mengurangi kecepatan.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Rambu-Rambu Lalu Lintas',
    difficulty: 'Mudah',
    image: SVG_RAMBU_DILARANG_PUTAR_BALIK,
    imageCaption: 'Gambar 2: Rambu lalu lintas lingkaran bertepi merah dan garis coret diagonal',
    text: 'Perhatikan gambar rambu lalu lintas di atas!\n\nRambu tersebut dipasang di jalan raya bertujuan untuk memberitahukan kepada seluruh pengguna jalan agar...',
    options: [
      { id: 'A', text: 'Dilarang berputar balik arah' },
      { id: 'B', text: 'Wajib berputar balik arah ke kanan' },
      { id: 'C', text: 'Dilarang melaju dengan kecepatan tinggi' },
      { id: 'D', text: 'Wajib masuk ke jalur putar cepat' },
    ],
    correctAnswer: 'A',
    explanation:
      'Rambu berbentuk lingkaran dengan warna dasar putih, garis tepi merah tebal, dan garis coret merah diagonal melintang adalah rambu larangan. Lambang panah melengkung yang dicoret berarti dilarang berputar balik arah (No U-Turn).',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Rambu-Rambu Lalu Lintas',
    difficulty: 'Mudah',
    image: SVG_RAMBU_RUMAH_SAKIT,
    imageCaption: 'Gambar 3: Rambu persegi berwarna biru dengan lambang tempat tidur & palang merah',
    text: 'Perhatikan gambar rambu di atas!\n\nRambu berbentuk persegi panjang dengan warna dasar biru tersebut merupakan jenis rambu petunjuk fasilitas umum. Makna dari rambu tersebut adalah...',
    options: [
      { id: 'A', text: 'Petunjuk lokasi rumah sakit atau fasilitas kesehatan' },
      { id: 'B', text: 'Tempat istirahat dan penginapan hotel' },
      { id: 'C', text: 'Perintah bagi pejalan kaki untuk tidur sejenak' },
      { id: 'D', text: 'Larangan membawa orang sakit ke jalan raya' },
    ],
    correctAnswer: 'A',
    explanation:
      'Rambu persegi berwarna dasar biru dengan gambar tempat tidur dan lambang palang merah di atasnya adalah rambu petunjuk arah/lokasi fasilitas kesehatan, seperti rumah sakit, puskesmas, atau klinik medis.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Rambu-Rambu Lalu Lintas',
    difficulty: 'Sedang',
    image: SVG_RAMBU_WAJIB_BELOK_KIRI,
    imageCaption: 'Gambar 4: Rambu lingkaran biru dengan panah putih menghadap ke kiri',
    text: 'Perhatikan gambar rambu di atas!\n\nRambu berbentuk lingkaran dengan warna dasar biru dan lambang panah putih melengkung ke arah kiri merupakan rambu perintah yang berarti...',
    options: [
      { id: 'A', text: 'Pengendara wajib mengikuti arah ke kiri' },
      { id: 'B', text: 'Pengendara dilarang belok ke kiri' },
      { id: 'C', text: 'Peringatan jalan licin di sebelah kiri' },
      { id: 'D', text: 'Petunjuk tempat parkir khusus sepeda di kiri' },
    ],
    correctAnswer: 'A',
    explanation:
      'Rambu dengan warna dasar biru dan lambang berwarna putih berbentuk lingkaran merupakan rambu perintah. Panah putih yang mengarah ke kiri memerintahkan pengendara untuk wajib mengikuti arah ke kiri jalan.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Rambu-Rambu Lalu Lintas',
    difficulty: 'Sedang',
    text: 'Setiap rambu lalu lintas memiliki fungsi dan warna dasar yang berbeda-beda agar mudah dikenali oleh pengguna jalan. Pasangan jenis rambu dan warna dasar yang paling tepat adalah...',
    options: [
      { id: 'A', text: 'Rambu peringatan berwarna dasar kuning, rambu larangan berwarna dasar putih dengan lingkaran merah' },
      { id: 'B', text: 'Rambu perintah berwarna dasar kuning, rambu petunjuk berwarna dasar merah' },
      { id: 'C', text: 'Rambu peringatan berwarna dasar biru, rambu larangan berwarna dasar hijau' },
      { id: 'D', text: 'Rambu petunjuk berwarna dasar hitam, rambu larangan berwarna dasar cokelat' },
    ],
    correctAnswer: 'A',
    explanation:
      'Berdasarkan peraturan rambu lalu lintas: (1) Rambu peringatan berlatar kuning dengan lambang hitam, (2) Rambu larangan berlatar putih dengan lingkaran/garis merah, (3) Rambu perintah berlatar biru dengan lambang putih, dan (4) Rambu petunjuk berlatar hijau atau biru.',
  },

  // --- LINGKUP MATERI 2: TEKS ARGUMENTASI (SOAL 6 - 10) ---
  {
    id: 6,
    type: 'pg',
    topic: 'Teks Argumentasi',
    difficulty: 'Mudah',
    text: 'Teks argumentasi adalah jenis teks yang bertujuan untuk meyakinkan pembaca agar sepaham dengan gagasan penulis. Ciri utama teks argumentasi yang benar adalah...',
    options: [
      { id: 'A', text: 'Menyampaikan pendapat yang disertai alasan logis, data, dan fakta' },
      { id: 'B', text: 'Menceritakan kisah tokoh khayalan dengan alur cerita yang lucu' },
      { id: 'C', text: 'Menjelaskan langkah-langkah membuat makanan secara berurutan' },
      { id: 'D', text: 'Menggambarkan keindahan pemandangan pantai secara puitis' },
    ],
    correctAnswer: 'A',
    explanation:
      'Ciri utama teks argumentasi adalah mengemukakan pendapat atau opini penulis yang diperkuat dengan alasan-alasan logis, bukti data, atau fakta nyata sehingga pembaca percaya dan terpengaruh oleh pendapat tersebut.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Teks Argumentasi',
    difficulty: 'Sedang',
    text: 'Bacalah kutipan teks berikut!\n\n"Membiasakan membaca buku di pojok baca kelas setiap pagi sangat bermanfaat bagi siswa kelas IV. Selain memperluas wawasan dan perbendaharaan kata, membaca secara rutin juga melatih daya konsentrasi siswa dalam menyerap materi pelajaran. Oleh karena itu, seluruh siswa sebaiknya memanfaatkan waktu pagi sebelum jam pelajaran untuk membaca buku."\n\nBagian yang menyatakan pendapat atau gagasan pokok penulis dalam kutipan di atas adalah...',
    options: [
      { id: 'A', text: 'Membiasakan membaca buku di pojok baca kelas sangat bermanfaat bagi siswa' },
      { id: 'B', text: 'Pojok baca kelas hanya boleh digunakan saat jam istirahat' },
      { id: 'C', text: 'Siswa kelas IV tidak perlu membawa buku tulis ke sekolah' },
      { id: 'D', text: 'Semua buku pelajaran harus diletakkan di lemari guru' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pendapat utama (klaim penulis) terdapat pada kalimat pertama: "Membiasakan membaca buku di pojok baca kelas setiap pagi sangat bermanfaat bagi siswa kelas IV." Kalimat berikutnya berfungsi sebagai alasan pendukung dan kalimat terakhir merupakan rekomendasi/kesimpulan.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Teks Argumentasi',
    difficulty: 'Sedang',
    text: 'Perhatikan kalimat-kalimat berikut!\n(1) Sarapan pagi memberikan asupan nutrisi yang dibutuhkan otak untuk berkonsentrasi belajar.\n(2) Menurut saya, mi instan adalah makanan sarapan yang paling lezat di dunia.\n(3) Berdasarkan catatan medis, tubuh yang kekurangan cairan saat pagi lebih cepat merasa lemas.\n(4) Hari ini udara terasa sangat menyenangkan dibandingkan hari kemarin.\n\nKalimat yang berisi fakta yang dapat dijadikan bukti pendukung dalam teks argumentasi ditunjukkan oleh nomor...',
    options: [
      { id: 'A', text: '(1) dan (3)' },
      { id: 'B', text: '(2) dan (4)' },
      { id: 'C', text: '(1) dan (2)' },
      { id: 'D', text: '(3) dan (4)' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kalimat (1) dan (3) adalah fakta ilmiah dan medis yang dapat dibuktikan kebenarannya secara objektif. Sedangkan kalimat (2) dan (4) adalah opini atau perasaan subjektif seseorang.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Teks Argumentasi',
    difficulty: 'Mudah',
    text: 'Dalam menulis teks argumentasi, kata hubung (konjungsi) yang paling tepat digunakan untuk menghubungkan kalimat alasan menuju kalimat kesimpulan penegas adalah...',
    options: [
      { id: 'A', text: 'Oleh karena itu' },
      { id: 'B', text: 'Sebelum itu' },
      { id: 'C', text: 'Meskipun demikian' },
      { id: 'D', text: 'Pada suatu hari' },
    ],
    correctAnswer: 'A',
    explanation:
      'Konjungsi sebab-akibat antarkalimat seperti "Oleh karena itu" atau "Oleh sebab itu" lazim digunakan dalam teks argumentasi untuk menarik kesimpulan logis dari alasan-alasan yang telah diuraikan sebelumnya.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Teks Argumentasi',
    difficulty: 'Sukar',
    text: 'Bacalah teks argumentasi berikut!\n\n"Membawa bekal makanan sehat dari rumah ke sekolah memiliki banyak kelebihan. Makanan rumah terjamin kebersihan bahan dan cara pengolahannya sehingga anak terhindar dari penyakit perut. Selain itu, orang tua dapat mengontrol kandungan gizi makanan dan anak dapat membiasakan diri hidup hemat dengan tidak jajan sembarangan."\n\nKesimpulan yang paling tepat dari teks argumentasi di atas adalah...',
    options: [
      { id: 'A', text: 'Membawa bekal dari rumah sangat dianjurkan karena lebih higienis, bergizi, dan menghemat pengeluaran' },
      { id: 'B', text: 'Siswa tidak boleh makan sama sekali selama berada di lingkungan sekolah' },
      { id: 'C', text: 'Uang saku anak sebaiknya dihabiskan untuk membeli jajanan berwarna cerah di pinggir jalan' },
      { id: 'D', text: 'Orang tua harus mengantarkan makanan hangat tepat saat lonceng sekolah berbunyi' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kesimpulan yang merangkum seluruh poin argumentasi penulis adalah bahwa membawa bekal dari rumah sangat dianjurkan karena terbukti lebih higienis (bersih), bergizi seimbang, dan menghemat pengeluaran uang saku.',
  },

  // --- LINGKUP MATERI 3: AWALAN BER- (SOAL 11 - 15) ---
  {
    id: 11,
    type: 'pg',
    topic: 'Awalan Ber-',
    difficulty: 'Mudah',
    text: 'Perhatikan kalimat berikut!\n\n"Sebelum berangkat ke sekolah, Made selalu bersepatu hitam dan bertopi merah putih dengan rapi."\n\nMakna awalan ber- pada kata "bersepatu" dan "bertopi" dalam kalimat tersebut adalah...',
    options: [
      { id: 'A', text: 'Memakai atau mengenakan' },
      { id: 'B', text: 'Menghasilkan atau membuat' },
      { id: 'C', text: 'Mengerjakan suatu pekerjaan' },
      { id: 'D', text: 'Menyatakan jumlah himpunan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Awalan ber- yang melekat pada kata benda pakaian/aksesoris (sepatu, topi, baju, kacamata) mengandung makna gramatikal "memakai" atau "mengenakan" benda tersebut.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Awalan Ber-',
    difficulty: 'Sedang',
    text: 'Apabila kata dasar yang diawali dengan huruf "r" seperti kata "renang" atau "rambut" diberi awalan ber-, maka bentuk kata berimbuhan yang benar adalah...',
    options: [
      { id: 'A', text: 'Berenang dan berambut (huruf "r" pada awalan luluh menjadi satu)' },
      { id: 'B', text: 'Berrenang dan berrambut (ditulis dengan huruf "r" ganda)' },
      { id: 'C', text: 'Belrenang dan belrambut (huruf "r" berubah menjadi "l")' },
      { id: 'D', text: 'Berenangan dan berambutan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kaidah morfofonemik awalan ber-: jika kata dasar diawali dengan fonem /r/, maka huruf "r" pada awalan ber- luluh atau melebur sehingga hanya ditulis dengan satu huruf r (contoh: ber- + renang -> berenang; ber- + rambut -> berambut).',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Awalan Ber-',
    difficulty: 'Sedang',
    text: 'Bacalah kalimat berikut!\n\n"Pak Wayan berlayar ke tengah laut mencari ikan bersama kelompok nelayan Loloan Timur."\n\nMakna awalan ber- pada kata "berlayar" di atas adalah...',
    options: [
      { id: 'A', text: 'Melakukan kegiatan atau pekerjaan' },
      { id: 'B', text: 'Mengeluarkan sesuatu' },
      { id: 'C', text: 'Memiliki banyak barang' },
      { id: 'D', text: 'Menjadi orang lain' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kata "berlayar" bermakna melakukan kegiatan atau pekerjaan berlayar di laut menggunakan perahu layar.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Awalan Ber-',
    difficulty: 'Mudah',
    text: 'Perubahan khusus awalan ber- menjadi "bel-" terjadi apabila awalan tersebut digabungkan dengan kata dasar...',
    options: [
      { id: 'A', text: 'Ajar (menjadi "belajar")' },
      { id: 'B', text: 'Karya (menjadi "bekarya")' },
      { id: 'C', text: 'Lari (menjadi "berlari")' },
      { id: 'D', text: 'Jalan (menjadi "berjalan")' },
    ],
    correctAnswer: 'A',
    explanation:
      'Dalam Bahasa Indonesia, terdapat bentuk khusus alomorf awalan ber- yang berubah menjadi bel-, yaitu pada kata dasar "ajar" (ber- + ajar -> belajar) dan "unjur" (ber- + unjur -> belunjur).',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Awalan Ber-',
    difficulty: 'Sedang',
    text: 'Perhatikan beberapa kalimat berikut!\n(1) Burung merak jantan itu berbulu indah dan berwarna-warni.\n(2) Anak-anak berlari riang di halaman sekolah saat istirahat.\n(3) Paman berkebun jagung di tepi perbukitan.\n(4) Ibu berbelanja bumbu dapur di pasar tradisional.\n\nKalimat yang memuat kata berawalan ber- dengan makna "memiliki" atau "mempunyai" adalah...',
    options: [
      { id: 'A', text: 'Kalimat (1)' },
      { id: 'B', text: 'Kalimat (2)' },
      { id: 'C', text: 'Kalimat (3)' },
      { id: 'D', text: 'Kalimat (4)' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pada kalimat (1), kata "berbulu" bermakna mempunyai atau memiliki bulu, dan kata "berwarna-warni" bermakna memiliki aneka macam warna.',
  },

  // --- LINGKUP MATERI 4: PETUNJUK ARAH DAN DENAH (SOAL 16 - 20) ---
  {
    id: 16,
    type: 'pg',
    topic: 'Petunjuk Arah dan Denah',
    difficulty: 'Sedang',
    image: SVG_DENAH_PERJALANAN,
    imageCaption: 'Gambar 5: Denah rute perjalanan siswa, sekolah, dan fasilitas umum di sekitar Jl. Melati & Jl. Cendrawasih',
    text: 'Perhatikan gambar denah di atas!\n\nWayan berangkat dari rumahnya menuju ke SD Negeri 3 Loloan Timur. Berdasarkan denah dan arah mata angin tersebut, arah perjalanan yang harus ditempuh Wayan adalah menyusuri Jl. Melati ke arah...',
    options: [
      { id: 'A', text: 'Timur' },
      { id: 'B', text: 'Barat' },
      { id: 'C', text: 'Selatan' },
      { id: 'D', text: 'Barat Daya' },
    ],
    correctAnswer: 'A',
    explanation:
      'Berdasarkan jarum kompas arah mata angin pada denah, arah Utara mengarah ke atas. Rumah Wayan berada di sebelah barat (kiri), sedangkan gedung SD Negeri 3 Loloan Timur berada di sebelah timur (kanan). Oleh karena itu, Wayan harus berjalan lurus menyusuri jalan ke arah Timur.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Petunjuk Arah dan Denah',
    difficulty: 'Mudah',
    image: SVG_KOMPAS_8_ARAH,
    imageCaption: 'Gambar 6: Diagram 8 arah mata angin dengan tanda tanya (?) di antara Timur dan Selatan',
    text: 'Perhatikan gambar diagram arah mata angin di atas!\n\nArah mata angin perantara yang berada di antara arah Timur dan arah Selatan yang ditandai dengan tanda tanya (?) adalah...',
    options: [
      { id: 'A', text: 'Tenggara' },
      { id: 'B', text: 'Timur Laut' },
      { id: 'C', text: 'Barat Daya' },
      { id: 'D', text: 'Barat Laut' },
    ],
    correctAnswer: 'A',
    explanation:
      'Urutan delapan arah mata angin searah jarum jam adalah: Utara -> Timur Laut -> Timur -> Tenggara -> Selatan -> Barat Daya -> Barat -> Barat Laut. Arah di antara Timur dan Selatan disebut Tenggara.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Petunjuk Arah dan Denah',
    difficulty: 'Sedang',
    text: 'Bacalah petunjuk arah berikut!\n\n"Dari pintu gerbang SD Negeri 3 Loloan Timur, berjalanlah ke arah selatan sejauh 150 meter hingga menjumpai perempatan lampu merah. Di perempatan tersebut, beloklah ke arah barat (belok kanan). Gedung Kantor Pos berada tepat di sebelah kiri jalan setelah minimarket."\n\nBerdasarkan petunjuk arah tertulis di atas, posisi gedung Kantor Pos setelah belok di perempatan berada di...',
    options: [
      { id: 'A', text: 'Sebelah kiri jalan (sisi selatan)' },
      { id: 'B', text: 'Sebelah kanan jalan (sisi utara)' },
      { id: 'C', text: 'Di tengah-tengah bundaran jalan' },
      { id: 'D', text: 'Tepat di belakang gerbang sekolah' },
    ],
    correctAnswer: 'A',
    explanation:
      'Teks petunjuk arah secara jelas menyatakan: "Di perempatan tersebut, beloklah ke arah barat (belok kanan). Gedung Kantor Pos berada tepat di sebelah kiri jalan setelah minimarket."',
  },
  {
    id: 19,
    type: 'pg',
    topic: 'Petunjuk Arah dan Denah',
    difficulty: 'Mudah',
    text: 'Pada pembuatan gambar denah ruang kelas atau peta lingkungan sekolah, arah mata angin standar yang selalu menunjuk ke sisi bagian atas kertas gambar adalah...',
    options: [
      { id: 'A', text: 'Utara' },
      { id: 'B', text: 'Selatan' },
      { id: 'C', text: 'Timur' },
      { id: 'D', text: 'Barat' },
    ],
    correctAnswer: 'A',
    explanation:
      'Secara konvensi kartografi dan pembuatan denah, arah Utara (U) selalu diletakkan mengarah tegak lurus ke bagian atas gambar, sehingga Selatan berada di bawah, Timur di kanan, dan Barat di kiri.',
  },
  {
    id: 20,
    type: 'pg',
    topic: 'Petunjuk Arah dan Denah',
    difficulty: 'Sedang',
    text: 'Denah sangat berguna dalam kehidupan sehari-hari terutama bagi seseorang yang baru pertama kali mengunjungi suatu lokasi. Manfaat utama sebuah denah adalah...',
    options: [
      { id: 'A', text: 'Memberikan gambaran petunjuk letak suatu tempat, ruangan, atau rute perjalanan secara ringkas dan tepat' },
      { id: 'B', text: 'Menjelaskan harga bahan bangunan dan biaya pembuatan jalan' },
      { id: 'C', text: 'Menceritakan sejarah masa lalu nenek moyang di daerah tersebut' },
      { id: 'D', text: 'Menghitung kecepatan angin dan ramalan cuaca bulanan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Fungsi dan manfaat utama denah adalah sebagai panduan visual yang menunjukkan letak lokasi, posisi ruangan, dan rute perjalanan dari satu titik ke titik tujuan dengan jelas tanpa tersesat.',
  },

  // --- LINGKUP MATERI 5: TEKS DESKRIPSI (SOAL 21 - 25) ---
  {
    id: 21,
    type: 'pg',
    topic: 'Teks Deskripsi',
    difficulty: 'Mudah',
    text: 'Teks yang menggambarkan suatu objek, benda, hewan, atau suasana tempat secara mendalam dan terperinci sehingga pembaca seolah-olah dapat melihat, mendengar, atau merasakannya sendiri disebut...',
    options: [
      { id: 'A', text: 'Teks deskripsi' },
      { id: 'B', text: 'Teks prosedur' },
      { id: 'C', text: 'Teks eksposisi' },
      { id: 'D', text: 'Teks drama' },
    ],
    correctAnswer: 'A',
    explanation:
      'Teks deskripsi adalah teks yang melukiskan atau menggambarkan suatu objek secara rinci dengan melibatkan pancaindra, sehingga pembaca seolah-olah mengalami atau menyaksikan langsung objek tersebut.',
  },
  {
    id: 22,
    type: 'pg',
    topic: 'Teks Deskripsi',
    difficulty: 'Sedang',
    image: SVG_BURUNG_JALAK_BALI,
    imageCaption: 'Gambar 7: Ilustrasi satwa langka endemik Jalak Bali (Leucopsar rothschildi)',
    text: 'Perhatikan gambar dan bacalah kutipan teks berikut!\n\n"Burung Jalak Bali (Curik Bali) merupakan satwa langka kebanggaan Pulau Dewata. Seluruh bulu di tubuhnya berwarna putih bersih bagai kapas, kecuali pada ujung sayap dan ekornya yang berhiaskan warna hitam pekat. Ciri khas yang paling memikat terdapat pada kulit di sekeliling lingkar matanya yang berwarna biru langit cerah tanpa bulu, serta jambul indah di kepalanya yang berdiri tegak saat berkicau lantang."\n\nBerdasarkan kutipan teks deskripsi di atas, bagian tubuh burung Jalak Bali yang memiliki warna biru langit cerah adalah...',
    options: [
      { id: 'A', text: 'Kulit di sekeliling lingkar matanya' },
      { id: 'B', text: 'Ujung sayap dan ekornya' },
      { id: 'C', text: 'Bulu di bagian dada dan leher' },
      { id: 'D', text: 'Kaki dan paruh bagian bawah' },
    ],
    correctAnswer: 'A',
    explanation:
      'Sesuai kalimat ketiga pada teks deskripsi: "Ciri khas yang paling memikat terdapat pada kulit di sekeliling lingkar matanya yang berwarna biru langit cerah tanpa bulu."',
  },
  {
    id: 23,
    type: 'pg',
    topic: 'Teks Deskripsi',
    difficulty: 'Sedang',
    text: 'Bacalah kutipan paragraf berikut!\n\n"Pagi hari di tepi Sungai Loloan, aroma rempah-rempah dari dapur warga tercium semerbak bercampur embun pagi. Gemericik air sungai yang jernih terdengar syahdu berpadu dengan kicauan burung kutilang. Di dermaga kayu kecil, tampak perahu-perahu nelayan berjejer rapi diayun riak gelombang air yang tenang."\n\nPancaindra yang paling dominan digunakan dalam menggambarkan suasana pada kutipan teks deskripsi tersebut adalah...',
    options: [
      { id: 'A', text: 'Indra penciuman (hidung) dan indra pendengaran (telinga)' },
      { id: 'B', text: 'Indra pengecap (lidah) saja' },
      { id: 'C', text: 'Indra peraba (kulit) dan indra pengecap rasa pahit' },
      { id: 'D', text: 'Hanya indra penglihatan tanpa suara' },
    ],
    correctAnswer: 'A',
    explanation:
      'Frasa "aroma rempah-rempah tercium semerbak" melibatkan indra penciuman, sedangkan frasa "gemericik air sungai terdengar syahdu berpadu dengan kicauan burung" melibatkan indra pendengaran.',
  },
  {
    id: 24,
    type: 'pg',
    topic: 'Teks Deskripsi',
    difficulty: 'Mudah',
    text: 'Bacalah paragraf berikut!\n\n"Ruang kelas IV SD Negeri 3 Loloan Timur berukuran 7 x 8 meter dengan dinding bercat putih bersih. Di dinding bagian depan terpasang papan tulis putih yang lebar dan foto pahlawan nasional. Di sudut belakang kelas terdapat pojok baca yang rapi dengan karpet empuk berwarna hijau dan deretan buku cerita bergambar."\n\nObjek utama yang dideskripsikan dalam kutipan teks di atas adalah...',
    options: [
      { id: 'A', text: 'Kondisi dan fasilitas ruang kelas IV SD Negeri 3 Loloan Timur' },
      { id: 'B', text: 'Jadwal piket kebersihan kelas' },
      { id: 'C', text: 'Biaya pembelian karpet hijau di toko perabot' },
      { id: 'D', text: 'Daftar riwayat hidup pahlawan nasional' },
    ],
    correctAnswer: 'A',
    explanation:
      'Paragraf tersebut merincikan secara fisik ukuran, kebersihan dinding, papan tulis, serta pojok baca yang ada di dalam ruang kelas IV SD Negeri 3 Loloan Timur.',
  },
  {
    id: 25,
    type: 'pg',
    topic: 'Teks Deskripsi',
    difficulty: 'Sedang',
    text: 'Teks deskripsi banyak menggunakan kata sifat (adjektiva) untuk menggambarkan keadaan fisik maupun suasana suatu objek. Kelompok kata berikut yang semuanya merupakan kata sifat adalah...',
    options: [
      { id: 'A', text: 'Bersih, luas, sejuk, dan asri' },
      { id: 'B', text: 'Berlari, melompat, menyapu, dan memasak' },
      { id: 'C', text: 'Sekolah, perpustakaan, meja, dan jalan' },
      { id: 'D', text: 'Kemarin, besok, minggu lalu, dan lusa' },
    ],
    correctAnswer: 'A',
    explanation:
      'Kata "bersih", "luas", "sejuk", dan "asri" merupakan kata sifat (adjektiva) yang berfungsi menerangkan sifat atau keadaan objek. Pilihan B adalah kata kerja, pilihan C kata benda, dan pilihan D kata keterangan waktu.',
  },

  // =========================================================================
  // BAGIAN 2: PILIHAN GANDA KOMPLEKS (PGK KATEGORI BENAR / SALAH - 5 SOAL)
  // Setiap butir soal memuat 3 deskripsi / pernyataan yang harus dijawab Benar/Salah
  // =========================================================================

  // --- SOAL 26: RAMBU-RAMBU LALU LINTAS (PGK KATEGORI) ---
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Rambu-Rambu Lalu Lintas',
    difficulty: 'Sedang',
    image: SVG_RAMBU_ANAK_MENYEBERANG,
    imageCaption: 'Gambar 8: Rambu lalu lintas belah ketupat kuning dengan siluet anak sekolah menyeberang zebra cross',
    text: 'Perhatikan gambar rambu lalu lintas di atas dengan saksama!\n\nTentukan pilihan Benar atau Salah untuk setiap pernyataan di bawah ini berdasarkan pemahamanmu tentang rambu lalu lintas!',
    statements: [
      {
        id: 's1',
        text: 'Rambu dengan warna dasar kuning dan lambang hitam tersebut termasuk jenis rambu peringatan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Rambu tersebut berarti pengendara dilarang melintas di area tersebut selamanya.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Rambu ini biasanya dipasang di dekat gerbang sekolah untuk memperingatkan pengemudi agar berhati-hati terhadap anak-anak yang menyeberang jalan.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (kuning = rambu peringatan). Pernyataan 2 SALAH (bukan rambu larangan melintas, melainkan peringatan ada penyeberangan anak-anak). Pernyataan 3 BENAR (rambu ini dipasang di zona aman sekolah agar pengendara mengurangi kecepatan dan waspada).',
  },

  // --- SOAL 27: TEKS ARGUMENTASI (PGK KATEGORI) ---
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Teks Argumentasi',
    difficulty: 'Sedang',
    text: 'Bacalah kutipan teks argumentasi berikut!\n\n"Membawa bekal makanan dari rumah ke sekolah jauh lebih menyehatkan dibandingkan jajan sembarangan di luar sekolah. Makanan yang disiapkan sendiri oleh orang tua menggunakan bahan-bahan segar yang dicuci bersih, serta diolah tanpa bahan pengawet berbahaya. Selain menjaga kesehatan lambung, membawa bekal juga melatih anak untuk bersyukur dan menghemat pengeluaran."\n\nTentukan Benar atau Salah untuk setiap pernyataan di bawah ini berdasarkan ciri teks argumentasi tersebut!',
    statements: [
      {
        id: 's1',
        text: 'Pendapat utama penulis didukung oleh alasan logis mengenai kebersihan bahan dan kesehatan pencernaan.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Tujuan utama teks di atas adalah menceritakan dongeng hewan khayalan untuk menghibur pembaca.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Kalimat "membawa bekal juga melatih anak untuk menghemat pengeluaran" merupakan salah satu argumen pendukung gagasan penulis.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (teks argumentasi memuat pendapat yang diperkuat alasan higienitas). Pernyataan 2 SALAH (teks argumentasi bertujuan meyakinkan dan memaparkan alasan objektif, bukan fabel atau dongeng khayalan). Pernyataan 3 BENAR (aspek penghematan uang saku adalah argumen logis pelengkap).',
  },

  // --- SOAL 28: AWALAN BER- (PGK KATEGORI) ---
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Awalan Ber-',
    difficulty: 'Sedang',
    text: 'Pelajari penggunaan kaidah pembentukan kata dan makna awalan ber- dalam Bahasa Indonesia berikut!\n\nTentukan Benar atau Salah untuk setiap pernyataan di bawah ini!',
    statements: [
      {
        id: 's1',
        text: 'Pada kalimat "Setelah bermain bola di lapangan, tubuh Made berkeringat", kata "berkeringat" bermakna mengeluarkan keringat.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Kata dasar "kerja" jika digabungkan dengan awalan ber- akan membentuk kata "berkerja" dengan dua huruf r berdampingan.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Pada kalimat "Setiap hari Senin Siti bersepeda menuju ke sekolah", kata "bersepeda" bermakna menaiki atau menggunakan sepeda.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (awalan ber- pada kata dasar cairan tubuh seperti keringat/darah bermakna mengeluarkan). Pernyataan 2 SALAH (apabila suku kata pertama kata dasar mengandung -er-, huruf r pada awalan ber- luluh, sehingga bentuk yang baku adalah "bekerja", bukan "berkerja"). Pernyataan 3 BENAR (ber- + alat transportasi bermakna menaiki atau menggunakan alat transportasi tersebut).',
  },

  // --- SOAL 29: PETUNJUK ARAH DAN DENAH (PGK KATEGORI) ---
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Petunjuk Arah dan Denah',
    difficulty: 'Sedang',
    image: SVG_DENAH_PERJALANAN,
    imageCaption: 'Gambar 9: Denah letak bangunan sekolah, rumah, puskesmas, dan lapangan',
    text: 'Perhatikan gambar denah lokasi dan simbol arah mata angin di atas!\n\nTentukan Benar atau Salah untuk setiap pernyataan di bawah ini berdasarkan informasi denah!',
    statements: [
      {
        id: 's1',
        text: 'Berdasarkan jarum penunjuk kompas pada denah, arah Utara (U) selalu digambarkan mengarah ke bagian atas bidang denah.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Pada denah tersebut, bangunan Puskesmas terletak di sebelah utara dari Rumah Wayan.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Denah dan simbol arah mata angin berfungsi untuk mempermudah seseorang menemukan letak suatu lokasi tanpa tersesat.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (standar arah Utara pada kompas denah menunjuk ke atas). Pernyataan 2 SALAH (pada denah, Rumah Wayan berada di bagian atas/utara, sedangkan Puskesmas berada di bagian bawah/selatan dari Rumah Wayan). Pernyataan 3 BENAR (denah dan mata angin memberikan kemudahan navigasi lokasi).',
  },

  // --- SOAL 30: TEKS DESKRIPSI (PGK KATEGORI) ---
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Teks Deskripsi',
    difficulty: 'Sedang',
    text: 'Bacalah kutipan teks deskripsi tentang Rumah Panggung Tradisional di Loloan Timur berikut!\n\n"Rumah panggung tradisional di Loloan Timur berdiri kokoh dengan tiang-tiang kayu jati yang berukir indah. Dinding kayunya berwarna cokelat tua alami memancarkan aroma kayu yang khas. Di serambi depan yang berangin sejuk, terbentang tikar pandan tempat keluarga berkumpul melepas lelah sambil memandang pepohonan kelapa yang melambai-lambai di tepi halaman."\n\nTentukan Benar atau Salah untuk setiap pernyataan di bawah ini berdasarkan teks deskripsi tersebut!',
    statements: [
      {
        id: 's1',
        text: 'Paragraf tersebut menggambarkan secara rinci ciri fisik tiang kayu jati, warna dinding, dan suasana serambi depan rumah panggung.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Teks deskripsi tersebut bertujuan untuk mempengaruhi pembaca agar segera membeli rumah panggung tersebut.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Frasa "serambi depan yang berangin sejuk" melibatkan pencerapan pancaindra peraba (kulit).',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 BENAR (teks menyajikan perincian fisik objek bangunan secara jelas). Pernyataan 2 SALAH (teks di atas adalah teks deskripsi yang menggambarkan keindahan rumah, bukan teks persuasi/iklan promosi penjualan komersial). Pernyataan 3 BENAR (merasakan angin sejuk menggunakan indra peraba/kulit).',
  },

  // =========================================================================
  // BAGIAN 3: ISIAN SINGKAT (5 SOAL: NO. 31 - 35)
  // Siswa mengetikkan jawaban singkat berupa kata atau frasa yang tepat
  // =========================================================================

  // --- SOAL 31: RAMBU-RAMBU LALU LINTAS (ISIAN SINGKAT) ---
  {
    id: 31,
    type: 'isian',
    topic: 'Rambu-Rambu Lalu Lintas',
    difficulty: 'Mudah',
    text: 'Rambu lalu lintas yang berbentuk lingkaran dengan warna dasar putih, garis tepi merah, dan garis palang merah melintang merupakan jenis rambu...',
    correctAnswer: 'larangan',
    acceptedAnswers: ['larangan', 'rambu larangan'],
    explanation:
      'Rambu berbentuk lingkaran berlatar putih dengan bingkai dan coretan diagonal berwarna merah adalah jenis rambu larangan (misalnya dilarang parkir, dilarang berhenti, dilarang masuk).',
  },

  // --- SOAL 32: AWALAN BER- (ISIAN SINGKAT) ---
  {
    id: 32,
    type: 'isian',
    topic: 'Awalan Ber-',
    difficulty: 'Mudah',
    text: 'Kata dasar "ajar" apabila digabungkan dengan awalan ber- mengalami perubahan bentuk khusus (alomorf) menjadi kata...',
    correctAnswer: 'belajar',
    acceptedAnswers: ['belajar'],
    explanation:
      'Awalan ber- yang dilekatkan pada kata dasar "ajar" mengalami perubahan bentuk menjadi "bel-" sehingga kata bentukan yang baku adalah "belajar".',
  },

  // --- SOAL 33: PETUNJUK ARAH DAN DENAH (ISIAN SINGKAT) ---
  {
    id: 33,
    type: 'isian',
    topic: 'Petunjuk Arah dan Denah',
    difficulty: 'Mudah',
    text: 'Pada kompas arah mata angin, arah yang terletak tepat berlawanan dengan arah Barat adalah arah...',
    correctAnswer: 'timur',
    acceptedAnswers: ['timur', 'arah timur'],
    explanation:
      'Arah Barat berada di sisi kiri (270°), sedangkan arah yang berlawanan langsung (180° dari arah barat) adalah arah Timur yang berada di sisi kanan (90°).',
  },

  // --- SOAL 34: TEKS ARGUMENTASI (ISIAN SINGKAT) ---
  {
    id: 34,
    type: 'isian',
    topic: 'Teks Argumentasi',
    difficulty: 'Sedang',
    text: 'Dalam teks argumentasi, pernyataan atau keterangan yang didukung oleh data nyata dan dapat dibuktikan kebenarannya secara objektif disebut...',
    correctAnswer: 'fakta',
    acceptedAnswers: ['fakta', 'kalimat fakta', 'data fakta'],
    explanation:
      'Fakta adalah hal atau peristiwa yang benar-benar nyata terjadi dan dapat dibuktikan kebenarannya. Dalam teks argumentasi, fakta berfungsi sebagai bukti kuat untuk memperkuat opini penulis.',
  },

  // --- SOAL 35: TEKS DESKRIPSI (ISIAN SINGKAT) ---
  {
    id: 35,
    type: 'isian',
    topic: 'Teks Deskripsi',
    difficulty: 'Sedang',
    text: 'Pancaindra manusia yang digunakan untuk mencerap dan menggambarkan wangi aroma rempah-rempah yang semerbak dalam teks deskripsi adalah indra...',
    correctAnswer: 'penciuman',
    acceptedAnswers: ['penciuman', 'indra penciuman', 'hidung', 'indra pembau', 'pembau'],
    explanation:
      'Pencerapan wangi, aroma sedap, maupun bau dalam teks deskripsi memanfaatkan fungsi pancaindra penciuman (hidung).',
  },
];
