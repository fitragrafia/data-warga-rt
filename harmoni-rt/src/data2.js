export const mutasiLogs = [
  {
    icon: 'login', circle: 'bg-secondary-container text-on-secondary-container', jenis: 'Pindah Masuk',
    jenisColor: 'text-primary', tanggal: '12 Mei', judul: 'Keluarga Hendra Pratama',
    deskripsi: '3 Jiwa • Menempati Blok B4 (Status Sewa). Berkas surat pindah lengkap SKPWNI.',
    statusIcon: 'check_circle', statusText: 'Disetujui Pengurus',
  },
  {
    icon: 'child_care', circle: 'bg-surface-container-high text-primary', jenis: 'Kelahiran Baru',
    jenisColor: 'text-secondary', tanggal: '08 Mei', judul: 'Anak ke-2 Bpk. Ridwan',
    deskripsi: 'Laki-laki • Blok A12. Permohonan pengantar KK & Akta Kelahiran diproses.',
    statusIcon: 'verified', statusText: 'Data Ditambahkan',
  },
  {
    icon: 'logout', circle: 'bg-error-container text-on-error-container', jenis: 'Pindah Keluar',
    jenisColor: 'text-error', tanggal: '02 Mei', judul: 'Ibu Siska Permata',
    deskripsi: '1 Jiwa • Blok C2. Pindah domisili tugas dinas ke Jakarta Selatan.',
    keterangan: 'Keterangan: Non-aktif dari iuran RT',
  },
  {
    icon: 'sentiment_dissatisfied', circle: 'bg-surface-container text-on-surface-variant', jenis: 'Meninggal Dunia',
    jenisColor: 'text-on-surface-variant', tanggal: '14 Apr', judul: 'Alm. H. Usman',
    deskripsi: 'Blok C1 • Pembaruan KK baru (Kepala Keluarga dialihkan ke Ibu Siti Sarah).', dim: true,
  },
]

export const ageGroups = [
  { label: 'Balita & Anak (0-12)', count: '48 Jiwa', width: '14%', bar: 'bg-primary', note: 'Jadwal Posyandu Aktif' },
  { label: 'Remaja & Usia Muda (13-24)', count: '62 Jiwa', width: '18%', bar: 'bg-secondary-fixed-dim', note: 'Karang Taruna RT' },
  { label: 'Produktif (25-59)', count: '198 Jiwa', width: '58%', bar: 'bg-primary', note: 'Tenaga Kerja & Wirausaha' },
  { label: 'Lansia (60+)', count: '34 Jiwa', width: '10%', bar: 'bg-tertiary-fixed-dim', note: 'Pemantauan Lansia Mandiri' },
]
