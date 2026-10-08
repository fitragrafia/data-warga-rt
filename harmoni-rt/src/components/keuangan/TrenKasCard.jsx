import { trenKas } from '../../dataKeuangan.js'

export default function TrenKasCard() {
  return (
    <div className="lg:col-span-2 rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between">
      <div className="flex items-center justify-between mb-space-sm flex-wrap gap-2">
        <div>
          <h2 className="font-title-md text-title-md text-on-surface">Tren Arus Kas (6 Bulan Terakhir)</h2>
          <p className="font-body-sm text-body-sm text-on-surface-variant">Perbandingan akumulasi pemasukan dan pengeluaran bulanan</p>
        </div>
        <div className="flex items-center gap-3 font-label-sm text-label-sm">
          <div className="flex items-center gap-1.5 text-primary"><span className="w-3 h-3 rounded bg-primary"></span>Pemasukan</div>
          <div className="flex items-center gap-1.5 text-tertiary"><span className="w-3 h-3 rounded bg-tertiary"></span>Pengeluaran</div>
        </div>
      </div>
      <div className="w-full pt-space-md flex items-end gap-3 justify-between px-2">
        {trenKas.map((t) => (
          <div key={t.bulan} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
            <div className="w-full flex items-end justify-center gap-1.5 h-44">
              <div className="w-4 bg-primary rounded-t-sm" style={{ height: `${t.masuk}%` }} title={t.tipIn}></div>
              <div className="w-4 bg-tertiary rounded-t-sm" style={{ height: `${t.keluar}%` }} title={t.tipOut}></div>
            </div>
            <span className={`font-label-sm text-label-sm ${t.aktif ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>{t.bulan}</span>
          </div>
        ))}
      </div>
      <div className="mt-space-md p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between text-on-surface flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[20px]">thumb_up</span>
          <span className="font-label-md text-label-md">Rasio Cadangan Kas: Sehat (Surplus Rp 3.250.000 bulan ini)</span>
        </div>
        <span className="font-label-sm text-label-sm text-secondary">Terakhir Audit: 01 Okt 2024</span>
      </div>
    </div>
  )
}
