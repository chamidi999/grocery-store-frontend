export const EmptyState = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-200 bg-white p-10 text-center">
    <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
    {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
  </div>
)
