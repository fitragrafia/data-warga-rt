import { navItems } from '../data.js'

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 hidden lg:flex flex-col justify-between py-space-md">
      <div className="flex flex-col">
        <div className="px-space-md pb-space-lg flex items-center gap-space-sm">
          <div className="h-9 w-9 rounded-xl bg-primary text-on-primary flex items-center justify-center font-headline-sm text-headline-sm font-extrabold">H</div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary tracking-tight">HarmoniRT</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Sistem Mandiri RT 05</span>
          </div>
        </div>
        <div className="px-space-md mb-space-sm">
          <div className="bg-surface-container px-space-sm py-2 rounded-lg flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-on-surface-variant">Kas RT</span>
            <span className="font-label-md text-label-md text-primary font-bold">Rp 18.450.000</span>
          </div>
        </div>
        <nav className="flex flex-col gap-1 px-space-sm">
          {navItems.map((n) => (
            <a
              key={n.path}
              aria-current={n.active ? 'page' : undefined}
              href="#"
              onClick={(e) => e.preventDefault()}
              className={
                n.active
                  ? 'flex items-center gap-space-sm px-space-sm py-2.5 transition-colors bg-primary-container text-on-primary-container font-bold rounded-lg'
                  : 'flex items-center gap-space-sm px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors font-label-lg text-label-lg'
              }
            >
              <span className="material-symbols-outlined text-[20px]">{n.icon}</span>
              {n.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="px-space-md flex flex-col gap-space-sm">
        <button className="w-full flex items-center justify-center gap-2 bg-tertiary-container text-on-tertiary-container py-2.5 rounded-lg font-label-lg text-label-lg shadow-sm hover:opacity-95 transition-opacity" type="button">
          <span className="material-symbols-outlined text-[18px]">e911_emergency</span>
          Kontak Siaga RT
        </button>
        <div className="flex items-center gap-space-sm pt-space-xs">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
          <div className="flex flex-col text-left overflow-hidden">
            <span className="font-label-md text-label-md text-on-surface truncate">Bambang S.</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Admin RT 05</span>
          </div>
        </div>
      </div>
    </aside>
  )
}
