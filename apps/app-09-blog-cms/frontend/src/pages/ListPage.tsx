import { DataTable, Row } from "../components/DataTable";
import { EmptyState } from "../components/EmptyState";
import { ErrorState } from "../components/ErrorState";
import { LoadingSkeleton } from "../components/LoadingSkeleton";
export function ListPage({ rows, loading, error }: { rows: Row[]; loading: boolean; error: string | null }) {
  if (loading) return <LoadingSkeleton />;
  if (error) return <ErrorState message={error} />;
  if (!rows.length) return <EmptyState message="No records yet." />;
  return <DataTable rows={rows} />;
}
