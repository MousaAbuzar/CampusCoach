"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";

export default function SaveButton({ scholarshipId }: { scholarshipId: string }) {
  const [userId, setUserId] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const { data } = await supabaseBrowser.auth.getUser();
      const uid = data.user?.id ?? null;
      setUserId(uid);

      if (!uid) {
        setLoading(false);
        return;
      }

      const { data: rows } = await supabaseBrowser
        .from("saved_scholarships")
        .select("scholarship_id")
        .eq("user_id", uid)
        .eq("scholarship_id", scholarshipId)
        .limit(1);

      setSaved((rows?.length ?? 0) > 0);
      setLoading(false);
    })();
  }, [scholarshipId]);

async function toggle() {
  if (!userId) {
    router.push("/auth");
    return;
  }

  setLoading(true);

  if (saved) {
    const { error } = await supabaseBrowser
      .from("saved_scholarships")
      .delete()
      .eq("user_id", userId)
      .eq("scholarship_id", scholarshipId);

    if (!error) setSaved(false);
  } else {
    const { error } = await supabaseBrowser
      .from("saved_scholarships")
      .insert({ user_id: userId, scholarship_id: scholarshipId });

    if (!error) setSaved(true);
  }

  setLoading(false);

  // important: makes pages re-fetch if you navigate
  router.refresh();
}




  return (
    
    <button
      type="button"
      className="border rounded px-3 py-1 text-sm disabled:opacity-50"
      onClick={toggle}
      disabled={loading}
    >
      {saved ? "Saved" : "Save"}
    </button>
  );
}
