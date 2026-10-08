import { navItems } from '../data.js'

export default function MobileNav({ open, onClose }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-inverse-surface/40 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute left-0 top-0 h-full w-72 bg-surface-container-lowest shadow-2xl p-space-md flex flex-col gap-space-md overflow-y-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-primary text-on-primary flex items-center justify-center font-extrabold">H</div>
            <span className="font-headline-sm text-headline-sm text-primary">HarmoniRT</span>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-surface-container" type="button" aria-label="Tutup">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex flex-col gap-1">
          {navItems.map((n) => (
            <a
              key={n.path} href="#" onClick={(e) => { e.preventDefault(); onClose() }}
              className={n.active
                ? 'flex items-center gap-3 px-3 py-2.5 bg-primary-container text-on-primary-container font-bold rounded-lg'
                : 'flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low font-label-lg text-label-lg'}
            >
              <span className="material-symbols-outlined text-[20px]">{n.icon}</span>{n.label}
            </a>
          ))}
        </nav>
        <button className="mt-auto w-full flex items-center justify-center gap-2 bg-tertiary-container text-on-tertiary-container py-2.5 rounded-lg font-label-lg text-label-lg" type="button">
          <span className="material-symbols-outlined text-[18px]">e911_emergency</span>Kontak Siaga RT
        </button>
      </div>
    </div>
  )
}
