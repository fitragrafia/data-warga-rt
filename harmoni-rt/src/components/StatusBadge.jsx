export default function StatusBadge({ status }) {
  if (status === 'Tetap') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">
        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
        Warga Tetap
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-tertiary font-label-sm text-label-sm font-bold">
      <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
      Kontrak / Sewa
    </span>
  )
}
