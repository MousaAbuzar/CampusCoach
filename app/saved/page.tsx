"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/browser";
import ScholarshipsCard from "@/components/ScholarshipsCard";

export default function SavedPage() {
  const router = useRouter();
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data: userData } = await supabaseBrowser.auth.getUser();
      const user = userData.user;

      if (!user) {
        router.push("/auth");
        return;
      }

      const { data, error } = await supabaseBrowser
        .from("saved_scholarships")
        .select(
          `
          created_at,
          scholarship:scholarships (
            id, title, source, level,
            value_text, value_min, value_max,
            url
          )
        `
        )
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
        setItems([]);
        setLoading(false);
        return;
      }

      const saved = (data ?? []).map((r: any) => r.scholarship).filter(Boolean);

      setItems(
        saved.map((s: any) => ({
          id: s.id,
          title: s.title,
          provider: s.source,
          amountText: s.value_text ?? "Amount varies",
          valueMin: s.value_min ?? null,
          valueMax: s.value_max ?? null,
          deadline: "N/A",
          tags: [s.level].filter(Boolean),
          url: s.url,
        }))
      );

      setLoading(false);
    })();
  }, [router]);

  if (loading) return <div className="p-6">Loading saved scholarships…</div>;

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-semibold">Saved Scholarships</h1>

      {items.length === 0 ? (
        <p className="text-zinc-600">No saved scholarships yet.</p>
      ) : (
        <div className="space-y-4">
          {items.map((obj) => (
            <ScholarshipsCard key={obj.id} object={obj} />
          ))}
        </div>
      )}
    </div>
  );
}
