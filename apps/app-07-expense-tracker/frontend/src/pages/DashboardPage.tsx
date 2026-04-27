import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { StatCard } from "../components/StatCard";
export function DashboardPage() {
  const data = [{name:"Mon",value:12},{name:"Tue",value:20},{name:"Wed",value:18},{name:"Thu",value:28},{name:"Fri",value:22}];
  return <div className="space-y-4"><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><StatCard title="Revenue" value="$12,450"/><StatCard title="Users" value="1,284"/><StatCard title="Conversion" value="3.8%"/><StatCard title="Errors" value="2"/></div><div className="rounded-xl border bg-white p-4 dark:bg-slate-900"><h3 className="mb-3 font-semibold">Weekly trend</h3><div className="h-64"><ResponsiveContainer width="100%" height="100%"><AreaChart data={data}><defs><linearGradient id="c" x1="0" x2="0" y1="0" y2="1"><stop offset="5%" stopColor="#2563eb" stopOpacity={0.35}/><stop offset="95%" stopColor="#2563eb" stopOpacity={0}/></linearGradient></defs><CartesianGrid strokeDasharray="3 3"/><XAxis dataKey="name"/><Tooltip/><Area type="monotone" dataKey="value" stroke="#2563eb" fill="url(#c)"/></AreaChart></ResponsiveContainer></div></div></div>;
}
