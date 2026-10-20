/**
 * Aset Gambar Vektor SVG Edukatif untuk Soal Tes Sumatif Bahasa Indonesia Kelas 4
 * Kurikulum Merdeka - SD Negeri 3 Loloan Timur
 */

export const SVG_RAMBU_LAMPU_LALU_LINTAS = `<svg viewBox="0 0 160 160" width="140" height="140" xmlns="http://www.w3.org/2000/svg" class="drop-shadow-sm">
  <!-- Belah Ketupat Kuning Rambu Peringatan -->
  <polygon points="80,8 152,80 80,152 8,80" fill="#FACC15" stroke="#0F172A" stroke-width="5" stroke-linejoin="round"/>
  <polygon points="80,14 146,80 80,146 14,80" fill="none" stroke="#0F172A" stroke-width="2" stroke-linejoin="round"/>
  <!-- Tiang & Kotak Lampu Lalu Lintas -->
  <rect x="66" y="42" width="28" height="76" rx="14" fill="#1E293B" stroke="#0F172A" stroke-width="2"/>
  <!-- Lampu Merah -->
  <circle cx="80" cy="56" r="8" fill="#EF4444" stroke="#7F1D1D" stroke-width="1.5"/>
  <circle cx="78" cy="54" r="2.5" fill="#FCA5A5" opacity="0.8"/>
  <!-- Lampu Kuning -->
  <circle cx="80" cy="80" r="8" fill="#F59E0B" stroke="#78350F" stroke-width="1.5"/>
  <circle cx="78" cy="78" r="2.5" fill="#FDE68A" opacity="0.8"/>
  <!-- Lampu Hijau -->
  <circle cx="80" cy="104" r="8" fill="#10B981" stroke="#064E3B" stroke-width="1.5"/>
  <circle cx="78" cy="102" r="2.5" fill="#A7F3D0" opacity="0.8"/>
  <!-- Topi Tudung Lampu -->
  <path d="M68 50 C68 46 92 46 92 50" stroke="#0F172A" stroke-width="2" fill="none"/>
  <path d="M68 74 C68 70 92 70 92 74" stroke="#0F172A" stroke-width="2" fill="none"/>
  <path d="M68 98 C68 94 92 94 92 98" stroke="#0F172A" stroke-width="2" fill="none"/>
</svg>`;

export const SVG_RAMBU_DILARANG_PUTAR_BALIK = `<svg viewBox="0 0 160 160" width="140" height="140" xmlns="http://www.w3.org/2000/svg" class="drop-shadow-sm">
  <!-- Lingkaran Luar Merah Rambu Larangan -->
  <circle cx="80" cy="80" r="70" fill="#FFFFFF" stroke="#DC2626" stroke-width="14"/>
  <!-- Panah Berputar Balik (U-Turn) -->
  <path d="M96 114 V68 C96 52 64 52 64 68 V110" fill="none" stroke="#0F172A" stroke-width="10" stroke-linecap="round"/>
  <!-- Kepala Panah U-Turn Menghadap ke Bawah -->
  <polygon points="54,98 74,98 64,116" fill="#0F172A"/>
  <!-- Garis Coret Merah Diagonal (Larangan) -->
  <line x1="33" y1="33" x2="127" y2="127" stroke="#DC2626" stroke-width="14" stroke-linecap="round"/>
</svg>`;

