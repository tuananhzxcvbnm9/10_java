import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
const schema = z.object({ name: z.string().min(2), status: z.string().min(2) });
type FormValues = z.infer<typeof schema>;
export function CreateEditPage({ onSubmit }: { onSubmit: (v: FormValues) => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { status: "ACTIVE" } });
  return <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl space-y-3 rounded-xl border bg-white p-4 dark:bg-slate-900"><div><label className="text-sm">Name</label><input {...register("name")} className="mt-1 w-full rounded-lg border px-3 py-2" />{errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}</div><div><label className="text-sm">Status</label><input {...register("status")} className="mt-1 w-full rounded-lg border px-3 py-2" />{errors.status && <p className="text-xs text-red-500">{errors.status.message}</p>}</div><button className="rounded-lg bg-blue-600 px-4 py-2 text-white" type="submit">Save</button></form>;
}
