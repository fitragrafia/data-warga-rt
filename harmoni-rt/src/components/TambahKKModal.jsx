import { useState } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabase.js'

const onlyDigits = (v) => String(v || '').replace(/\D/g, '')

export default function TambahKKModal({ open, onClose, onSaved }) {
  const [form, setForm] = useState({ noKK: '', nama: '', nik: '', kontak: '', alamat: '', status: 'Tetap' })
  const [saving, setSaving] = useState(false)
  const [err, setErr] = useState('')
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const blokKeyOf = (alamat) => {
    const m = String(alamat || '').toUpperCase().match(/BLOK\s*([A-D])/)
    return m ? m[1] : 'A'
  }

  const submit = async (e) => {
    e.preventDefault()
    setErr('')
    const noKK = onlyDigits(form.noKK)
    const nik = onlyDigits(form.nik)
    if (noKK.length !== 16) return setErr('Nomor KK harus 16 digit angka.')
    if (nik.length !== 16) return setErr('NIK kepala keluarga harus 16 digit angka.')
    if (!form.nama.trim()) return setErr('Nama kepala keluarga wajib diisi.')
    if (!form.alamat.trim()) return setErr('Alamat rumah wajib diisi.')
    if (!isSupabaseConfigured || !supabase) {
      return setErr('Supabase belum dikonfigurasi. Isi .env lalu restart dev server.')
    }
    setSaving(true)
    try {
      const payload = {
        no_kk: noKK, kepala_nama: form.nama.trim(), kepala_nik: nik,
        kontak: form.kontak.trim(), alamat_blok: form.alamat.trim(),
        blok_key: blokKeyOf(form.alamat), status: form.status, is_new: true,
      }
      const { data: kk, error: e1 } = await supabase
        .from('kartu_keluarga').insert(payload).select().single()
      if (e1) throw e1
      const { error: e2 } = await supabase.from('anggota_keluarga').insert({
        kartu_keluarga_id: kk.id, nama: payload.kepala_nama, nik: payload.kepala_nik,
        peran: 'Kepala Keluarga', status_dokumen: 'KTP Valid', is_kepala: true,
      })
      if (e2) throw e2
      setForm({ noKK: '', nama: '', nik: '', kontak: '', alamat: '', status: 'Tetap' })
      onSaved?.()
      onClose()
    } catch (ex) {
      const msg = ex.message || ''
      if (msg.includes('duplicate') || msg.includes('unique')) setErr('No. KK atau NIK sudah terdaftar.')
      else if (msg.includes('row-level security') || msg.includes('policy')) setErr('Ditolak RLS: jalankan policy schema.sql.')
      else setErr('Gagal menyimpan: ' + msg)
    } finally {
      setSaving(false)
    }
  }

  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 bg-inverse-surface/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-surface-container-lowest w-full max-w-xl rounded-2xl shadow-xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <div className="p-space-md bg-surface-container-low flex items-center justify-between sticky top-0">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[22px]">group_add</span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Pendaftaran Kartu Keluarga Baru</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-surface-container" type="button">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        <form className="p-space-lg flex flex-col gap-space-md" onSubmit={submit}>
          {err && <div className="px-3 py-2 rounded-lg bg-error-container text-on-error-container font-body-sm text-body-sm">{err}</div>}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            <label className="flex flex-col gap-1 font-label-md text-label-md">Nomor Kartu Keluarga (KK)
              <input required value={form.noKK} onChange={set('noKK')} inputMode="numeric" maxLength={16} placeholder="16 digit nomor KK" className="px-3 py-2 bg-surface-container-low rounded-lg font-body-md focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </label>
            <label className="flex flex-col gap-1 font-label-md text-label-md">Nama Kepala Keluarga
              <input required value={form.nama} onChange={set('nama')} placeholder="Sesuai KTP" className="px-3 py-2 bg-surface-container-low rounded-lg font-body-md focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </label>
            <label className="flex flex-col gap-1 font-label-md text-label-md">NIK Kepala Keluarga
              <input required value={form.nik} onChange={set('nik')} inputMode="numeric" maxLength={16} placeholder="16 digit NIK" className="px-3 py-2 bg-surface-container-low rounded-lg font-body-md focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </label>
            <label className="flex flex-col gap-1 font-label-md text-label-md">No. Telepon / WhatsApp
              <input required value={form.kontak} onChange={set('kontak')} placeholder="08xxxxxxxxxx" type="tel" className="px-3 py-2 bg-surface-container-low rounded-lg font-body-md focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </label>
            <label className="flex flex-col gap-1 font-label-md text-label-md">Alamat Rumah (Blok / No)
              <input required value={form.alamat} onChange={set('alamat')} placeholder="Contoh: Blok B No. 14" className="px-3 py-2 bg-surface-container-low rounded-lg font-body-md focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </label>
            <label className="flex flex-col gap-1 font-label-md text-label-md">Status Tempat Tinggal
              <select value={form.status} onChange={set('status')} className="px-3 py-2 bg-surface-container-low rounded-lg font-body-md">
                <option value="Tetap">Warga Tetap (Hak Milik)</option>
                <option value="Kontrak">Warga Kontrak / Sewa / Kost</option>
              </select>
            </label>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-label-md text-label-md">Unggah Berkas KK (PDF / JPG)</span>
            <div className="border border-dashed border-outline-variant rounded-lg p-4 text-center cursor-pointer flex flex-col items-center">
              <span className="material-symbols-outlined text-[28px] text-primary mb-1">cloud_upload</span>
              <span className="font-label-sm text-label-sm font-semibold">Tarik file ke sini atau klik untuk memilih</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Maksimal 5MB (PDF, PNG, JPG)</span>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 pt-2 border-t border-surface-container">
            <button onClick={onClose} className="px-4 py-2 bg-surface-container rounded-lg" type="button">Batal</button>
            <button disabled={saving} className="px-5 py-2 bg-primary text-on-primary rounded-lg font-bold disabled:opacity-60" type="submit">{saving ? 'Menyimpan...' : 'Simpan ke Database'}</button>
          </div>
        </form>
      </div>
    </div>
  )
}
