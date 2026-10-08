import FamilyRow from './FamilyRow.jsx'

export default function KeluargaTable({ rows, total, loading, search, setSearch, status, setStatus, blok, setBlok, onDetail }) {
  return (
    <div className="flex flex-col gap-space-md">
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col md:flex-row gap-space-sm md:items-center justify-between">
        <div className="relative flex-1">
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[20px]">search</span>
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Cari NIK, Nama Warga, atau Nomor KK..." type="text"
            className="w-full pl-10 pr-4 py-2 bg-surface-container-low rounded-lg text-body-md text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none focus:ring-2 focus:ring-primary/20" />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <select value={status} onChange={(e) => setStatus(e.target.value)} className="px-3 py-2 bg-surface-container-low text-on-surface font-label-md text-label-md rounded-lg cursor-pointer">
            <option value="all">Semua Status Tinggal</option>
            <option value="Tetap">Warga Tetap (72)</option>
            <option value="Kontrak">Warga Kontrak / Sewa (16)</option>
          </select>
          <select value={blok} onChange={(e) => setBlok(e.target.value)} className="px-3 py-2 bg-surface-container-low text-on-surface font-label-md text-label-md rounded-lg cursor-pointer">
            <option value="all">Semua Blok Rumah</option>
            <option value="A">Blok A (Jl. Kenanga)</option>
            <option value="B">Blok B (Jl. Melati)</option>
            <option value="C">Blok C (Jl. Cempaka)</option>
          </select>
        </div>
      </div>
      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div className="p-space-md flex items-center justify-between bg-surface-container-low/40 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="font-title-sm text-title-sm text-on-surface">Daftar Kartu Keluarga Aktif</span>
            <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">{rows.length} Data</span>
          </div>
          <div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[16px]">info</span>Klik baris untuk rincian anggota keluarga
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[820px]">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase">
                <th className="py-3 px-space-md">Kepala Keluarga</th>
                <th className="py-3 px-space-md">No. KK &amp; Hunian</th>
                <th className="py-3 px-space-md text-center">Anggota</th>
                <th className="py-3 px-space-md">Status Domisili</th>
                <th className="py-3 px-space-md">Kontak Utama</th>
                <th className="py-3 px-space-md text-right">Tindakan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-low font-body-md text-body-md text-on-surface">
              {loading ? (
                <tr><td colSpan={6} className="py-8 text-center text-on-surface-variant">Memuat data dari Supabase...</td></tr>
              ) : (
                rows.map((f) => <FamilyRow key={f.id} f={f} onDetail={onDetail} />)
              )}
              {!loading && rows.length === 0 && <tr><td colSpan={6} className="py-8 text-center text-on-surface-variant">Tidak ada data yang cocok.</td></tr>}
            </tbody>
          </table>
        </div>
        <div className="p-space-md bg-surface-container-low/20 flex flex-col sm:flex-row items-center justify-between gap-space-sm">
          <span className="font-body-sm text-body-sm text-on-surface-variant">Menampilkan <strong>1-{rows.length}</strong> dari <strong>{total ?? rows.length} KK</strong></span>
          <div className="flex items-center gap-1">
            <button className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface-variant disabled:opacity-50" disabled type="button"><span className="material-symbols-outlined text-[18px]">chevron_left</span></button>
            <button className="px-3 py-1 rounded bg-primary text-on-primary font-bold" type="button">1</button>
            <button className="px-3 py-1 rounded bg-surface-container-lowest hover:bg-surface-container" type="button">2</button>
            <button className="px-3 py-1 rounded bg-surface-container-lowest hover:bg-surface-container" type="button">3</button>
            <span className="px-2 text-on-surface-variant">...</span>
            <button className="px-3 py-1 rounded bg-surface-container-lowest hover:bg-surface-container" type="button">18</button>
            <button className="px-2.5 py-1 rounded bg-surface-container-lowest hover:bg-surface-container" type="button"><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
          </div>
        </div>
      </div>
    </div>
  )
}
