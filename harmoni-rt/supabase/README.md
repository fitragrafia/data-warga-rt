# Supabase — HarmoniRT Modul Kependudukan

## 1. Buat project
1. Buka https://supabase.com → New project.
2. Catat **Project URL** dan **anon public key** (Project Settings → API).

## 2. Buat tabel (skema)
1. Buka **SQL Editor** → New query.
2. Paste isi `supabase/schema.sql` → **Run**.
   - Membuat tabel `kartu_keluarga` + `anggota_keluarga`, index, dan RLS policy.
3. (Opsional, data contoh) New query → paste `supabase/seed.sql` → **Run**.

## 3. Hubungkan aplikasi
1. Isi file `harmoni-rt/.env`:
   ```env
   VITE_SUPABASE_URL=https://xxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOi...
   ```
2. **Restart** dev server (`node .\node_modules\vite\bin\vite.js`) — Vite membaca `.env` saat start.
3. Buka `/kependudukan`:
   - Banner "Mode lokal" hilang = data dari Supabase.
   - Tombol **+ Tambah KK / Warga** menyimpan ke tabel `kartu_keluarga`
     (kepala keluarga otomatis tercatat di `anggota_keluarga`).

## Skema singkat
- `kartu_keluarga`: `no_kk` (unik, 16 digit), `kepala_nama`, `kepala_nik`
  (unik, 16 digit), `kontak`, `alamat_blok`, `blok_key` (A–D),
  `status` (Tetap/Kontrak), `is_new`, `created_at`.
- `anggota_keluarga`: FK `kartu_keluarga_id` (cascade delete), `nama`,
  `nik` (unik), `peran`, `jenis_kelamin`, `tanggal_lahir`, `pekerjaan`,
  `status_dokumen`, `is_kepala`.
