export default function MetricCards({ stats, loading }) {
  const s = stats || { totalKK: 0, tetap: 0, kontrak: 0, jiwa: 0, laki: 0, perempuan: 0 }
  const total = s.tetap + s.kontrak
  const pctTetap = total ? Math.round((s.tetap / total) * 100) : 0
  const pctKontrak = total ? Math.round((s.kontrak / total) * 100) : 0
  const val = (v) => (loading ? '...' : v)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md">
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <span className="font-label-md text-label-md text-on-surface-variant">Total Populasi</span>
          <span className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[20px]">groups</span>
          </span>
        </div>
        <div className="mt-space-md flex items-baseline gap-2">
          <span className="font-headline-xl text-headline-xl text-on-surface">{val(s.jiwa)}</span>
          <span className="font-label-md text-label-md text-on-surface-variant font-bold">Jiwa</span>
        </div>
        <div className="flex items-center gap-1.5 mt-2">
          <span className="px-1.5 py-0.5 rounded text-[11px] font-semibold bg-surface-container text-primary">{val(s.laki)} L / {val(s.perempuan)} P</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">Terdaftar resmi</span>
        </div>
      </div>
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <span className="font-label-md text-label-md text-on-surface-variant">Kepala Keluarga</span>
          <span className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[20px]">badge</span>
          </span>
        </div>
        <div className="mt-space-md flex items-baseline gap-2">
          <span className="font-headline-xl text-headline-xl text-on-surface">{val(s.totalKK)}</span>
          <span className="font-label-md text-label-md text-on-surface-variant font-bold">Buku KK</span>
        </div>
        <p className="font-label-sm text-label-sm text-on-surface-variant mt-2">Data tersimpan di Supabase</p>
      </div>
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <span className="font-label-md text-label-md text-on-surface-variant">Warga Tetap</span>
          <span className="w-8 h-8 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container">
            <span className="material-symbols-outlined text-[20px]">home</span>
          </span>
        </div>
        <div className="mt-space-md flex items-baseline gap-2">
          <span className="font-headline-xl text-headline-xl text-primary">{val(s.tetap)}</span>
          <span className="font-label-md text-label-md text-on-surface-variant font-bold">KK</span>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: `${pctTetap}%` }} />
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">{val(pctTetap)}%</span>
        </div>
      </div>
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <span className="font-label-md text-label-md text-on-surface-variant">Kontrak &amp; Sewa</span>
          <span className="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-tertiary">
            <span className="material-symbols-outlined text-[20px]">apartment</span>
          </span>
        </div>
        <div className="mt-space-md flex items-baseline gap-2">
          <span className="font-headline-xl text-headline-xl text-tertiary">{val(s.kontrak)}</span>
          <span className="font-label-md text-label-md text-on-surface-variant font-bold">KK</span>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
            <div className="h-full bg-tertiary rounded-full" style={{ width: `${pctKontrak}%` }} />
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">{val(pctKontrak)}%</span>
        </div>
      </div>
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <span className="font-label-md text-label-md text-on-surface-variant">Mutasi (Bulan Ini)</span>
          <span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[20px]">sync_alt</span>
          </span>
        </div>
        <div className="mt-space-md flex items-center gap-3">
          <span className="font-headline-md text-headline-md text-primary font-bold">+3 <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">Masuk</span></span>
          <span className="font-headline-md text-headline-md text-error font-bold">-1 <span className="font-label-sm text-label-sm text-on-surface-variant font-normal">Keluar</span></span>
        </div>
        <p className="font-label-sm text-label-sm text-on-surface-variant mt-2">Pertumbuhan bersih +2 jiwa</p>
      </div>
    </div>
  )
}
