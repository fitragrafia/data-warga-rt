export default function PlaceholderPage({ title, desc, icon, onGo }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col items-center text-center gap-space-sm">
      <span className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary">
        <span className="material-symbols-outlined text-[28px]">{icon}</span>
      </span>
      <h2 className="font-headline-sm text-headline-sm text-on-surface">{title}</h2>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-md">{desc}</p>
      <button onClick={onGo} className="mt-2 px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md" type="button">
        Kembali ke Data Kependudukan
      </button>
    </div>
  )
}
