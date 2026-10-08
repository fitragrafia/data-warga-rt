export const iuranRows = [
  {
    id: 1, blok: 'Blok A-01', blokKey: 'A', jalan: 'Jl. Mawar 1', kepala: 'Agus Pratama, S.T.',
    sub: 'Warga Tetap • 4 Jiwa', nominal: 'Rp 75.000', rincian: 'Kas 25k + Smp 30k + Keam 20k',
    rincianWarn: false, metode: 'QRIS / Transfer', metodeIcon: 'qr_code_2',
    tgl: '02 Okt 2024', jam: '08:14 WIB', status: 'Lunas',
  },
  {
    id: 2, blok: 'Blok A-02', blokKey: 'A', jalan: 'Jl. Mawar 1', kepala: 'Ibu Hj. Siti Nurhaliza',
    sub: 'Warga Tetap • 2 Jiwa (Lansia)', nominal: 'Rp 75.000', rincian: 'Kas 25k + Smp 30k + Keam 20k',
    rincianWarn: false, metode: 'Tunai (Bendahara)', metodeIcon: 'payments',
    tgl: '05 Okt 2024', jam: '19:30 WIB', status: 'Lunas',
  },
  {
    id: 3, blok: 'Blok A-03', blokKey: 'A', jalan: 'Jl. Mawar 1', kepala: 'Deni Setiawan',
    sub: 'Warga Kontrak • 3 Jiwa', nominal: 'Rp 75.000', rincian: 'Tertunggak 1 Periode',
    rincianWarn: true, metode: null, tgl: null, status: 'Belum',
  },
  {
    id: 4, blok: 'Blok B-04', blokKey: 'B', jalan: 'Jl. Mawar 2', kepala: 'dr. Kevin Sanjaya',
    sub: 'Warga Tetap • 3 Jiwa', nominal: 'Rp 225.000', rincian: 'Paket 3 Bulan (Okt-Des)',
    rincianWarn: false, highlight: true, metode: 'Transfer Bank', metodeIcon: 'qr_code_2',
    tgl: '01 Okt 2024', jam: '11:02 WIB', status: 'Advance',
  },
  {
    id: 5, blok: 'Blok B-08', blokKey: 'B', jalan: 'Jl. Mawar 2', kepala: 'Hendro Wicaksono',
    sub: 'Warga Tetap • 5 Jiwa', nominal: 'Rp 75.000', rincian: 'Kas 25k + Smp 30k + Keam 20k',
    rincianWarn: false, metode: 'Tunai (Kolektor RT)', metodeIcon: 'payments',
    tgl: '04 Okt 2024', jam: '17:45 WIB', status: 'Lunas',
  },
]

export const kasRows = [
  {
    id: 1, tgl: '05 Okt 2024', kategori: 'Keamanan', katStyle: 'bg-secondary-container/50 text-on-secondary-container',
    judul: 'Honor 2 Petugas Satpam Portal (Pak Joko & Pak Tejo)',
    sub: 'Periode kerja 01 - 30 September 2024', arus: 'Keluar', nominal: '- Rp 2.200.000',
    bukti: 'Nota & TTD', buktiIcon: 'attachment',
  },
  {
    id: 2, tgl: '04 Okt 2024', kategori: 'Iuran Warga', katStyle: 'bg-surface-container-high text-primary',
    judul: 'Setoran Iuran Batch 1 (Kolektivitas Blok A & B)',
    sub: 'Disetorkan oleh Bendahara RT ke rekening bank RT', arus: 'Masuk', nominal: '+ Rp 3.450.000',
    bukti: 'Bukti Setor', buktiIcon: 'receipt',
  },
  {
    id: 3, tgl: '03 Okt 2024', kategori: 'Kebersihan', katStyle: 'bg-secondary-container/50 text-on-secondary-container',
    judul: 'Retribusi Truk Pengangkut Sampah DLH Kelurahan',
    sub: 'Biaya operasional buang ke TPA per putaran bulan Okt', arus: 'Keluar', nominal: '- Rp 650.000',
    bukti: 'Kuitansi DLH', buktiIcon: 'attachment',
  },
  {
    id: 4, tgl: '02 Okt 2024', kategori: 'Pemeliharaan', katStyle: 'bg-tertiary-fixed text-tertiary',
    judul: 'Penggantian 4 Unit Lampu LED Sorot Gang Blok C & D',
    sub: 'Lampu mati akibat hujan lebat pekan lalu', arus: 'Keluar', nominal: '- Rp 350.000',
    bukti: 'Foto Struk Toko', buktiIcon: 'image',
  },
]

export const alokasi = [
  { label: 'Keamanan & Ronda', pct: '45% (Rp 1.440.000)', dot: 'bg-primary' },
  { label: 'Kebersihan & Sampah', pct: '30% (Rp 960.000)', dot: 'bg-secondary' },
  { label: 'Pemeliharaan Fasilitas', pct: '15% (Rp 480.000)', dot: 'bg-tertiary' },
  { label: 'Dana Sosial / Duka', pct: '10% (Rp 320.000)', dot: 'bg-secondary-fixed-dim' },
]

export const trenKas = [
  { bulan: 'Mei', masuk: 70, keluar: 40, tipIn: 'Masuk: 5.8M', tipOut: 'Keluar: 3.1M' },
  { bulan: 'Jun', masuk: 75, keluar: 48, tipIn: 'Masuk: 6.1M', tipOut: 'Keluar: 3.8M' },
  { bulan: 'Jul', masuk: 82, keluar: 52, tipIn: 'Masuk: 6.3M', tipOut: 'Keluar: 4.1M' },
  { bulan: 'Agu', masuk: 90, keluar: 78, tipIn: 'Masuk: 7.2M (Event 17an)', tipOut: 'Keluar: 6.2M (Kepanitiaan)' },
  { bulan: 'Sep', masuk: 76, keluar: 38, tipIn: 'Masuk: 6.2M', tipOut: 'Keluar: 3.0M' },
  { bulan: 'Okt', masuk: 80, keluar: 42, tipIn: 'Masuk: 6.45M', tipOut: 'Keluar: 3.2M', aktif: true },
]

export const calonBayar = [
  'Blok A-03 - Deni Setiawan',
  'Blok A-07 - Hendra Gunawan',
  'Blok B-02 - Maya Susanti',
  'Blok C-11 - Rian Firmansyah',
]
