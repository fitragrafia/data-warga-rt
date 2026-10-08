export default function IuranFilter({ query, setQuery, status, setStatus, blok, setBlok }) {
  return (
    <div className="p-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-md">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 bg-surface-container px-3 py-2 rounded-lg">
          <span className="material-symbols-outlined text-[18px] text-on-surface-variant">calendar_month</span>
          <select className="bg-transparent font-label-lg text-label-lg text-on-surface focus:outline-none cursor-pointer" defaultValue="okt24">
            <option value="okt24">Oktober 2024</option>
            <option value="sep24">September 2024</option>
            <option value="agu24">Agustus 2024</option>
          </select>
        </div>
        <div className="flex items-center gap-2 bg-surface-container px-3 py-2 rounded-lg">
          <span className="material-symbols-outlined text-[18px] text-on-surface-variant">filter_alt</span>
          <select value={status} onChange={(e) => setStatus(e.target.value)} className="bg-transparent font-label-lg text-label-lg text-on-surface focus:outline-none cursor-pointer">
            <option value="all">Semua Status (88)</option>
            <option value="Lunas">Lunas (76)</option>
            <option value="Belum">Belum Lunas (12)</option>
          </select>
        </div>
        <div className="flex items-center gap-2 bg-surface-container px-3 py-2 rounded-lg">
          <span className="material-symbols-outlined text-[18px] text-on-surface-variant">home</span>
          <select value={blok} onChange={(e) => setBlok(e.target.value)} className="bg-transparent font-label-lg text-label-lg text-on-surface focus:outline-none cursor-pointer">
            <option value="all">Semua Blok (A-D)</option>
            <option value="A">Blok A (24 Rumah)</option>
            <option value="B">Blok B (22 Rumah)</option>
            <option value="C">Blok C (20 Rumah)</option>
            <option value="D">Blok D (22 Rumah)</option>
          </select>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative w-full md:w-64">
          <input value={query} onChange={(e) => setQuery(e.target.value)} className="w-full bg-surface-container-low pl-9 pr-3 py-2 rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Cari nama KK / No rumah..." type="text" />
          <span className="material-symbols-outlined absolute left-2.5 top-2.5 text-[18px] text-on-surface-variant">search</span>
        </div>
        <button className="p-2 bg-surface-container hover:bg-surface-container-high rounded-lg text-on-surface-variant" title="Ekspor Data" type="button">
          <span className="material-symbols-outlined text-[20px]">ios_share</span>
        </button>
      </div>
    </div>
  )
}
