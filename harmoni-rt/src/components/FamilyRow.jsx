import StatusBadge from './StatusBadge.jsx'

export default function FamilyRow({ f, onDetail }) {
  return (
    <tr className="hover:bg-surface-container-low/60 transition-colors group">
      <td className="py-3.5 px-space-md">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold font-title-sm text-title-sm ${f.status === 'Tetap' ? 'bg-primary/10 text-primary' : 'bg-tertiary/10 text-tertiary'}`}>{f.inisial}</div>
          <div>
            <div className="font-title-sm text-title-sm text-on-surface font-semibold group-hover:text-primary transition-colors flex items-center gap-1.5">
              {f.kepala}
              {f.isNew && <span className="px-1.5 rounded bg-secondary-container text-on-secondary-container text-[10px] font-bold">BARU</span>}
            </div>
            <div className="font-label-sm text-label-sm text-on-surface-variant">NIK: {f.nik}</div>
          </div>
        </div>
      </td>
      <td className="py-3.5 px-space-md">
        <div className="font-label-md text-label-md text-on-surface">{f.kk}</div>
        <div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
          <span className="material-symbols-outlined text-[14px]">home_pin</span>{f.blok}
        </div>
      </td>
      <td className="py-3.5 px-space-md text-center">
        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-surface-container font-label-md text-label-md font-bold text-on-surface">{f.anggota} Jiwa</span>
      </td>
      <td className="py-3.5 px-space-md"><StatusBadge status={f.status} /></td>
      <td className="py-3.5 px-space-md">
        <a className="inline-flex items-center gap-1 text-primary hover:underline font-label-md text-label-md" href={f.wa} target="_blank" rel="noreferrer">
          <span className="material-symbols-outlined text-[16px]">chat</span>{f.kontak}
        </a>
      </td>
      <td className="py-3.5 px-space-md text-right">
        <button onClick={() => onDetail(f)} className="px-3 py-1.5 bg-surface-container hover:bg-primary hover:text-on-primary rounded-lg font-label-sm text-label-sm font-semibold transition-all flex items-center gap-1 ml-auto" type="button">
          <span>Rincian</span><span className="material-symbols-outlined text-[16px]">chevron_right</span>
        </button>
      </td>
    </tr>
  )
}
