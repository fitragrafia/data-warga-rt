import AppShell from './components/AppShell.jsx'
import KependudukanPage from './pages/KependudukanPage.jsx'
import KeuanganPage from './pages/KeuanganPage.jsx'
import PlaceholderPage from './pages/PlaceholderPage.jsx'
import { useRoute } from './router.js'

export default function App() {
  const [page, navigate] = useRoute()
  return (
    <AppShell page={page} navigate={navigate}>
      {page === 'keuangan' && <KeuanganPage />}
      {page === 'kependudukan' && <KependudukanPage />}
      {page === 'ringkasan' && (
        <PlaceholderPage icon="dashboard" title="Ringkasan RT" desc="Halaman ringkasan dashboard RT 05 belum dibangun. Saat ini modul yang tersedia adalah Kependudukan dan Keuangan." onGo={() => navigate('kependudukan')} />
      )}
      {page === 'surat' && (
        <PlaceholderPage icon="assignment_turned_in" title="Layanan Persuratan" desc="Modul persuratan menyusul (modul 3). Silakan kembali ke modul yang sudah tersedia." onGo={() => navigate('kependudukan')} />
      )}
      {page === 'ronda' && (
        <PlaceholderPage icon="security" title="Jadwal Ronda & Warta" desc="Modul ronda & warta menyusul (modul 4). Silakan kembali ke modul yang sudah tersedia." onGo={() => navigate('kependudukan')} />
      )}
    </AppShell>
  )
}

