
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
        className="border rounded px-3 py-2 disabled:opacity-50"
        disabled={page <= 1}
        onClick={() => go(page - 1)}
      >
        Prev
      </button>

      <div className="text-sm opacity-80">
        Page {page} of {totalPages}
      </div>

      <button
        className="border rounded px-3 py-2 disabled:opacity-50"
        disabled={page >= totalPages}
        onClick={() => go(page + 1)}
      >
        Next
      </button>
    </div>
  );

}

