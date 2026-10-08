import { useCallback, useEffect, useState } from 'react'

export const routes = ['/', '/kependudukan', '/keuangan', '/surat', '/ronda']

export function pathToPage(pathname) {
  if (pathname === '/keuangan') return 'keuangan'
  if (pathname === '/surat') return 'surat'
  if (pathname === '/ronda') return 'ronda'
  if (pathname === '/') return 'ringkasan'
  return 'kependudukan'
}

export function pageToPath(page) {
  if (page === 'keuangan') return '/keuangan'
  if (page === 'surat') return '/surat'
  if (page === 'ronda') return '/ronda'
  if (page === 'ringkasan') return '/'
  return '/kependudukan'
}

export function useRoute() {
  const [page, setPage] = useState(() =>
    typeof window !== 'undefined' ? pathToPage(window.location.pathname) : 'kependudukan'
  )
  useEffect(() => {
    const onPop = () => setPage(pathToPage(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  const navigate = useCallback((next) => {
    const path = pageToPath(next)
    if (window.location.pathname !== path) window.history.pushState({}, '', path)
    setPage(next)
    window.scrollTo(0, 0)
  }, [])
  return [page, navigate]
}
