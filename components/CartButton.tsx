"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";

export default function CartButton() {
  const [loading, setLoading] = useState(true);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    // initial check
    (async () => {
      const { data } = await supabaseBrowser.auth.getUser();
      setSignedIn(!!data.user);
      setLoading(false);
    })();

    // stay synced
    const { data: sub } = supabaseBrowser.auth.onAuthStateChange((_event, session) => {
      setSignedIn(!!session?.user);
    });

    return () => sub.subscription.unsubscribe();
  }, []);

  const href = signedIn ? "/saved" : "/auth";

  return (
    <Link
      href={href}
      aria-label="Saved scholarships"
      className="rounded-full px-3 py-2 text-sm font-medium text-emerald-950 flex items-center gap-2" style={{backgroundColor: "var(--accent"}} >
      <span aria-hidden="true" >Cart</span>
      {!loading && signedIn ? "Saved" : ""}
    </Link>
  );
}

{/*🛒*/}
