import { useMemo, useState } from 'react'
import KasCards from '../components/keuangan/KasCards.jsx'
import IuranTable from '../components/keuangan/IuranTable.jsx'
import AlokasiCard from '../components/keuangan/AlokasiCard.jsx'
import TrenKasCard from '../components/keuangan/TrenKasCard.jsx'
import BukuKasTable from '../components/keuangan/BukuKasTable.jsx'
import InfoCards from '../components/keuangan/InfoCards.jsx'
import CatatModal from '../components/keuangan/CatatModal.jsx'
import { iuranRows } from '../dataKeuangan.js'

function statusGroup(s) {
  if (s === 'Lunas' || s === 'Advance') return 'Lunas'
  return 'Belum'
}

export default function KeuanganPage() {
  const [tab, setTab] = useState('pencatatan')
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('all')
  const [blok, setBlok] = useState('all')
  const [showCatat, setShowCatat] = useState(false)
  const [toast, setToast] = useState('')

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase()
    return iuranRows.filter((r) => {
      if (status !== 'all' && statusGroup(r.status) !== status) return false
      if (blok !== 'all' && r.blokKey !== blok) return false
      if (!q) return true
      return `${r.kepala} ${r.blok} ${r.jalan}`.toLowerCase().includes(q)
    })
  }, [query, status, blok])

  const remind = (r) => {
    setToast(`Pesan pengingat dikirim ke WhatsApp ${r.kepala} (${r.blok})`)
    window.clearTimeout(window.__toastT)
    window.__toastT = window.setTimeout(() => setToast(''), 3200)
  }

  const tabBtn = (active) => active
    ? 'flex-1 py-2.5 px-4 rounded-lg font-label-lg text-label-lg transition-all flex items-center justify-center gap-2 bg-primary text-on-primary shadow-sm'
    : 'flex-1 py-2.5 px-4 rounded-lg font-label-lg text-label-lg transition-all flex items-center justify-center gap-2 text-on-surface-variant hover:bg-surface-container hover:text-on-surface'

  return (
    <div className="flex flex-col gap-space-lg">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
        <div className="flex flex-col">
          <div className="flex items-center gap-space-xs text-secondary mb-1">
            <span className="material-symbols-outlined text-[18px]">verified_user</span>
            <span className="font-label-md text-label-md tracking-wider uppercase">Buku Besar Transparan RT 05 / RW 08</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Pengelolaan Kas &amp; Iuran Warga</h1>
          <p className="font-body-md text-body-md text-on-surface-variant">Sistem akuntabilitas mandiri warga untuk lingkungan yang aman, bersih, dan berdaya.</p>
        </div>
        <div className="flex items-center gap-space-sm flex-wrap">
          <button className="flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-colors shadow-sm" type="button">
            <span className="material-symbols-outlined text-[20px]">file_download</span>Unduh Laporan Keuangan
          </button>
          <button onClick={() => setShowCatat(true)} className="flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg transition-all shadow-md" type="button">
            <span className="material-symbols-outlined text-[20px]">add_circle</span>Catat Pembayaran Masuk
          </button>
        </div>
      </div>
      <KasCards />
      <div className="rounded-xl bg-surface-container-lowest shadow-sm p-2 flex items-center gap-2 flex-col sm:flex-row">
        <button onClick={() => setTab('pencatatan')} className={tabBtn(tab === 'pencatatan')} type="button">
          <span className="material-symbols-outlined text-[20px]">checklist</span>Pencatatan Iuran Bulanan Warga
        </button>
        <button onClick={() => setTab('transparansi')} className={tabBtn(tab === 'transparansi')} type="button">
          <span className="material-symbols-outlined text-[20px]">public</span>Laporan Transparansi Kas Publik
        </button>
      </div>
      {tab === 'pencatatan' ? (
        <IuranTable rows={rows} query={query} setQuery={setQuery} status={status} setStatus={setStatus} blok={blok} setBlok={setBlok} onRemind={remind} />
      ) : (
        <div className="flex flex-col gap-space-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-md">
            <AlokasiCard />
            <TrenKasCard />
          </div>
          <BukuKasTable />
          <InfoCards />
        </div>
      )}
      <CatatModal open={showCatat} onClose={() => setShowCatat(false)} />
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-lg bg-inverse-surface text-inverse-on-surface font-label-md text-label-md shadow-xl flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">check_circle</span>{toast}
        </div>
      )}
    </div>
  )
}
