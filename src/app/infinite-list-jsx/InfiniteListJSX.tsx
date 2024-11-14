"use client";

import { loadUsersJSX } from "@/app/actions";
import { ReactElement, useState, useTransition } from "react";
import { CardProps } from "@/app/components/Card";

export function InfiniteListJSX({ initialData }: { initialData: ReactElement<CardProps>[] }) {
  const [data, setData] = useState<ReactElement<CardProps>[]>(initialData);
  const [page, setPage] = useState(1);
  const [isLoading, startTransition] = useTransition();

  return (
    <div>
      <div className="flex flex-col gap-4 p-3">{data}</div>

      <button
        disabled={isLoading}
        onClick={() => {
          startTransition(async () => {
            const newPage = page + 1;
            setPage(newPage);
            const newData = await loadUsersJSX(newPage);
            setData((prev) => [...prev, ...newData]);
          });
        }}
        className="w-full p-2 border border-[#e6e8ec] rounded-lg bg-[#eff1f3]"
      >
        {isLoading ? "Loading..." : "Load more"}
      </button>
    </div>
  );
}
