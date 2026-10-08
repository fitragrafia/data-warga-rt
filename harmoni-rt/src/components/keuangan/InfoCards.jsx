const items = [
  {
    icon: 'folder_open', title: 'Arsip Fisik Tersimpan di Pos Kamling',
    desc: 'Seluruh bukti kas fisik terjilid rapi dan dapat ditinjau langsung oleh warga setiap malam Sabtu di Pos Keamanan.',
  },
  {
    icon: 'groups', title: 'Musyawarah Warga Triwulanan',
    desc: 'Pertemuan pertanggungjawaban terbuka dijadwalkan pada 27 Oktober 2024 di Balai Pertemuan RT 05.',
  },
]

export default function InfoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
      {items.map((c) => (
        <div key={c.title} className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex items-center gap-space-md">
          <div className="w-20 h-20 rounded-xl flex-shrink-0 bg-surface-container flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[36px]">{c.icon}</span>
          </div>
          <div className="flex flex-col">
            <span className="font-title-sm text-title-sm text-on-surface">{c.title}</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">{c.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
