export default function TambahKKModal({ open, onClose }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 bg-inverse-surface/40 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-surface-container-lowest w-full max-w-xl rounded-2xl shadow-xl overflow-hidden max-h-[90vh] overflow-y-auto">
        <div className="p-space-md bg-surface-container-low flex items-center justify-between sticky top-0">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[22px]">group_add</span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Pendaftaran Kartu Keluarga Baru</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-surface-container" type="button">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>
        <form className="p-space-lg flex flex-col gap-space-md" onSubmit={(e) => { e.preventDefault(); onClose() }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            <label className="flex flex-col gap-1 font-label-md text-label-md">Nomor Kartu Keluarga (KK)
              <input required placeholder="16 digit nomor KK" className="px-3 py-2 bg-surface-container-low rounded-lg font-body-md focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </label>
            <label className="flex flex-col gap-1 font-label-md text-label-md">Nama Kepala Keluarga
              <input required placeholder="Sesuai KTP" className="px-3 py-2 bg-surface-container-low rounded-lg font-body-md focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </label>
            <label className="flex flex-col gap-1 font-label-md text-label-md">NIK Kepala Keluarga
              <input required placeholder="16 digit NIK" className="px-3 py-2 bg-surface-container-low rounded-lg font-body-md focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </label>
            <label className="flex flex-col gap-1 font-label-md text-label-md">No. Telepon / WhatsApp
              <input required placeholder="08xxxxxxxxxx" type="tel" className="px-3 py-2 bg-surface-container-low rounded-lg font-body-md focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </label>
            <label className="flex flex-col gap-1 font-label-md text-label-md">Alamat Rumah (Blok / No)
              <input required placeholder="Contoh: Blok B No. 14" className="px-3 py-2 bg-surface-container-low rounded-lg font-body-md focus:outline-none focus:ring-2 focus:ring-primary/30" />
            </label>
            <label className="flex flex-col gap-1 font-label-md text-label-md">Status Tempat Tinggal
              <select className="px-3 py-2 bg-surface-container-low rounded-lg font-body-md">
                <option value="tetap">Warga Tetap (Hak Milik)</option>
                <option value="kontrak">Warga Kontrak / Sewa / Kost</option>
              </select>
            </label>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-label-md text-label-md">Unggah Berkas KK (PDF / JPG)</span>
            <div className="border border-dashed border-outline-variant rounded-lg p-4 text-center cursor-pointer flex flex-col items-center">
              <span className="material-symbols-outlined text-[28px] text-primary mb-1">cloud_upload</span>
              <span className="font-label-sm text-label-sm font-semibold">Tarik file ke sini atau klik untuk memilih</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">Maksimal 5MB (PDF, PNG, JPG)</span>
            </div>
          </div>
          <div className="flex items-center justify-end gap-2 pt-2 border-t border-surface-container">
            <button onClick={onClose} className="px-4 py-2 bg-surface-container rounded-lg" type="button">Batal</button>
            <button className="px-5 py-2 bg-primary text-on-primary rounded-lg font-bold" type="submit">Simpan &amp; Tambah Anggota</button>
          </div>
        </form>
      </div>
    </div>
  )
}
