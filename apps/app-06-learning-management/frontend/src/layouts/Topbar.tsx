import { Moon, Search, Sun, UserCircle2 } from "lucide-react";
export function Topbar({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
  return <header className="sticky top-0 z-20 flex items-center justify-between border-b bg-white/90 px-4 py-3 backdrop-blur dark:bg-slate-950/90"><div className="flex items-center gap-2 rounded-lg border px-3 py-2"><Search size={14}/><input placeholder="Search..." className="bg-transparent outline-none"/></div><div className="flex items-center gap-2"><button onClick={()=>setDark(!dark)} className="rounded-lg border p-2">{dark ? <Sun size={16}/> : <Moon size={16}/>}</button><button className="rounded-lg border p-2"><UserCircle2 size={18}/></button></div></header>;
}
