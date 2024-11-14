"use client";

import { Card } from "@/app/components/Card";
import { User } from "@/app/data";
import { useState } from "react";

export function InfiniteListFetch({ initialData }: { initialData: User[] }) {
  const [data, setData] = useState<User[]>(initialData);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = async () => {
    try {
      setIsLoading(true);
      const newPage = page + 1;
      const response = await fetch(`/api/get-users?page=${newPage}`);
      const newUsers = await response.json();

      setPage(newPage);
      setData((prev) => [...prev, ...newUsers]);
    } catch (error) {
      console.error("Failed to load more users:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4 p-3">
        {data.map((user, index) => {
          const currentPage = Math.floor(index / 10) + 1;
          return <Card key={user.id} user={user} position={`Page ${currentPage}`} />;
        })}
      </div>

      <button
        disabled={isLoading}
        onClick={loadMore}
        className="w-full p-2 border border-[#e6e8ec] rounded-lg bg-[#eff1f3] hover:bg-[#e6e8ec] transition-colors"
      >
        {isLoading ? "Loading..." : "Load more"}
      </button>
    </div>
  );
}
