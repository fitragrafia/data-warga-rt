-- ============================================================
-- HarmoniRT · Seed contoh · 5 KK + 15 anggota (mirip data mockup)
-- Jalankan SETELAH schema.sql. Aman di-run ulang (upsert by id).
-- ============================================================

insert into public.kartu_keluarga (id, no_kk, kepala_nama, kepala_nik, kontak, alamat_blok, blok_key, status, is_new) values
('a0000000-0000-0000-0000-000000000001','3273100109150001','Sukarman Setyawan','3273101205780004','0812-3456-789','Blok A No. 04','A','Tetap',false),
('a0000000-0000-0000-0000-000000000002','3273102409230008','Hendra Pratama','3273101804890002','0813-9988-776','Blok B No. 04','B','Kontrak',true),
('a0000000-0000-0000-0000-000000000003','3273101103140005','Ridwan Kamiludin','3273100508820003','0817-0011-223','Blok A No. 12','A','Tetap',false),
('a0000000-0000-0000-0000-000000000004','3273100901110002','Siti Sarah (Alm. H. Usman)','3273104512600001','0852-1199-334','Blok C No. 01','C','Tetap',false),
('a0000000-0000-0000-0000-000000000005','3171050209210003','Kevin Jonathan','3171051502950009','0818-9876-543','Blok B No. 11','B','Kontrak',false)
on conflict (id) do update set kepala_nama = excluded.kepala_nama, kontak = excluded.kontak;

insert into public.anggota_keluarga (id, kartu_keluarga_id, nama, nik, peran, jenis_kelamin, tanggal_lahir, pekerjaan, status_dokumen, is_kepala) values
('b0000000-0000-0000-0000-000000000001','a0000000-0000-0000-0000-000000000001','Sukarman Setyawan','3273101205780004','Kepala Keluarga','Laki-laki','1978-05-12','Karyawan Swasta','KTP Valid',true),
('b0000000-0000-0000-0000-000000000002','a0000000-0000-0000-0000-000000000001','Endang Nurdiani','3273105509820002','Istri','Perempuan','1982-09-15','Guru PNS','KTP Valid',false),
('b0000000-0000-0000-0000-000000000003','a0000000-0000-0000-0000-000000000001','Dimas Pratama','3273102103060001','Anak Kandung','Laki-laki','2006-03-21','Pelajar / Mahasiswa','KTP Pemula (18 Th)',false),
('b0000000-0000-0000-0000-000000000004','a0000000-0000-0000-0000-000000000001','Alya Safira','3273106811120003','Anak Kandung','Perempuan','2012-11-28','Pelajar SD','KIA (Anak)',false),
('b0000000-0000-0000-0000-000000000005','a0000000-0000-0000-0000-000000000002','Hendra Pratama','3273101804890002','Kepala Keluarga','Laki-laki','1989-04-18','Wiraswasta','KTP Valid',true),
('b0000000-0000-0000-0000-000000000006','a0000000-0000-0000-0000-000000000002','Rina Marlina','3273104705900005','Istri','Perempuan','1990-05-07','Ibu Rumah Tangga','KTP Valid',false),
('b0000000-0000-0000-0000-000000000007','a0000000-0000-0000-0000-000000000002','Galang Pratama','3273101205180007','Anak Kandung','Laki-laki','2018-05-12','Pelajar TK','KIA (Anak)',false),
('b0000000-0000-0000-0000-000000000003','a0000000-0000-0000-0000-000000000003','Ridwan Kamiludin','3273100508820003','Kepala Keluarga','Laki-laki','1982-08-05','Dokter Umum','KTP Valid',true),
('b0000000-0000-0000-0000-000000000009','a0000000-0000-0000-0000-000000000003','Fitri Handayani','3273106205850004','Istri','Perempuan','1985-06-02','Bidan','KTP Valid',false),
('b0000000-0000-0000-0000-000000000010','a0000000-0000-0000-0000-000000000003','Naila Kamila','3273104808120002','Anak Kandung','Perempuan','2012-12-08','Pelajar SD','KIA (Anak)',false),
('b0000000-0000-0000-0000-000000000011','a0000000-0000-0000-0000-000000000003','Rizky Fauzan','3273101507160006','Anak Kandung','Laki-laki','2016-07-15','Pelajar SD','KIA (Anak)',false),
('b0000000-0000-0000-0000-000000000012','a0000000-0000-0000-0000-000000000003','Bayi Kamiludin','3273101005240001','Anak Kandung','Laki-laki','2024-05-10','Balita','Akta Diproses',false),
('b0000000-0000-0000-0000-000000000013','a0000000-0000-0000-0000-000000000004','Siti Sarah','3273104512600001','Kepala Keluarga','Perempuan','1960-12-05','Ibu Rumah Tangga','KTP Valid',true),
('b0000000-0000-0000-0000-000000000014','a0000000-0000-0000-0000-000000000004','Ahmad Fauzi','3273101210950003','Anak Kandung','Laki-laki','1995-10-12','Karyawan Swasta','KTP Valid',false),
('b0000000-0000-0000-0000-000000000015','a0000000-0000-0000-0000-000000000005','Kevin Jonathan','3171051502950009','Kepala Keluarga','Laki-laki','1995-02-15','Karyawan Startup','KTP Valid',true)
on conflict (id) do nothing;
