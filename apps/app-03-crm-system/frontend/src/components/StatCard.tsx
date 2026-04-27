export function StatCard({ title, value }: { title: string; value: string | number }) {
  return <div className="rounded-xl border bg-white p-4 shadow-sm dark:bg-slate-900"><p className="text-xs text-slate-500">{title}</p><p className="mt-1 text-2xl font-semibold">{value}</p></div>;
}