export const SVG_RAMBU_RUMAH_SAKIT = `<svg viewBox="0 0 160 160" width="140" height="140" xmlns="http://www.w3.org/2000/svg" class="drop-shadow-sm">
  <!-- Persegi Biru Rambu Petunjuk Fasilitas -->
  <rect x="10" y="10" width="140" height="140" rx="18" fill="#1D4ED8" stroke="#FFFFFF" stroke-width="4"/>
  <rect x="16" y="16" width="128" height="128" rx="14" fill="none" stroke="#FFFFFF" stroke-width="2"/>
  <!-- Lambang Palang Merah di Atas -->
  <circle cx="80" cy="50" r="22" fill="#FFFFFF"/>
  <rect x="75" y="36" width="10" height="28" fill="#DC2626" rx="2"/>
  <rect x="66" y="45" width="28" height="10" fill="#DC2626" rx="2"/>
  <!-- Lambang Tempat Tidur Pasien -->
  <!-- Kepala ranjang -->
  <rect x="36" y="86" width="8" height="34" rx="2" fill="#FFFFFF"/>
  <!-- Kasur -->
  <rect x="42" y="98" width="76" height="8" rx="2" fill="#FFFFFF"/>
  <!-- Kaki ranjang kanan -->
  <rect x="114" y="94" width="8" height="26" rx="2" fill="#FFFFFF"/>
  <!-- Pasien di tempat tidur -->
  <circle cx="56" cy="90" r="6" fill="#FFFFFF"/>
  <rect x="64" y="88" width="36" height="8" rx="3" fill="#FFFFFF"/>
</svg>`;

export const SVG_RAMBU_WAJIB_BELOK_KIRI = `<svg viewBox="0 0 160 160" width="140" height="140" xmlns="http://www.w3.org/2000/svg" class="drop-shadow-sm">
  <!-- Lingkaran Biru Rambu Perintah -->
  <circle cx="80" cy="80" r="70" fill="#1D4ED8" stroke="#FFFFFF" stroke-width="4"/>
  <!-- Panah Putih Melengkung ke Kiri -->
  <path d="M100 120 V84 C100 70 88 64 68 64 H44" fill="none" stroke="#FFFFFF" stroke-width="14" stroke-linecap="round"/>
  <!-- Kepala Panah ke Kiri -->
  <polygon points="52,44 52,84 28,64" fill="#FFFFFF"/>
</svg>`;

