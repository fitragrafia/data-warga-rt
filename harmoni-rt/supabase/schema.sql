-- ============================================================
-- HarmoniRT · Skema Supabase · Modul Kependudukan (KK & Warga)
-- Cara pakai: buka Supabase Dashboard > SQL Editor > paste & Run.
-- Urutan: schema.sql dulu, lalu seed.sql (opsional, data contoh).
-- ============================================================

create table if not exists public.kartu_keluarga (
  id uuid primary key default gen_random_uuid(),
  no_kk text not null unique,
  kepala_nama text not null,
  kepala_nik text not null unique,
  kontak text,
  alamat_blok text not null,
  blok_key text not null default 'A',
  status text not null default 'Tetap',
  is_new boolean not null default true,
  created_at timestamptz not null default now(),
  constraint kartu_keluarga_no_kk_len check (char_length(no_kk) = 16),
  constraint kartu_keluarga_nik_len check (char_length(kepala_nik) = 16),
  constraint kartu_keluarga_status check (status in ('Tetap', 'Kontrak')),
  constraint kartu_keluarga_blok check (blok_key in ('A', 'B', 'C', 'D'))
);

create index if not exists kartu_keluarga_status_idx on public.kartu_keluarga (status);
create index if not exists kartu_keluarga_blok_idx on public.kartu_keluarga (blok_key);

create table if not exists public.anggota_keluarga (
  id uuid primary key default gen_random_uuid(),
  kartu_keluarga_id uuid not null references public.kartu_keluarga (id) on delete cascade,
  nama text not null,
  nik text not null unique,
  peran text not null default 'Anggota Keluarga',
  jenis_kelamin text,
  tanggal_lahir date,
  pekerjaan text,
  status_dokumen text not null default 'Terverifikasi',
  is_kepala boolean not null default false,
  created_at timestamptz not null default now(),
  constraint anggota_nik_len check (char_length(nik) = 16),
  constraint anggota_jk check (jenis_kelamin is null or jenis_kelamin in ('Laki-laki', 'Perempuan'))
);

create index if not exists anggota_kk_idx on public.anggota_keluarga (kartu_keluarga_id);

-- Row Level Security (wajib di Supabase agar tabel bisa diakses client)
alter table public.kartu_keluarga enable row level security;
alter table public.anggota_keluarga enable row level security;

drop policy if exists "kk public read" on public.kartu_keluarga;
create policy "kk public read" on public.kartu_keluarga for select using (true);
drop policy if exists "kk public insert" on public.kartu_keluarga;
create policy "kk public insert" on public.kartu_keluarga for insert with check (true);
drop policy if exists "kk public update" on public.kartu_keluarga;
create policy "kk public update" on public.kartu_keluarga for update using (true);
drop policy if exists "kk public delete" on public.kartu_keluarga;
create policy "kk public delete" on public.kartu_keluarga for delete using (true);

drop policy if exists "anggota public read" on public.anggota_keluarga;
create policy "anggota public read" on public.anggota_keluarga for select using (true);
drop policy if exists "anggota public insert" on public.anggota_keluarga;
create policy "anggota public insert" on public.anggota_keluarga for insert with check (true);
drop policy if exists "anggota public update" on public.anggota_keluarga;
create policy "anggota public update" on public.anggota_keluarga for update using (true);
drop policy if exists "anggota public delete" on public.anggota_keluarga;
create policy "anggota public delete" on public.anggota_keluarga for delete using (true);

-- CATATAN PRODUKSI: policy di atas terbuka untuk prototipe.
-- Nanti batasi pakai Supabase Auth (mis. hanya role pengurus RT
-- yang boleh insert/update/delete, warga hanya read).
