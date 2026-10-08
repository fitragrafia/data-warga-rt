import { alokasi } from '../../dataKeuangan.js'

export default function AlokasiCard() {
  return (
    <div className="lg:col-span-1 rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-space-sm">
          <h2 className="font-title-md text-title-md text-on-surface">Alokasi Anggaran RT</h2>
          <span className="font-label-sm text-label-sm text-primary font-semibold">T.A 2024</span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">Pembagian persentase dana iuran warga RT 05 untuk keberlanjutan fasilitas umum.</p>
        <div className="relative flex items-center justify-center py-4">
          <svg className="w-48 h-48 -rotate-90" viewBox="0 0 120 120">
            <circle className="text-surface-container-highest" cx="60" cy="60" fill="none" r="48" stroke="currentColor" strokeWidth="14" />
            <circle cx="60" cy="60" fill="none" r="48" stroke="#006768" strokeDasharray="135.7 301.59" strokeDashoffset="0" strokeWidth="14" />
            <circle cx="60" cy="60" fill="none" r="48" stroke="#106966" strokeDasharray="90.47 301.59" strokeDashoffset="-135.7" strokeWidth="14" />
            <circle cx="60" cy="60" fill="none" r="48" stroke="#bb5822" strokeDasharray="45.23 301.59" strokeDashoffset="-226.17" strokeWidth="14" />
            <circle cx="60" cy="60" fill="none" r="48" stroke="#88d4cf" strokeDasharray="30.15 301.59" strokeDashoffset="-271.4" strokeWidth="14" />
          </svg>
          <div className="absolute flex flex-col items-center justify-center text-center">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Total Realisasi</span>
            <span className="font-headline-sm text-headline-sm text-on-surface">100%</span>
          </div>
        </div>
      </div>
      <div className="space-y-2 mt-space-sm pt-space-sm bg-surface-container-low p-space-sm rounded-lg">
        {alokasi.map((a) => (
          <div key={a.label} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${a.dot}`}></span>
              <span className="font-label-md text-label-md">{a.label}</span>
            </div>
            <span className="font-bold text-on-surface text-[12px]">{a.pct}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
