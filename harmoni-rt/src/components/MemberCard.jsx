export default function MemberCard({ m }) {
  return (
    <div className="p-space-md rounded-xl bg-surface-container-low/50 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${m.utama ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface'}`}>{m.inisial}</div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="font-title-sm text-title-sm text-on-surface font-bold">{m.nama}</h4>
              <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${m.utama ? 'bg-primary text-on-primary' : 'bg-surface-container text-on-surface'}`}>{m.peran}</span>
            </div>
            <div className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">NIK: {m.nik}</div>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold bg-secondary-container text-on-secondary-container">
          <span className="material-symbols-outlined text-[14px]">check</span>{m.badge}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-surface-container font-label-sm text-label-sm">
        <div><span className="block text-[11px] opacity-70">Jenis Kelamin</span><span className="font-semibold text-on-surface">{m.jk}</span></div>
        <div><span className="block text-[11px] opacity-70">Usia &amp; Tgl Lahir</span><span className="font-semibold text-on-surface">{m.usia}</span></div>
        <div><span className="block text-[11px] opacity-70">Pekerjaan</span><span className="font-semibold text-on-surface">{m.kerja}</span></div>
      </div>
    </div>
  )
}
