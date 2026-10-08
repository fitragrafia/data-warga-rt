import { useState } from 'react'
import Sidebar from './Sidebar.jsx'
import Header from './Header.jsx'
import MobileNav from './MobileNav.jsx'

export default function AppShell({ page, navigate, children }) {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <div className="bg-background font-body-md text-on-surface antialiased min-h-screen">
      <Sidebar page={page} navigate={navigate} />
      <MobileNav open={navOpen} onClose={() => setNavOpen(false)} page={page} navigate={navigate} />
      <div className="pl-0 lg:pl-64">
        <Header onMenu={() => setNavOpen(true)} />
        <main className="relative pt-16 bg-background min-h-screen">
          <div className="p-space-lg lg:p-margin flex flex-col gap-space-lg max-w-[1440px] mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
