export default function Header({ onMenu }) {
  return (
    <header className="fixed top-0 left-0 lg:left-64 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg">
      <div className="flex items-center gap-space-md">
        <button onClick={onMenu} className="lg:hidden p-2 -ml-2 text-on-surface-variant hover:text-on-surface rounded-full hover:bg-surface-container" type="button" aria-label="Menu">
          <span className="material-symbols-outlined text-[22px]">menu</span>
        </button>
        <span className="font-label-sm text-label-sm bg-surface-container text-on-surface px-space-md py-1 rounded-full truncate max-w-[60vw]">
          Lingkungan Aktif: RT 05 / RW 08 Kel. Sukamaju
        </span>
      </div>
      <div className="flex items-center gap-space-md">
        <button className="p-2 text-on-surface-variant hover:text-on-surface rounded-full hover:bg-surface-container relative" type="button" aria-label="Notifikasi">
          <span className="material-symbols-outlined text-[22px]">notifications</span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-tertiary rounded-full"></span>
        </button>
        <button className="p-2 text-on-surface-variant hover:text-on-surface rounded-full hover:bg-surface-container" type="button" aria-label="Bantuan">
          <span className="material-symbols-outlined text-[22px]">help</span>
        </button>
      </div>
    </header>
  )
}
