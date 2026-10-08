import MemberCard from './MemberCard.jsx'

export default function FamilyDrawer({ family, onClose }) {
  if (!family) return null
  const isTetap = family.status === 'Tetap'
  return (
    <div className="fixed inset-0 z-50 bg-inverse-surface/40 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-2xl bg-surface-container-lowest h-full shadow-2xl flex flex-col overflow-y-auto">
        <div className="p-space-lg bg-surface-container-low flex items-center justify-between sticky top-0 z-10">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`px-2 py-0.5 rounded-full font-label-sm font-bold ${isTetap ? 'bg-secondary-container text-on-secondary-container' : 'bg-surface-container-high text-tertiary'}`}>
                {isTetap ? 'Warga Tetap' : 'Warga Kontrak / Sewa'}
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">No. KK: {family.kk}</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface mt-1">{family.kepala}</h2>
            <div className="flex items-center gap-1 text-on-surface-variant mt-0.5">
              <span className="material-symbols-outlined text-[16px]">home</span>{family.blok}, RT 05 / RW 08
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-surface-container" type="button">
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>
        <div className="p-space-lg flex flex-col gap-space-md">
          <div className="flex items-center justify-between">
            <h3 className="font-title-md text-title-md text-on-surface">Anggota Keluarga ({family.anggota} Jiwa)</h3>
            <button className="text-primary font-bold flex items-center gap-1" type="button">
              <span className="material-symbols-outlined text-[16px]">person_add</span>Tambah Anggota
            </button>
          </div>
          {family.detail.map((m) => <MemberCard key={m.nik} m={m} />)}
          <div className="p-space-md rounded-xl border border-surface-container">
            <div className="flex items-center justify-between">
              <span className="font-label-md font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">folder</span>Dokumen Digital Terlampir
              </span>
              <button className="text-primary hover:underline" type="button">Unduh Semua</button>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-3">
              <div className="p-2 bg-surface-container-low rounded-lg flex items-center justify-between">
                <span className="truncate">Scan_Kartu_Keluarga.pdf</span>
                <span className="material-symbols-outlined text-primary">visibility</span>
              </div>
              <div className="p-2 bg-surface-container-low rounded-lg flex items-center justify-between">
                <span className="truncate">KTP_Kepala_Keluarga.jpg</span>
                <span className="material-symbols-outlined text-primary">visibility</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-space-md bg-surface-container-low flex items-center justify-between sticky bottom-0 flex-wrap gap-2">
          <button className="px-4 py-2 bg-surface-container rounded-lg flex items-center gap-1.5" type="button">
            <span className="material-symbols-outlined text-[18px]">print</span>Cetak Surat Pengantar
          </button>
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="px-4 py-2 bg-surface-container-lowest rounded-lg" type="button">Tutup</button>
            <button className="px-4 py-2 bg-primary text-on-primary rounded-lg flex items-center gap-1.5" type="button">
              <span className="material-symbols-outlined text-[18px]">edit_note</span>Perbarui KK
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
