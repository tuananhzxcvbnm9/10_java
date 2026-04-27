import { ArrowDownAZ, ArrowUpAZ } from "lucide-react";
import { useMemo, useState } from "react";
import { usePagination } from "../hooks/usePagination";
export type Row = { id: number; name: string; status: string };
export function DataTable({ rows }: { rows: Row[] }) {
  const [q, setQ] = useState("");
  const [asc, setAsc] = useState(true);
  const filtered = useMemo(() => rows.filter(r => r.name.toLowerCase().includes(q.toLowerCase())).sort((a,b)=> asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)), [rows, q, asc]);
  const { data, page, setPage, pages } = usePagination(filtered, 6);
  return <div className="rounded-xl border bg-white p-4 dark:bg-slate-900"><div className="mb-3 flex gap-2"><input className="w-full rounded-lg border px-3 py-2" placeholder="Search..." value={q} onChange={e=>setQ(e.target.value)} /><button onClick={()=>setAsc(v=>!v)} className="rounded-lg border px-3">{asc ? <ArrowDownAZ size={16}/> : <ArrowUpAZ size={16}/>}</button></div><table className="w-full text-left text-sm"><thead><tr className="text-slate-500"><th>Name</th><th>Status</th></tr></thead><tbody>{data.map(r=><tr key={r.id} className="border-t"><td className="py-2">{r.name}</td><td>{r.status}</td></tr>)}</tbody></table><div className="mt-3 flex items-center justify-end gap-2"><button onClick={()=>setPage(Math.max(1,page-1))} className="rounded border px-2">Prev</button><span>{page}/{pages}</span><button onClick={()=>setPage(Math.min(pages,page+1))} className="rounded border px-2">Next</button></div></div>;
}
