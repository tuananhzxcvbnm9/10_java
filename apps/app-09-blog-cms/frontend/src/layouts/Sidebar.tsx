import { LayoutDashboard, Table2, SquarePlus } from "lucide-react";
export function Sidebar({ onNav }: { onNav: (page: string) => void }) {
  const item = "flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800";
  return <aside className="w-64 border-r bg-white p-3 dark:bg-slate-900"><button className={item} onClick={()=>onNav("dashboard")}><LayoutDashboard size={16}/>Dashboard</button><button className={item} onClick={()=>onNav("list")}><Table2 size={16}/>Data</button><button className={item} onClick={()=>onNav("create")}><SquarePlus size={16}/>Create</button></aside>;
}
