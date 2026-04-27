import { useEffect, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
export function DashboardLayout({ children, onNav }: { children: React.ReactNode; onNav: (page: string) => void }) {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");
  useEffect(() => { document.documentElement.classList.toggle("dark", dark); localStorage.setItem("theme", dark ? "dark" : "light"); }, [dark]);
  return <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100"><div className="flex"><div className="hidden md:block"><Sidebar onNav={onNav}/></div><div className="min-w-0 flex-1"><Topbar dark={dark} setDark={setDark}/><div className="p-4">{children}</div></div></div></div>;
}
