const cards = [
  { label: 'Total Populasi', icon: 'groups', value: '342', unit: 'Jiwa' },
  { label: 'Kepala Keluarga', icon: 'badge', value: '88', unit: 'Buku KK' },
  { label: 'Warga Tetap', icon: 'home', value: '72', unit: 'KK', accent: true },
  { label: 'Kontrak & Sewa', icon: 'apartment', value: '16', unit: 'KK', sewa: true },
]

export default function MetricCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-md">
      {cards.slice(0, 2).map((c) => (
        <div key={c.label} className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="font-label-md text-label-md text-on-surface-variant">{c.label}</span>
            <span className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[20px]">{c.icon}</span>
            </span>
          </div>
          <div className="mt-space-md flex items-baseline gap-2">
            <span className="font-headline-xl text-headline-xl text-on-surface">{c.value}</span>
            <span className="font-label-md text-label-md text-on-surface-variant font-bold">{c.unit}</span>
          </div>
          {c.label === 'Total Populasi' ? (
            <div className="flex items-center gap-1.5 mt-2">
              <span className="px-1.5 py-0.5 rounded text-[11px] font-semibold bg-surface-container text-primary">174 L / 168 P</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Terdaftar resmi</span>
            </div>
          ) : (
            <p className="font-label-sm text-label-sm text-on-surface-variant mt-2">Kapasitas hunian 94.2%</p>
          )}
        </div>
      ))}
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <span className="font-label-md text-label-md text-on-surface-variant">Warga Tetap</span>
          <span className="w-8 h-8 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container">
            <span className="material-symbols-outlined text-[20px]">home</span>
          </span>
        </div>
        <div className="mt-space-md flex items-baseline gap-2">
          <span className="font-headline-xl text-headline-xl text-primary">72</span>
          <span className="font-label-md text-label-md text-on-surface-variant font-bold">KK</span>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: '81.8%' }} />
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">82%</span>
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
          <span className="font-headline-xl text-headline-xl text-tertiary">16</span>
          <span className="font-label-md text-label-md text-on-surface-variant font-bold">KK</span>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
            <div className="h-full bg-tertiary rounded-full" style={{ width: '18.2%' }} />
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold">18%</span>
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
