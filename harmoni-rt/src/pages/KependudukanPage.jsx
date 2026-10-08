import { useMemo, useState } from 'react'
import MetricCards from '../components/MetricCards.jsx'
import KeluargaTable from '../components/KeluargaTable.jsx'
import AgeChart from '../components/AgeChart.jsx'
import MutasiSidebar from '../components/MutasiSidebar.jsx'
import FamilyDrawer from '../components/FamilyDrawer.jsx'
import TambahKKModal from '../components/TambahKKModal.jsx'
import MutasiModal from '../components/MutasiModal.jsx'
import { families } from '../data.js'

export default function KependudukanPage() {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState('all')
  const [blok, setBlok] = useState('all')
  const [selected, setSelected] = useState(null)
  const [showKK, setShowKK] = useState(false)
  const [showMutasi, setShowMutasi] = useState(false)

  const rows = useMemo(() => {
    const q = search.trim().toLowerCase()
    return families.filter((f) => {
      if (status !== 'all' && f.status !== status) return false
      if (blok !== 'all' && f.blokKey !== blok) return false
      if (!q) return true
      return `${f.kepala} ${f.nik} ${f.kk} ${f.blok}`.toLowerCase().includes(q)
    })
  }, [search, status, blok])

  return (
    <div className="flex flex-col gap-space-lg">
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
        <div>
          <div className="flex items-center gap-space-xs text-primary font-label-md uppercase tracking-wider mb-1">
            <span className="material-symbols-outlined text-[18px]">verified_user</span>
            <span>Buku Induk Kependudukan Mandiri</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg tracking-tight">Data Induk Kependudukan &amp; KK</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">Pengelolaan administrasi sipil terverifikasi warga RT 05 / RW 08 Kelurahan Sukamaju</p>
        </div>
        <div className="flex flex-wrap items-center gap-space-sm">
          <button className="px-space-md py-2.5 bg-surface-container-low hover:bg-surface-container rounded-lg font-label-lg flex items-center gap-2 shadow-sm" type="button">
            <span className="material-symbols-outlined text-[20px] text-primary">download</span>Ekspor Data Sipil
          </button>
          <button onClick={() => setShowMutasi(true)} className="px-space-md py-2.5 bg-secondary-container text-on-secondary-container hover:bg-secondary-fixed-dim rounded-lg font-label-lg flex items-center gap-2 shadow-sm" type="button">
            <span className="material-symbols-outlined text-[20px]">transfer_within_a_station</span>Lapor Mutasi
          </button>
          <button onClick={() => setShowKK(true)} className="px-space-lg py-2.5 bg-primary text-on-primary hover:bg-primary-container rounded-lg font-label-lg flex items-center gap-2 shadow-md" type="button">
            <span className="material-symbols-outlined text-[20px]">group_add</span>+ Tambah KK / Warga
          </button>
        </div>
      </div>
      <MetricCards />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
        <div className="lg:col-span-8 flex flex-col gap-space-md">
          <KeluargaTable rows={rows} search={search} setSearch={setSearch} status={status} setStatus={setStatus} blok={blok} setBlok={setBlok} onDetail={setSelected} />
          <AgeChart />
        </div>
        <MutasiSidebar onMutasi={() => setShowMutasi(true)} />
      </div>
      <FamilyDrawer family={selected} onClose={() => setSelected(null)} />
      <TambahKKModal open={showKK} onClose={() => setShowKK(false)} />
      <MutasiModal open={showMutasi} onClose={() => setShowMutasi(false)} />
    </div>
  )
}
