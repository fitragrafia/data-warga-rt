export const navItems = [
  { icon: 'dashboard', label: 'Ringkasan RT', path: 'beranda-warga', active: false },
  { icon: 'groups', label: 'Data Penduduk & KK', path: 'kependudukan-warga', active: true },
  { icon: 'account_balance_wallet', label: 'Iuran & Buku Kas', path: 'keuangan-kas', active: false },
  { icon: 'assignment_turned_in', label: 'Layanan Persuratan', path: 'layanan-surat', active: false },
  { icon: 'security', label: 'Jadwal Ronda & Warta', path: 'informasi-keamanan', active: false },
]

export const families = [
  {
    id: 1, kepala: 'Sukarman Setyawan', nik: '3273101205780004', kk: '3273100109150001',
    blok: 'Blok A No. 04', blokKey: 'A', anggota: 4, status: 'Tetap', kontak: '0812-3456-789',
    wa: 'https://wa.me/628123456789', inisial: 'SK', isNew: false,
    detail: [
      { nama: 'Sukarman Setyawan', nik: '3273101205780004', peran: 'Kepala Keluarga', inisial: 'SK', utama: true, badge: 'KTP Valid', jk: 'Laki-laki', usia: '46 Thn (12 Mei 1978)', kerja: 'Karyawan Swasta' },
      { nama: 'Endang Nurdiani', nik: '3273105509820002', peran: 'Istri', inisial: 'EN', utama: false, badge: 'KTP Valid', jk: 'Perempuan', usia: '42 Thn (15 Sep 1982)', kerja: 'Guru PNS' },
      { nama: 'Dimas Pratama', nik: '3273102103060001', peran: 'Anak Kandung', inisial: 'DP', utama: false, badge: 'KTP Pemula (18 Th)', jk: 'Laki-laki', usia: '18 Thn (21 Mar 2006)', kerja: 'Pelajar / Mahasiswa' },
      { nama: 'Alya Safira', nik: '3273106811120003', peran: 'Anak Kandung', inisial: 'AS', utama: false, badge: 'KIA (Anak)', jk: 'Perempuan', usia: '11 Thn (28 Nov 2012)', kerja: 'Pelajar SD' },
    ],
  },
  {
    id: 2, kepala: 'Hendra Pratama', nik: '3273101804890002', kk: '3273102409230008',
    blok: 'Blok B No. 04', blokKey: 'B', anggota: 3, status: 'Kontrak', kontak: '0813-9988-776',
    wa: 'https://wa.me/628139988776', inisial: 'HP', isNew: true,
    detail: [
      { nama: 'Hendra Pratama', nik: '3273101804890002', peran: 'Kepala Keluarga', inisial: 'HP', utama: true, badge: 'KTP Valid', jk: 'Laki-laki', usia: '36 Thn (18 Apr 1989)', kerja: 'Wiraswasta' },
      { nama: 'Rina Marlina', nik: '3273104705900005', peran: 'Istri', inisial: 'RM', utama: false, badge: 'KTP Valid', jk: 'Perempuan', usia: '34 Thn (07 Mei 1990)', kerja: 'Ibu Rumah Tangga' },
      { nama: 'Galang Pratama', nik: '3273101205180007', peran: 'Anak Kandung', inisial: 'GP', utama: false, badge: 'KIA (Anak)', jk: 'Laki-laki', usia: '6 Thn (12 Mei 2018)', kerja: 'Pelajar TK' },
    ],
  },
  {
    id: 3, kepala: 'Ridwan Kamiludin', nik: '3273100508820003', kk: '3273101103140005',
    blok: 'Blok A No. 12', blokKey: 'A', anggota: 5, status: 'Tetap', kontak: '0817-0011-223',
    wa: 'https://wa.me/628170011223', inisial: 'RK', isNew: false,
    detail: [
      { nama: 'Ridwan Kamiludin', nik: '3273100508820003', peran: 'Kepala Keluarga', inisial: 'RK', utama: true, badge: 'KTP Valid', jk: 'Laki-laki', usia: '42 Thn (05 Agu 1982)', kerja: 'Dokter Umum' },
      { nama: 'Fitri Handayani', nik: '3273106205850004', peran: 'Istri', inisial: 'FH', utama: false, badge: 'KTP Valid', jk: 'Perempuan', usia: '39 Thn (02 Jun 1985)', kerja: 'Bidan' },
      { nama: 'Naila Kamila', nik: '3273104808120002', peran: 'Anak Kandung', inisial: 'NK', utama: false, badge: 'KIA (Anak)', jk: 'Perempuan', usia: '11 Thn (08 Des 2012)', kerja: 'Pelajar SD' },
      { nama: 'Rizky Fauzan', nik: '3273101507160006', peran: 'Anak Kandung', inisial: 'RF', utama: false, badge: 'KIA (Anak)', jk: 'Laki-laki', usia: '8 Thn (15 Jul 2016)', kerja: 'Pelajar SD' },
      { nama: 'Bayi Kamiludin', nik: '3273101005240001', peran: 'Anak Kandung', inisial: 'BK', utama: false, badge: 'Akta Diproses', jk: 'Laki-laki', usia: '0 Thn (10 Mei 2024)', kerja: 'Balita' },
    ],
  },
  {
    id: 4, kepala: 'Siti Sarah (Alm. H. Usman)', nik: '3273104512600001', kk: '3273100901110002',
    blok: 'Blok C No. 01', blokKey: 'C', anggota: 2, status: 'Tetap', kontak: '0852-1199-334',
    wa: 'https://wa.me/628521199334', inisial: 'SS', isNew: false,
    detail: [
      { nama: 'Siti Sarah', nik: '3273104512600001', peran: 'Kepala Keluarga', inisial: 'SS', utama: true, badge: 'KTP Valid', jk: 'Perempuan', usia: '64 Thn (05 Des 1960)', kerja: 'Ibu Rumah Tangga' },
      { nama: 'Ahmad Fauzi', nik: '3273101210950003', peran: 'Anak Kandung', inisial: 'AF', utama: false, badge: 'KTP Valid', jk: 'Laki-laki', usia: '29 Thn (12 Okt 1995)', kerja: 'Karyawan Swasta' },
    ],
  },
  {
    id: 5, kepala: 'Kevin Jonathan', nik: '3171051502950009', kk: '3171050209210003',
    blok: 'Blok B No. 11', blokKey: 'B', anggota: 1, status: 'Kontrak', kontak: '0818-9876-543',
    wa: 'https://wa.me/628189876543', inisial: 'KJ', isNew: false,
    detail: [
      { nama: 'Kevin Jonathan', nik: '3171051502950009', peran: 'Kepala Keluarga', inisial: 'KJ', utama: true, badge: 'KTP Valid', jk: 'Laki-laki', usia: '31 Thn (15 Feb 1995)', kerja: 'Karyawan Startup' },
    ],
  },
]
