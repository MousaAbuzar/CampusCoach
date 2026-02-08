import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

function parseMoneyRange(valueText?: string | null): { min: number | null; max: number | null } {
  if (!valueText) return { min: null, max: null };

  const nums =
    valueText.replace(/,/g, "").match(/\d+(\.\d+)?/g)?.map(Number) ?? [];

  if (nums.length === 0) return { min: null, max: null };
  if (nums.length === 1) return { min: nums[0], max: nums[0] };

  return { min: Math.min(...nums), max: Math.max(...nums) };
}


async function main() {
  console.log("URL loaded?", !!process.env.SUPABASE_URL);
  console.log("SERVICE loaded?", !!process.env.SUPABASE_SERVICE_ROLE_KEY);

  // dynamic imports INSIDE async function (allowed)
  const { supabaseAdmin } = await import("../lib/supabase/admin");
  const { parseFeaturedScholarships } = await import("../lib/scrapers/alberta.StudentAid");

  const pageUrl = "https://studentaid.alberta.ca/scholarships/?c=all";
  const baseUrl = "https://studentaid.alberta.ca";

  const res = await fetch(pageUrl, {
    headers: { "User-Agent": "ScholarshipFinderBot/0.1 (+learning project)" },
  });
  if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);

  const html = await res.text();
  const items = parseFeaturedScholarships(html, baseUrl);

  console.log("Scraped:", items.length);

  const rows = items.map((s) => {
  const { min, max } = parseMoneyRange(s.valueText ?? null);

  return {
    source: "alberta-student-aid",
    title: s.title,
    level: s.group ?? null,
    value_text: s.valueText ?? null,
    value_min: min,
    value_max: max,
    requirements_text: s.requirements ?? null,
    url: s.url,
    raw: s,
  };
});


  const { error } = await supabaseAdmin
    .from("scholarships")
    .upsert(rows, { onConflict: "url" });

  if (error) throw error;

  console.log("Upserted:", rows.length);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
