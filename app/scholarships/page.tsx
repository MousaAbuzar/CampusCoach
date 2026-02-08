export const dynamic = "force-dynamic";

import PaginationBar from "./PaginationBar";
import ScholarshipsCard from "../../components/ScholarshipsCard";
import FiltersBar from "./FiltersBar";
import { createSupabaseServerClient } from "../../lib/supabase/server";

export default async function Page({
  searchParams,
}: {
  searchParams: { search?: string; source?: string; level?: string; page?: string; min?: string; max?: string };
}) {
  const params = await searchParams;
  console.log("searchParams:", params);
  const supabase = createSupabaseServerClient();

  
const PAGE_SIZE = 20;

const page = Math.max(1, Number(params.page ?? "1"));
const from = (page - 1) * PAGE_SIZE;
const to = from + PAGE_SIZE - 1;


  let q = supabase
    .from("scholarships")
    .select("id, title, level, value_text, requirements_text, url, source, value_min, value_max", { count: "exact" })
    .order("title", { ascending: true })
    .range(from, to);

  if (params.search) {
    q = q.ilike("title", `%${params.search}%`);
  }
  if (params.source) {
    q = q.eq("source", params.source);
  }
  if (params.level) {
    q = q.eq("level", params.level);
  }
const min = params.min ? Number(params.min) : undefined;
const max = params.max ? Number(params.max) : undefined;

if (!Number.isNaN(min) && min !== undefined) {
  // scholarship is eligible if its max is >= min
  q = q.gte("value_max", min);
}
if (!Number.isNaN(max) && max !== undefined) {
  // scholarship is eligible if its min is <= max
  q = q.lte("value_min", max);
}


  const { data, error, count } = await q;

  if (error) return <div className="p-6">Error loading scholarships.</div>;

  const { data: meta, error: metaError } = await supabase
  .from("scholarships")
  .select("source, level");

if (metaError) console.error(metaError);

const sources = Array.from(new Set((meta ?? []).map((m) => m.source))).sort();
const levels = Array.from(
  new Set((meta ?? []).map((m) => m.level).filter(Boolean))
).sort();


  const total = count ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  // adapter to keep your existing card format
  const items = (data ?? []).map((row) => ({
    title: row.title,
    provider: row.source,
    amount: row.value_text ?? "N/A",
    deadline: "N/A",
    tags: [row.level].filter(Boolean),
    url: row.url,
    valueMin: row.value_min ?? null,
    valueMax: row.value_max ?? null,
    amountText: row.value_text ?? "Amount varies",
    id: row.id,
  }));

  


  
  return (
    <div className="p-4 space-y-4">
      <FiltersBar sources={sources} levels={levels} />
      <PaginationBar page={page} totalPages={totalPages} />
      <div className="space-y-4">
        {items.map((obj) => (
          <ScholarshipsCard key={obj.url} object={obj} />
        ))}
        
      </div>
       <PaginationBar page={page} totalPages={totalPages} />
    </div>
  );
}
