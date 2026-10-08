export default function IuranRow({ r, onRemind }) {
  const warn = r.status === 'Belum'
  return (
    <tr className={warn ? 'bg-tertiary-fixed/15 hover:bg-tertiary-fixed/25 transition-colors' : 'hover:bg-surface-container-low/50 transition-colors'}>
      <td className="py-3 px-space-md">
        <span className={`font-label-md text-label-md font-bold ${warn ? 'text-tertiary' : 'text-primary'}`}>{r.blok}</span>
        <span className="block font-label-sm text-label-sm text-on-surface-variant">{r.jalan}</span>
      </td>
      <td className="py-3 px-space-md">
        <div className="font-title-sm text-title-sm text-on-surface">{r.kepala}</div>
        <span className="font-label-sm text-label-sm text-on-surface-variant">{r.sub}</span>
      </td>
      <td className="py-3 px-space-md">
        <div className="font-label-md text-label-md text-on-surface">{r.nominal}</div>
        <span className={`font-label-sm text-label-sm ${r.rincianWarn ? 'text-tertiary font-medium' : r.highlight ? 'text-primary font-medium' : 'text-on-surface-variant'}`}>{r.rincian}</span>
      </td>
      <td className="py-3 px-space-md">
        {r.metode ? (
          <span className="inline-flex items-center gap-1 font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded-full text-on-surface">
            <span className="material-symbols-outlined text-[14px]">{r.metodeIcon}</span>{r.metode}
          </span>
        ) : <span className="text-on-surface-variant font-body-sm text-body-sm italic">Menunggu konfirmasi</span>}
      </td>
      <td className="py-3 px-space-md">
        {r.tgl ? (<><span>{r.tgl}</span><span className="block font-label-sm text-label-sm text-on-surface-variant">{r.jam}</span></>) : <span className="text-outline">-</span>}
      </td>
      <td className="py-3 px-space-md">
        {warn ? (
          <span className="inline-flex items-center gap-1 font-label-sm px-2.5 py-1 rounded-full bg-error-container text-tertiary font-bold">
            <span className="material-symbols-outlined text-[14px]">pending</span>BELUM LUNAS
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 font-label-sm px-2.5 py-1 rounded-full bg-secondary-container/60 text-on-secondary-container font-bold">
            <span className="material-symbols-outlined text-[14px]">verified</span>{r.status === 'Advance' ? 'LUNAS (Advance)' : 'LUNAS'}
          </span>
        )}
      </td>
      <td className="py-3 px-space-md text-right">
        {warn ? (
          <div className="flex items-center justify-end gap-1.5">
            <button onClick={() => onRemind(r)} className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-tertiary-container text-on-tertiary-container hover:opacity-90 font-label-sm shadow-sm" type="button">
              <span className="material-symbols-outlined text-[16px]">chat</span>Ingatkan WA
            </button>
            <button className="p-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface-variant" title="Verifikasi Tunai" type="button">
              <span className="material-symbols-outlined text-[16px]">check_box</span>
            </button>
          </div>
        ) : (
          <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-sm transition-colors" type="button">
            <span className="material-symbols-outlined text-[16px]">receipt_long</span>Kwitansi
          </button>
        )}
      </td>
    </tr>
  )
}
