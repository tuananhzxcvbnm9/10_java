import { Navigate } from "react-router-dom";
export function ProtectedRoute({ ok, children }: { ok: boolean; children: JSX.Element }) { return ok ? children : <Navigate to="/login" replace />; }