export const SVG_DENAH_PERJALANAN = `<svg viewBox="0 0 340 220" width="320" height="208" xmlns="http://www.w3.org/2000/svg" class="drop-shadow-sm rounded-xl overflow-hidden bg-emerald-50/60 border border-slate-300">
  <!-- Latar Rumput & Area Hijau -->
  <rect width="340" height="220" fill="#F0FDF4"/>
  
  <!-- Jalan Utama Abu-abu -->
  <!-- Jalan Melati (Horizontal) -->
  <rect x="0" y="100" width="340" height="34" fill="#CBD5E1"/>
  <line x1="0" y1="117" x2="340" y2="117" stroke="#FFFFFF" stroke-dasharray="8 6" stroke-width="2"/>
  <text x="18" y="122" font-size="9" font-family="sans-serif" font-weight="bold" fill="#334155">Jl. Melati</text>
  
  <!-- Jalan Cendrawasih (Vertikal) -->
  <rect x="145" y="0" width="34" height="220" fill="#CBD5E1"/>
  <line x1="162" y1="0" x2="162" y2="220" stroke="#FFFFFF" stroke-dasharray="8 6" stroke-width="2"/>
  <text x="166" y="24" font-size="8" font-family="sans-serif" font-weight="bold" fill="#334155" transform="rotate(90 166 24)">Jl. Cendrawasih</text>

  <!-- Bangunan 1: Rumah Wayan (Barat Laut / Kiri Atas) -->
  <rect x="25" y="20" width="85" height="60" rx="8" fill="#FEF08A" stroke="#CA8A04" stroke-width="2"/>
  <polygon points="67,8 115,22 20,22" fill="#EA580C"/>
  <text x="67" y="46" font-size="9" font-family="sans-serif" font-weight="bold" fill="#713F12" text-anchor="middle">Rumah Wayan</text>
  <text x="67" y="60" font-size="7.5" font-family="sans-serif" fill="#854D0E" text-anchor="middle">Titik Berangkat</text>

  <!-- Bangunan 2: SD Negeri 3 Loloan Timur (Timur Laut / Kanan Atas) -->
  <rect x="210" y="18" width="105" height="64" rx="8" fill="#DBEAFE" stroke="#2563EB" stroke-width="2"/>
  <rect x="235" y="10" width="55" height="10" rx="3" fill="#1E40AF"/>
  <text x="262" y="40" font-size="9" font-family="sans-serif" font-weight="bold" fill="#1E3A8A" text-anchor="middle">SD Negeri 3</text>
  <text x="262" y="52" font-size="8.5" font-family="sans-serif" font-weight="bold" fill="#1E3A8A" text-anchor="middle">Loloan Timur</text>
  <text x="262" y="66" font-size="7.5" font-family="sans-serif" fill="#2563EB" text-anchor="middle">[Gedung Sekolah]</text>

  <!-- Bangunan 3: Puskesmas Loloan (Barat Daya / Kiri Bawah) -->
  <rect x="25" y="148" width="85" height="58" rx="8" fill="#FEE2E2" stroke="#DC2626" stroke-width="2"/>
  <rect x="62" y="156" width="12" height="4" fill="#DC2626"/>
  <rect x="66" y="152" width="4" height="12" fill="#DC2626"/>
  <text x="67" y="180" font-size="9" font-family="sans-serif" font-weight="bold" fill="#991B1B" text-anchor="middle">Puskesmas</text>
  <text x="67" y="193" font-size="7.5" font-family="sans-serif" fill="#B91C1C" text-anchor="middle">Fasilitas Kesehatan</text>

  <!-- Bangunan 4: Lapangan Olahraga (Tenggara / Kanan Bawah) -->
  <rect x="210" y="148" width="105" height="58" rx="8" fill="#DCFCE7" stroke="#16A34A" stroke-width="2"/>
  <circle cx="262" cy="177" r="14" fill="none" stroke="#16A34A" stroke-width="1.5" stroke-dasharray="3 3"/>
  <text x="262" y="174" font-size="9" font-family="sans-serif" font-weight="bold" fill="#14532D" text-anchor="middle">Lapangan</text>
  <text x="262" y="187" font-size="8" font-family="sans-serif" font-weight="bold" fill="#14532D" text-anchor="middle">Sepak Bola</text>

  <!-- Kompas Arah Mata Angin (Pojok Kiri Bawah Jalan) -->
  <g transform="translate(195, 117)">
    <circle cx="0" cy="0" r="14" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.5"/>
    <polygon points="0,-12 3,0 -3,0" fill="#DC2626"/>
    <polygon points="0,12 3,0 -3,0" fill="#475569"/>
    <polygon points="12,0 0,3 0,-3" fill="#475569"/>
    <polygon points="-12,0 0,3 0,-3" fill="#475569"/>
    <text x="0" y="-14" font-size="7" font-family="sans-serif" font-weight="bold" fill="#DC2626" text-anchor="middle">U</text>
    <text x="16" y="2.5" font-size="6.5" font-family="sans-serif" font-weight="bold" fill="#0F172A" text-anchor="start">T</text>
    <text x="0" y="19" font-size="6.5" font-family="sans-serif" font-weight="bold" fill="#0F172A" text-anchor="middle">S</text>
    <text x="-16" y="2.5" font-size="6.5" font-family="sans-serif" font-weight="bold" fill="#0F172A" text-anchor="end">B</text>
  </g>
</svg>`;

