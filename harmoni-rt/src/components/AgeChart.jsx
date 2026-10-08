import { ageGroups } from '../data2.js'

export default function AgeChart() {
  return (
    <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-sm">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div>
          <h3 className="font-title-sm text-title-sm text-on-surface">Distribusi Kelompok Umur &amp; Pendidikan Warga</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant">Statistik demografi lingkungan RT 05 untuk acuan program bansos dan posyandu</p>
        </div>
        <span className="px-2.5 py-1 rounded bg-surface-container font-label-sm text-label-sm font-semibold text-primary">Sensus Semester I 2024</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md pt-2">
        {ageGroups.map((g) => (
          <div key={g.label} className="flex flex-col p-3 rounded-lg bg-surface-container-low">
            <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm gap-2">
              <span>{g.label}</span>
              <span className="font-bold text-on-surface whitespace-nowrap">{g.count}</span>
            </div>
            <div className="w-full bg-surface-container h-2 rounded-full mt-2 overflow-hidden">
              <div className={`${g.bar} h-full rounded-full`} style={{ width: g.width }}></div>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant mt-1.5">{g.note}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
