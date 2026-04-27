import { useState } from "react";
import { Toaster, toast } from "sonner";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage";
import { ListPage } from "./pages/ListPage";
import { CreateEditPage } from "./pages/CreateEditPage";
import { DetailPage } from "./pages/DetailPage";
import { useAuth } from "./hooks/useAuth";
import { domainApi, type DomainItem } from "./api/domain.api";
import { ConfirmDialog } from "./components/ConfirmDialog";
import { PageHeader } from "./components/PageHeader";
import { APP_NAME } from "./lib/constants";

export default function App() {
  const { isAuthenticated, login } = useAuth();
  const [page, setPage] = useState("dashboard");
  const [rows, setRows] = useState<DomainItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [confirm, setConfirm] = useState(false);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      setRows(await domainApi.list());
    } catch {
      setError("Cannot load data from backend API.");
    } finally {
      setLoading(false);
    }
  };

  const createItem = async (v: { name: string; status: string }) => {
    try {
      await domainApi.create(v);
      toast.success("Saved successfully");
      setPage("list");
      load();
    } catch {
      toast.error("Save failed");
    }
  };

  const content =
    page === "dashboard" ? <DashboardPage /> :
    page === "list" ? <ListPage rows={rows} loading={loading} error={error} /> :
    page === "create" ? <CreateEditPage onSubmit={createItem} /> :
    <DetailPage />;

  return (
    <BrowserRouter>
      <Toaster richColors position="top-right" />
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={login} />} />
        <Route
          path="*"
          element={
            isAuthenticated ? (
              <DashboardLayout
                onNav={(p) => {
                  setPage(p);
                  if (p === "list") load();
                }}
              >
                <div className="space-y-4">
                  <PageHeader title={APP_NAME} subtitle="Modern SaaS dashboard UI" />
                  {content}
                  <button className="rounded border px-3 py-2" onClick={() => setConfirm(true)}>
                    Delete sample item
                  </button>
                  <ConfirmDialog
                    open={confirm}
                    onCancel={() => setConfirm(false)}
                    onConfirm={() => {
                      setConfirm(false);
                      toast.success("Deleted");
                    }}
                  />
                </div>
              </DashboardLayout>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
