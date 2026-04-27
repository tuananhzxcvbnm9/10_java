export function ConfirmDialog({ open, onConfirm, onCancel }: { open: boolean; onConfirm: () => void; onCancel: () => void }) {
  if (!open) return null;
  return <div className="fixed inset-0 z-50 grid place-items-center bg-black/40"><div className="w-full max-w-sm rounded-xl bg-white p-6 dark:bg-slate-900"><h3 className="font-semibold">Confirm delete</h3><p className="mt-2 text-sm text-slate-500">This action cannot be undone.</p><div className="mt-4 flex justify-end gap-2"><button onClick={onCancel} className="rounded-lg border px-3 py-2">Cancel</button><button onClick={onConfirm} className="rounded-lg bg-red-600 px-3 py-2 text-white">Delete</button></div></div></div>;
}
