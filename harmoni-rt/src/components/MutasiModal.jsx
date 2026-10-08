const options = [
  { value: 'masuk', label: 'Pindah Masuk' },
  { value: 'keluar', label: 'Pindah Keluar' },
  { value: 'kelahiran', label: 'Kelahiran Baru' },
  { value: 'kematian', label: 'Kematian' },
]

export default function MutasiModal({ open, onClose }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 bg-inverse-surface/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-surface-container-lowest w-full max-w-lg rounded-2xl shadow-xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <div className="p-space-md bg-surface-container-low flex items-center justify-between sticky top-0">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[22px]">transfer_within_a_station</span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Pencatatan Mutasi Kependudukan</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-surface-container" type="button">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        <form className="p-space-lg flex flex-col gap-space-md" onSubmit={(e) => { e.preventDefault(); onClose() }}>
          <div className="flex flex-col gap-1">
            <span className="font-label-md text-label-md">Jenis Kejadian Mutasi</span>
            <div className="grid grid-cols-2 gap-2">
              {options.map((o, i) => (
                <label key={o.value} className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container">
                  <input defaultChecked={i === 0} className="accent-primary" name="jenis_mutasi" type="radio" value={o.value} />
                  <span className="font-label-md text-label-md">{o.label}</span>
                </label>
              ))}
            </div>
          </div>
          <label className="flex flex-col gap-1 font-label-md text-label-md">Nama Terkait / Kepala Keluarga
            <input required placeholder="Masukkan nama warga terkait" className="px-3 py-2 bg-surface-container-low rounded-lg font-body-md focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </label>
          <div className="grid grid-cols-2 gap-space-md">
            <label className="flex flex-col gap-1 font-label-md text-label-md">Alamat Blok/No
              <input required placeholder="Blok & No Rumah" className="px-3 py-2 bg-surface-container-low rounded-lg font-body-md focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </label>
            <label className="flex flex-col gap-1 font-label-md text-label-md">Tanggal Efektif Mutasi
              <input required type="date" className="px-3 py-2 bg-surface-container-low rounded-lg font-body-md focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </label>
          </div>
          <label className="flex flex-col gap-1 font-label-md text-label-md">Keterangan / Alasan Mutasi
            <textarea rows={2} placeholder="Nomor surat pengantar atau rincian tambahan..." className="px-3 py-2 bg-surface-container-low rounded-lg font-body-md focus:outline-none focus:ring-2 focus:ring-primary/30" />
          </label>
          <div className="flex items-center justify-end gap-2 pt-2 border-t border-surface-container">
            <button onClick={onClose} className="px-4 py-2 bg-surface-container rounded-lg" type="button">Batal</button>
            <button className="px-5 py-2 bg-primary text-on-primary rounded-lg font-bold" type="submit">Catat Mutasi Sipil</button>
          </div>
        </form>
      </div>
    </div>
  )
}
