export default function KasCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-container text-on-primary p-space-md shadow-md flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed">Saldo Kas RT Saat Ini</span>
            <div className="font-headline-lg text-headline-lg mt-1 tracking-tight">Rp 24.850.000</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container-lowest/15 flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">account_balance_wallet</span>
          </div>
        </div>
        <div className="mt-space-md pt-space-xs flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest/20 text-on-primary font-label-sm text-label-sm">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>Real-time &amp; Terverifikasi
          </span>
          <span className="font-label-sm text-label-sm opacity-90">Buku Kas Okt 2024</span>
        </div>
      </div>
      <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Pemasukan Bulan Ini</span>
            <div className="font-headline-md text-headline-md text-primary mt-1">Rp 6.450.000</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-secondary-container/40 text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">trending_up</span>
          </div>
        </div>
        <div className="mt-space-md flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center text-primary font-label-md bg-secondary-container/30 px-2 py-0.5 rounded-full">
            <span className="material-symbols-outlined text-[16px]">check</span> +12% dari target
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">Kas, Kebersihan, Satpam</span>
        </div>
      </div>
      <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Pengeluaran Bulan Ini</span>
            <div className="font-headline-md text-headline-md text-tertiary mt-1">Rp 3.200.000</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-error-container/40 text-tertiary flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">trending_down</span>
          </div>
        </div>
        <div className="mt-space-md flex items-center gap-2">
          <span className="inline-flex items-center text-tertiary font-label-md bg-tertiary-fixed/40 px-2 py-0.5 rounded-full">3 Pos Utama</span>
          <span className="font-body-sm text-body-sm text-on-surface-variant truncate">Honor Satpam, Sampah, Lampu</span>
        </div>
      </div>
      <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase text-on-surface-variant">Kepatuhan Warga</span>
            <div className="font-headline-md text-headline-md text-on-surface mt-1">86% <span className="font-body-md text-body-md text-on-surface-variant font-normal">(76/88 KK)</span></div>
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container text-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">how_to_reg</span>
          </div>
        </div>
        <div className="mt-space-md">
          <div className="w-full bg-surface-container-highest h-2.5 rounded-full overflow-hidden">
            <div className="bg-primary h-full rounded-full" style={{ width: '86.3%' }}></div>
          </div>
          <div className="flex justify-between items-center mt-1.5 font-label-sm text-label-sm text-on-surface-variant">
            <span>76 Lunas</span><span className="text-tertiary font-bold">12 Belum Lunas</span>
          </div>
        </div>
      </div>
    </div>
  )
}
