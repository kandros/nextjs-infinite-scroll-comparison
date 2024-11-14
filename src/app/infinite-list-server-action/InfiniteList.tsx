"use client";

import { loadUsers } from "@/app/actions";
import { Card } from "@/app/components/Card";
import { User } from "@/app/data";
import { useState, useTransition } from "react";

export function InfiniteList({ initialData }: { initialData: User[] }) {
  const [data, setData] = useState<User[]>(initialData);
  const [page, setPage] = useState(1);
  const [isLoading, startTransition] = useTransition();

  return (
    <div>
      <div className="flex flex-col gap-4 p-3">
        {data.map((user) => {
          return <Card key={user.id} user={user} position={`page ${page}`} />;
        })}
      </div>

      <button
        disabled={isLoading}
        onClick={() => {
          startTransition(async () => {
            const newPage = page + 1;
            setPage(newPage);
            const newData = await loadUsers(newPage);
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
