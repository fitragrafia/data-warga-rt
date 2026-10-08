import IuranRow from './IuranRow.jsx'
import IuranFilter from './IuranFilter.jsx'

export default function IuranTable(props) {
  const { rows, onRemind } = props
  return (
    <div className="rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden">
      <IuranFilter {...props} />
      <div className="bg-surface-container-low p-space-md flex items-center justify-between flex-wrap gap-space-sm">
        <div className="flex items-center gap-space-md">
          <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[22px]">info</span>
          </div>
          <div className="flex flex-col">
            <span className="font-title-sm text-title-sm text-on-surface">Paket Standar Iuran RT 05: Rp 75.000 / Bulan</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">Alokasi: Kas Lingkungan (Rp 25.000) • Kebersihan Sampah (Rp 30.000) • Keamanan Satpam (Rp 20.000)</span>
          </div>
        </div>
        <div className="text-right">
          <span className="font-label-sm text-label-sm text-on-surface-variant block">Jatuh Tempo Periode Ini:</span>
          <span className="font-label-md text-label-md text-tertiary">20 Oktober 2024</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant font-label-md text-label-md">
              <th className="py-3.5 px-space-md">No Rumah &amp; Blok</th>
              <th className="py-3.5 px-space-md">Kepala Keluarga</th>
              <th className="py-3.5 px-space-md">Komponen Biaya</th>
              <th className="py-3.5 px-space-md">Metode Bayar</th>
              <th className="py-3.5 px-space-md">Tgl Bayar</th>
              <th className="py-3.5 px-space-md">Status</th>
              <th className="py-3.5 px-space-md text-right">Aksi Tindakan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container-low font-body-sm text-body-sm text-on-surface">
            {rows.map((r) => <IuranRow key={r.id} r={r} onRemind={onRemind} />)}
            {rows.length === 0 && <tr><td colSpan={7} className="py-8 text-center text-on-surface-variant">Tidak ada data yang cocok.</td></tr>}
          </tbody>
        </table>
      </div>
      <div className="p-space-md bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
        <span>Menampilkan {rows.length} dari 88 Kartu Keluarga aktif</span>
        <div className="flex items-center gap-1">
          <button className="w-8 h-8 rounded-lg bg-surface-container text-on-surface" type="button">1</button>
          <button className="w-8 h-8 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high text-on-surface" type="button">2</button>
          <button className="w-8 h-8 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high text-on-surface" type="button">3</button>
          <span className="px-1">...</span>
          <button className="w-8 h-8 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high text-on-surface" type="button">18</button>
        </div>
      </div>
    </div>
  )
}
