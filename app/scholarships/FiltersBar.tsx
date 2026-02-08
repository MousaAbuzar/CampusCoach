"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

export default function FiltersBar({
  sources,
  levels,
}: {
  sources: string[];
  levels: string[];
}) {
  const router = useRouter();
  const sp = useSearchParams();

const minParam = sp.get("min") ?? "";
const maxParam = sp.get("max") ?? "";

const [minText, setMinText] = useState(minParam);
const [maxText, setMaxText] = useState(maxParam);

const minNum = minText.trim() === "" ? undefined : Number(minText);
const maxNum = maxText.trim() === "" ? undefined : Number(maxText);

const maxLessThanMin =
  minNum !== undefined &&
  maxNum !== undefined &&
  !Number.isNaN(minNum) &&
  !Number.isNaN(maxNum) &&
  maxNum < minNum;


  const [search, setSearch] = useState(sp.get("search") ?? "");
  const source = sp.get("source") ?? "";
  const level = sp.get("level") ?? "";
  const min = sp.get("min") ?? "";
  const max = sp.get("max") ?? "";



  const qs = useMemo(() => new URLSearchParams(sp.toString()), [sp]);

  function updateParam(key: string, value: string) {
    const next = new URLSearchParams(qs);
    next.delete("page");
    if (!value) next.delete(key);
    else next.set(key, value);
    router.replace(`/scholarships?${next.toString()}`);
  }

  function onSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    updateParam("search", search.trim());
  }

  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-end">
      <form onSubmit={onSearchSubmit} className="flex gap-2">
        <input
          className="border rounded px-3 py-2 w-72"
          placeholder="Search title…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="border rounded px-3 py-2">Search</button>
      </form>

      <div className="flex gap-2">
        <select
          className="border rounded px-3 py-2"
          value={source}
          onChange={(e) => updateParam("source", e.target.value)}
        >
          <option value="">All sources</option>
          {sources.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <select
          className="border rounded px-3 py-2"
          value={level}
          onChange={(e) => updateParam("level", e.target.value)}
        >
          <option value="">All levels</option>
          {levels.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </select>

          <input
  className="border rounded px-3 py-2 w-28"
  placeholder="Min $"
  value={minText}
  onChange={(e) => setMinText(e.target.value)}
  onBlur={() => updateParam("min", minText.trim())}
/>

<input
  className="border rounded px-3 py-2 w-28"
  placeholder="Max $"
  value={maxText}
  onChange={(e) => setMaxText(e.target.value)}
  onBlur={() => updateParam("max", maxText.trim())}
/>
{maxLessThanMin && (
  <p className="text-sm text-red-600">
    Max amount can’t be less than Min amount.
  </p>
)}

      </div>
    </div>
  );
}