export const SVG_KOMPAS_8_ARAH = `<svg viewBox="0 0 200 200" width="160" height="160" xmlns="http://www.w3.org/2000/svg" class="drop-shadow-sm">
  <!-- Lingkaran Luar Kompas -->
  <circle cx="100" cy="100" r="88" fill="#F8FAFC" stroke="#0F172A" stroke-width="3"/>
  <circle cx="100" cy="100" r="82" fill="none" stroke="#94A3B8" stroke-width="1" stroke-dasharray="4 2"/>

  <!-- Jarum Arah Mata Angin -->
  <!-- Utara - Selatan -->
  <polygon points="100,24 106,100 94,100" fill="#DC2626"/>
  <polygon points="100,176 106,100 94,100" fill="#475569"/>
  <!-- Timur - Barat -->
  <polygon points="176,100 100,106 100,94" fill="#475569"/>
  <polygon points="24,100 100,106 100,94" fill="#475569"/>
  
  <!-- Arah Perantara (Diagonal) -->
  <polygon points="154,46 100,104 104,100" fill="#94A3B8"/>
  <polygon points="46,154 100,96 96,100" fill="#94A3B8"/>
  <polygon points="46,46 100,104 96,100" fill="#94A3B8"/>
  <!-- Tenggara (?) Berwarna Aksen Kuning Khusus -->
  <polygon points="154,154 100,96 104,100" fill="#F59E0B"/>

  <!-- Titik Pusat Kompas -->
  <circle cx="100" cy="100" r="7" fill="#0F172A" stroke="#FFFFFF" stroke-width="2"/>

  <!-- Label Huruf Arah Mata Angin -->
  <text x="100" y="18" font-size="11" font-family="sans-serif" font-weight="extrabold" fill="#DC2626" text-anchor="middle">U (Utara)</text>
  <text x="188" y="104" font-size="11" font-family="sans-serif" font-weight="extrabold" fill="#0F172A" text-anchor="middle">T (Timur)</text>
  <text x="100" y="196" font-size="11" font-family="sans-serif" font-weight="extrabold" fill="#0F172A" text-anchor="middle">S (Selatan)</text>
  <text x="12" y="104" font-size="11" font-family="sans-serif" font-weight="extrabold" fill="#0F172A" text-anchor="middle">B (Barat)</text>

  <!-- Label Diagonal -->
  <text x="160" y="38" font-size="8.5" font-family="sans-serif" font-weight="bold" fill="#64748B">Timur Laut</text>
  <text x="40" y="38" font-size="8.5" font-family="sans-serif" font-weight="bold" fill="#64748B" text-anchor="end">Barat Laut</text>
  <text x="40" y="172" font-size="8.5" font-family="sans-serif" font-weight="bold" fill="#64748B" text-anchor="end">Barat Daya</text>
  <!-- Label Tenggara yang Ditanyakan (?) -->
  <rect x="142" y="152" width="36" height="20" rx="4" fill="#FEF08A" stroke="#EAB308" stroke-width="1.5"/>
  <text x="160" y="166" font-size="11" font-family="sans-serif" font-weight="extrabold" fill="#B45309" text-anchor="middle">?</text>
</svg>`;

