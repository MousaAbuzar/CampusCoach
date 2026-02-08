import { createClient } from "@supabase/supabase-js";

export function createSupabaseServerClient() {
    const url = process.env.SUPABASE_URL!;
    const anonKey = process.env.SUPABASE_ANON_KEY!;

    if (!url || !anonKey) {
        throw new Error("Missing SUPABASE_URL or SUPABASE_ANON_KEY in env");
    }

    return createClient(url, anonKey, {
        auth: {persistSession: false},
    });
}