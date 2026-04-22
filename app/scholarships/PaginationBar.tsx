
"use client";

import {useRouter, useSearchParams } from "next/navigation";

export default function PaginationBar({ page, totalPages}: {page: number; totalPages: number;}) {
    const router = useRouter();
    const sp = useSearchParams();

    function go(nextPage: number) {
        const params = new URLSearchParams(sp.toString());
        params.set("page", String(nextPage));
        router.replace(`/scholarships?${params.toString()}`);
    }

    return (
    <div className="flex items-center justify-between py-4">
      <button
        className="btn-outline px-4 py-2 text-sm disabled:opacity-30"
        disabled={page <= 1}
        onClick={() => go(page - 1)}
      >
        Prev
      </button>

      <div className="text-sm" style={{ color: "var(--text-muted)" }}>
        Page {page} of {totalPages}
      </div>

      <button
        className="btn-outline px-4 py-2 text-sm disabled:opacity-30"
        disabled={page >= totalPages}
        onClick={() => go(page + 1)}
      >
        Next
      </button>
    </div>
  );

}

