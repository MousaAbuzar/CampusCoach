"use client";

import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  async function signUp() {
    setMsg(null);
    const { error } = await supabaseBrowser.auth.signUp({ email, password });
    if (error) setMsg(error.message);
    else setMsg("Signed up! You can now sign in.");
  }

  async function signIn() {
    setMsg(null);
    const { error } = await supabaseBrowser.auth.signInWithPassword({ email, password });
    if (error) setMsg(error.message);
    else router.push("/scholarships");
  }

  return (
    <div className="max-w-sm mx-auto p-6 space-y-3">
      <h1 className="text-2xl font-semibold">Account</h1>

      <input
        className="border rounded w-full px-3 py-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="border rounded w-full px-3 py-2"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="flex gap-2">
        <button className="border rounded px-3 py-2" onClick={signIn}>Sign in</button>
        <button className="border rounded px-3 py-2" onClick={signUp}>Sign up</button>
      </div>

      {msg && <p className="text-sm">{msg}</p>}
    </div>
  );
}

