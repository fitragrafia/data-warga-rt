import { kasRows } from '../../dataKeuangan.js'

export default function BukuKasTable() {
  return (
    <div className="rounded-xl bg-surface-container-lowest shadow-sm p-space-md flex flex-col gap-space-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
        <div>
          <h2 className="font-headline-sm text-headline-sm text-on-surface">Buku Kas Mutasi &amp; Nota Transparan</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">Setiap pengeluaran kas wajib diverifikasi nota fisik atau stempel sah bendahara.</p>
        </div>
        <button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high font-label-sm text-label-sm text-on-surface flex items-center gap-1" type="button">
          <span className="material-symbols-outlined text-[16px]">print</span>Cetak Papan Pengumuman
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[820px]">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant font-label-md text-label-md">
              <th className="py-3 px-space-md">Tanggal</th>
              <th className="py-3 px-space-md">Kategori Pos</th>
              <th className="py-3 px-space-md">Deskripsi / Uraian Kegiatan</th>
              <th className="py-3 px-space-md">Arus Kas</th>
              <th className="py-3 px-space-md">Nominal</th>
              <th className="py-3 px-space-md text-right">Lampiran Bukti</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container-low font-body-sm text-body-sm">
            {kasRows.map((k) => (
              <tr key={k.id} className="hover:bg-surface-container-low/50">
                <td className="py-3 px-space-md font-label-md text-label-md whitespace-nowrap">{k.tgl}</td>
                <td className="py-3 px-space-md">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-label-sm text-label-sm whitespace-nowrap ${k.katStyle}`}>{k.kategori}</span>
                </td>
                <td className="py-3 px-space-md">
                  <span className="font-medium text-on-surface">{k.judul}</span>
                  <span className="block font-label-sm text-label-sm text-on-surface-variant">{k.sub}</span>
                </td>
                <td className="py-3 px-space-md">
                  {k.arus === 'Masuk' ? (
                    <span className="font-label-md text-label-md text-primary flex items-center gap-1 font-bold">
                      <span className="material-symbols-outlined text-[16px]">arrow_downward</span>Masuk
                    </span>
                  ) : (
                    <span className="font-label-md text-label-md text-tertiary flex items-center gap-1 font-bold">
                      <span className="material-symbols-outlined text-[16px]">arrow_outward</span>Keluar
                    </span>
                  )}
                </td>
                <td className={`py-3 px-space-md font-label-md text-label-md whitespace-nowrap ${k.arus === 'Masuk' ? 'text-primary' : 'text-tertiary'}`}>{k.nominal}</td>
                <td className="py-3 px-space-md text-right">
                  <button className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-surface-container hover:bg-secondary-container text-primary font-label-sm transition-colors whitespace-nowrap" type="button">
                    <span className="material-symbols-outlined text-[16px]">{k.buktiIcon}</span>{k.bukti}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
