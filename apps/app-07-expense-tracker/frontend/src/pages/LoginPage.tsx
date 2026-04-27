export function LoginPage({ onLogin }: { onLogin: () => void }) {
  return <main className="grid min-h-screen place-items-center bg-slate-100 p-4 dark:bg-slate-950"><div className="w-full max-w-sm rounded-xl border bg-white p-6 dark:bg-slate-900"><h1 className="text-xl font-semibold">Welcome back</h1><p className="mt-1 text-sm text-slate-500">Demo login for dashboard shell.</p><button className="mt-4 w-full rounded-lg bg-blue-600 px-4 py-2 text-white" onClick={onLogin}>Sign in</button></div></main>;
}
