import { mutasiLogs } from '../data2.js'

export default function MutasiSidebar({ onMutasi }) {
  return (
    <div className="lg:col-span-4 flex flex-col gap-space-md">
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col">
        <div className="flex items-center justify-between pb-space-sm border-b border-surface-container-low">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-tertiary">history_edu</span>
            <h3 className="font-title-sm text-title-sm text-on-surface">Mutasi Kependudukan</h3>
          </div>
          <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-secondary-container text-on-secondary-container">Bulan Ini</span>
        </div>
        <div className="flex flex-col gap-space-md mt-space-md">
          {mutasiLogs.map((m) => (
            <div key={m.judul} className={`flex items-start gap-3 ${m.dim ? 'opacity-80' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.circle}`}>
                <span className="material-symbols-outlined text-[18px]">{m.icon}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className={`font-label-md text-label-md font-bold ${m.jenisColor}`}>{m.jenis}</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">{m.tanggal}</span>
                </div>
                <div className="font-title-sm text-title-sm text-on-surface font-semibold mt-0.5">{m.judul}</div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{m.deskripsi}</p>
                {m.statusText && (
                  <div className="mt-2 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary">
                      <span className="material-symbols-outlined text-[14px]">{m.statusIcon}</span>{m.statusText}
                    </span>
                  </div>
                )}
                {m.keterangan && <div className="mt-2"><span className="font-label-sm text-label-sm text-on-surface-variant">{m.keterangan}</span></div>}
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-space-md py-2 text-center text-primary hover:bg-surface-container-low font-label-md text-label-md rounded-lg transition-colors" type="button">
          Lihat Arsip Riwayat Mutasi (34)
        </button>
      </div>
      <div className="bg-surface-container-high/40 p-space-md rounded-xl shadow-sm flex flex-col">
        <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center mb-3">
          <span className="material-symbols-outlined text-[24px]">how_to_reg</span>
        </div>
        <h4 className="font-headline-sm text-headline-sm text-on-surface">Validasi Lapor Mutasi Mandiri</h4>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          Warga dapat mengunggah bukti surat pindah langsung via portal. Ada <strong>1 laporan warga</strong> menunggu validasi.
        </p>
        <div className="mt-space-md p-3 rounded-lg bg-surface-container-lowest flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></div>
            <div>
              <div className="font-label-md text-label-md text-on-surface font-bold">Bayu Anggoro (Blok B-08)</div>
              <div className="font-label-sm text-label-sm text-on-surface-variant">Lapor Perubahan Anggota KK</div>
            </div>
          </div>
          <button className="px-2.5 py-1 bg-primary text-on-primary rounded text-[11px] font-bold" type="button">Tinjau</button>
        </div>
        <div className="mt-space-md pt-space-sm border-t border-surface-container">
          <button onClick={onMutasi} className="w-full py-2.5 bg-primary text-on-primary rounded-lg font-label-md font-bold flex items-center justify-center gap-2" type="button">
            <span className="material-symbols-outlined text-[18px]">add_circle</span>Input Laporan Mutasi Baru
          </button>
        </div>
      </div>
      <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-start gap-3">
        <span className="material-symbols-outlined text-primary text-[24px]">support_agent</span>
        <div>
          <h5 className="font-title-sm text-title-sm text-on-surface">Kerahasiaan Data Sipil Warga</h5>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">NIK disamarkan untuk akses publik dan dilindungi sesuai UU PDP.</p>
        </div>
      </div>
    </div>
  )
}
