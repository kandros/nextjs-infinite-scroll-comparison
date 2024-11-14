"use client";

import { loadUsersJSX } from "@/app/actions";
import { CardProps } from "@/app/components/Card";
import { ReactElement, useEffect, useState, useTransition } from "react";
import { useInView } from "react-intersection-observer";

export function InfiniteListJSXScroll({ initialData }: { initialData: ReactElement<CardProps>[] }) {
  const [data, setData] = useState<ReactElement<CardProps>[]>(initialData);
  const [page, setPage] = useState(1);
  const [isLoading, startTransition] = useTransition();
  const [done, setDone] = useState(false);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      startTransition(async () => {
        const newPage = page + 1;
        setPage(newPage);
        const newData = await loadUsersJSX(newPage);
        if (newData.length === 0) {
          setDone(true);
        } else {
          setData((prev) => [...prev, ...newData]);
        }
      });
    }
  }, [inView]);

  return (
    <div>
      <div className="flex flex-col gap-4 p-3">{data}</div>

      {done ? (
        <div className="text-center text-gray-500">No more users</div>
      ) : (
        <div className="h-10 bg-red-500" ref={ref}>
          {isLoading ? "Loading..." : "Load more"}
        </div>
      )}
    </div>
  );
}
