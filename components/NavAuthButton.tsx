"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/browser";

export default function NavAuthButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    // 1) initial check
    (async () => {
      const { data } = await supabaseBrowser.auth.getUser();
      setSignedIn(!!data.user);
      setLoading(false);
    })();

    // 2) keep in sync when auth changes
    const { data: sub } = supabaseBrowser.auth.onAuthStateChange((_event, session) => {
      setSignedIn(!!session?.user);
    });

    return () => sub.subscription.unsubscribe();
  }, []);

  async function signOut() {
    await supabaseBrowser.auth.signOut();
    // optional: send them somewhere safe
    router.push("/");
    router.refresh();
  }

  if (loading) {
    return (
      <button className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium opacity-60">
        ...
      </button>
    );
  }

  if (!signedIn) {
    return (
      <Link
        href="/auth"
      >
        <p className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-emerald-950 " style={{backgroundColor: "var(--accent)"}} >Sign in</p>
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={signOut}
      className=""
    >
      <p className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-emerald-950 hover:bg-white"
>Sign out</p>
    </button>
  );
}
