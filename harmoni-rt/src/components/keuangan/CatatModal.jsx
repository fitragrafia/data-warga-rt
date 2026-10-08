import { useState } from 'react'
import { calonBayar } from '../../dataKeuangan.js'

export default function CatatModal({ open, onClose }) {
  const [kk, setKk] = useState(calonBayar[0])
  const [periode, setPeriode] = useState('Oktober 2024')
  const [nominal, setNominal] = useState('75.000')
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 bg-inverse-surface/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-surface-container-lowest rounded-xl max-w-lg w-full p-space-lg shadow-2xl flex flex-col gap-space-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-space-xs">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[24px]">add_circle</span>
            <h2 className="font-title-md text-title-md text-on-surface">Catat Pembayaran Masuk</h2>
          </div>
          <button onClick={onClose} className="text-on-surface-variant hover:text-on-surface" type="button">
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>
        <form className="flex flex-col gap-space-md" onSubmit={(e) => { e.preventDefault(); onClose() }}>
          <label className="block font-label-md text-label-md text-on-surface">Pilih Kepala Keluarga / Rumah
            <select value={kk} onChange={(e) => setKk(e.target.value)} className="mt-1 w-full bg-surface-container-low px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary">
              {calonBayar.map((c) => <option key={c}>{c}</option>)}
            </select>
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="block font-label-md text-label-md text-on-surface">Periode Bulan
              <select value={periode} onChange={(e) => setPeriode(e.target.value)} className="mt-1 w-full bg-surface-container-low px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary">
                <option>Oktober 2024</option>
                <option>November 2024</option>
              </select>
            </label>
            <label className="block font-label-md text-label-md text-on-surface">Nominal Iuran (Rp)
              <input value={nominal} onChange={(e) => setNominal(e.target.value)} className="mt-1 w-full bg-surface-container-low px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:ring-1 focus:ring-primary font-bold" type="text" />
            </label>
          </div>
          <div>
            <span className="block font-label-md text-label-md text-on-surface mb-1">Kanal Pembayaran</span>
            <div className="grid grid-cols-2 gap-2">
              <label className="flex items-center gap-2 p-2 rounded-lg bg-surface-container cursor-pointer font-label-sm text-label-sm">
                <input defaultChecked className="accent-primary" name="kanal" type="radio" value="qris" />QRIS / Transfer Bank
              </label>
              <label className="flex items-center gap-2 p-2 rounded-lg bg-surface-container cursor-pointer font-label-sm text-label-sm">
                <input className="accent-primary" name="kanal" type="radio" value="tunai" />Tunai ke Pengurus
              </label>
            </div>
          </div>
          <label className="block font-label-md text-label-md text-on-surface">Catatan Tambahan (Opsional)
            <input className="mt-1 w-full bg-surface-container-low px-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none" placeholder="Misal: Titip via Pak Joko Satpam" type="text" />
          </label>
          <div className="flex items-center justify-end gap-2 pt-space-xs">
            <button onClick={onClose} className="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg" type="button">Batal</button>
            <button className="px-5 py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm" type="submit">Simpan &amp; Terbitkan Kuitansi</button>
          </div>
        </form>
      </div>
    </div>
  )
}
