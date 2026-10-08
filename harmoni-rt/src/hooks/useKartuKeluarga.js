import { useCallback, useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabase.js'
import { families as localFamilies } from '../data.js'

export const DEFAULT_STATS = { totalKK: 88, tetap: 72, kontrak: 16, jiwa: 342, laki: 174, perempuan: 168 }

export function initials(nama) {
  if (!nama) return '??'
  const parts = nama.replace(/\(.*?\)/g, '').trim().split(/\s+/)
  return ((parts[0]?.[0] || '') + (parts[1]?.[0] || parts[0]?.[1] || '')).toUpperCase()
}

export function waLink(kontak) {
  if (!kontak) return '#'
  let d = String(kontak).replace(/\D/g, '')
  if (d.startsWith('0')) d = '62' + d.slice(1)
  return d ? `https://wa.me/${d}` : '#'
}

const BULAN = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des']

function calcUmur(tgl) {
  if (!tgl) return null
  const b = new Date(tgl)
  const now = new Date()
  let u = now.getFullYear() - b.getFullYear()
  if (now.getMonth() < b.getMonth() || (now.getMonth() === b.getMonth() && now.getDate() < b.getDate())) u -= 1
  return u
}

function fmtTgl(tgl) {
  if (!tgl) return null
  const [y, m, d] = tgl.split('-').map(Number)
  return `${String(d).padStart(2, '0')} ${BULAN[m - 1]} ${y}`
}

function mapAnggota(a) {
  const u = calcUmur(a.tanggal_lahir)
  const t = fmtTgl(a.tanggal_lahir)
  return {
    nama: a.nama, nik: a.nik, peran: a.peran, inisial: initials(a.nama),
    utama: !!a.is_kepala, badge: a.status_dokumen || 'Terverifikasi',
    jk: a.jenis_kelamin || '-', usia: u == null ? '-' : `${u} Thn${t ? ` (${t})` : ''}`,
    kerja: a.pekerjaan || '-',
  }
}

export function mapKK(kk, anggota) {
  const detail = (anggota || []).map(mapAnggota)
  return {
    id: kk.id, kepala: kk.kepala_nama, nik: kk.kepala_nik, kk: kk.no_kk,
    blok: kk.alamat_blok, blokKey: kk.blok_key, anggota: detail.length,
    status: kk.status, kontak: kk.kontak || '-', wa: waLink(kk.kontak),
    inisial: initials(kk.kepala_nama), isNew: !!kk.is_new, detail,
  }
}

export function calcStats(mapped) {
  let tetap = 0, kontrak = 0, jiwa = 0, laki = 0, perempuan = 0
  for (const f of mapped) {
    if (f.status === 'Tetap') tetap += 1
    else kontrak += 1
    jiwa += f.detail.length
    for (const m of f.detail) {
      if (m.jk === 'Laki-laki') laki += 1
      else if (m.jk === 'Perempuan') perempuan += 1
    }
  }
  return { totalKK: mapped.length, tetap, kontrak, jiwa, laki, perempuan }
}

export function useKartuKeluarga() {
  const [rows, setRows] = useState(localFamilies)
  const [stats, setStats] = useState(DEFAULT_STATS)
  const [loading, setLoading] = useState(isSupabaseConfigured)
  const [usingRemote, setUsingRemote] = useState(false)
  const [error, setError] = useState('')

  const refresh = useCallback(async () => {
    if (!isSupabaseConfigured || !supabase) return
    setLoading(true)
    setError('')
    try {
      const { data: kkRows, error: e1 } = await supabase
        .from('kartu_keluarga').select('*').order('created_at', { ascending: true })
      if (e1) throw e1
      const { data: agRows, error: e2 } = await supabase.from('anggota_keluarga').select('*')
      if (e2) throw e2
      const byKK = {}
      for (const a of agRows || []) (byKK[a.kartu_keluarga_id] ||= []).push(a)
      const mapped = (kkRows || []).map((kk) => mapKK(kk, byKK[kk.id] || []))
      setRows(mapped)
      setStats(calcStats(mapped))
      setUsingRemote(true)
    } catch (err) {
      setError(err.message || 'Gagal memuat data dari Supabase. Menampilkan data lokal.')
      setRows(localFamilies)
      setStats(DEFAULT_STATS)
      setUsingRemote(false)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { refresh() }, [refresh])

  return { rows, stats, loading, usingRemote, error, refresh }
}