export const SVG_BURUNG_JALAK_BALI = `<svg viewBox="0 0 200 160" width="180" height="144" xmlns="http://www.w3.org/2000/svg" class="drop-shadow-sm rounded-xl overflow-hidden bg-sky-50 border border-sky-200">
  <!-- Latar Dedaunan Ranting Tropis -->
  <path d="M10 130 Q100 120 190 140" stroke="#78350F" stroke-width="8" stroke-linecap="round" fill="none"/>
  <path d="M40 127 Q30 110 20 118" stroke="#15803D" stroke-width="4" stroke-linecap="round" fill="none"/>
  <ellipse cx="25" cy="115" rx="10" ry="5" fill="#22C55E" transform="rotate(-30 25 115)"/>
  <ellipse cx="170" cy="130" rx="12" ry="6" fill="#22C55E" transform="rotate(20 170 130)"/>

  <!-- Badan Burung Jalak Bali (Bulu Putih Bersih) -->
  <!-- Ekor Putih dengan Ujung Hitam -->
  <path d="M60 110 L25 125 L30 115 L65 100 Z" fill="#0F172A"/>
  <path d="M65 100 L30 115 L40 105 L70 95 Z" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1"/>

  <!-- Tubuh Bagian Bawah & Dada Putih -->
  <ellipse cx="100" cy="85" rx="36" ry="26" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>
  
  <!-- Sayap Putih dengan Ujung Hitam Cantik -->
  <path d="M85 75 Q110 80 120 105 Q95 110 75 90 Z" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
  <path d="M60 100 Q75 95 90 108 L65 112 Z" fill="#0F172A"/>
  <path d="M70 95 Q85 90 98 102 L75 106 Z" fill="#0F172A"/>

  <!-- Kaki Burung Mencengkeram Ranting -->
  <path d="M90 110 L88 126 M98 110 L96 126" stroke="#475569" stroke-width="2.5" stroke-linecap="round"/>

  <!-- Leher & Kepala Burung -->
  <circle cx="135" cy="56" r="18" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1.5"/>

  <!-- Jambul Tegak Cantik Khas Jalak Bali -->
  <path d="M130 40 Q118 20 100 24 Q116 32 125 44 Z" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
  <path d="M134 38 Q125 24 112 28 Q124 35 129 42 Z" fill="#FFFFFF"/>
  <path d="M138 39 Q132 26 122 30 Q130 37 134 44 Z" fill="#FFFFFF"/>

  <!-- Ciri Khas Utama: Kelopak Mata Biru Cerah Tanpa Bulu -->
  <path d="M134 54 Q146 50 148 57 Q142 63 133 60 Z" fill="#0284C7"/>
  <circle cx="140" cy="56" r="3.5" fill="#0F172A"/>
  <circle cx="141" cy="55" r="1" fill="#FFFFFF"/>

  <!-- Paruh Kuning Kecokelatan -->
  <polygon points="152,53 172,59 152,65" fill="#EAB308" stroke="#CA8A04" stroke-width="1"/>
</svg>`;

export const SVG_RAMBU_ANAK_MENYEBERANG = `<svg viewBox="0 0 160 160" width="140" height="140" xmlns="http://www.w3.org/2000/svg" class="drop-shadow-sm">
  <!-- Belah Ketupat Kuning Rambu Peringatan -->
  <polygon points="80,8 152,80 80,152 8,80" fill="#FACC15" stroke="#0F172A" stroke-width="5" stroke-linejoin="round"/>
  <polygon points="80,14 146,80 80,146 14,80" fill="none" stroke="#0F172A" stroke-width="2" stroke-linejoin="round"/>

  <!-- Garis-garis Zebra Cross Penyeberangan -->
  <rect x="36" y="118" width="88" height="4" fill="#0F172A" rx="2"/>
  <rect x="42" y="125" width="76" height="4" fill="#0F172A" rx="2"/>

  <!-- Siluet Anak Lebih Besar (Kakak Menuntun Adik) -->
  <!-- Kepala -->
  <circle cx="68" cy="54" r="8" fill="#0F172A"/>
  <!-- Badan & Baju -->
  <path d="M60 64 L76 64 L80 92 L56 92 Z" fill="#0F172A"/>
  <!-- Kaki -->
  <path d="M62 92 L58 116 M74 92 L78 116" stroke="#0F172A" stroke-width="4.5" stroke-linecap="round"/>
  <!-- Tangan Menuntun -->
  <path d="M74 70 L94 82" stroke="#0F172A" stroke-width="3.5" stroke-linecap="round"/>

  <!-- Siluet Anak Lebih Kecil (Adik) -->
  <!-- Kepala -->
  <circle cx="98" cy="68" r="6" fill="#0F172A"/>
  <!-- Badan -->
  <path d="M92 76 L104 76 L108 98 L88 98 Z" fill="#0F172A"/>
  <!-- Kaki -->
  <path d="M92 98 L90 116 M104 98 L106 116" stroke="#0F172A" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Tas Sekolah di Punggung -->
  <rect x="52" y="66" width="7" height="16" rx="2" fill="#0F172A"/>
</svg>`;
