import { loadUsers } from "@/app/actions";
import { InfiniteListFetch } from "@/app/infinite-list-fetch/InfiniteList";

export default async function Home() {
  const initialData = await loadUsers();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 p-3 bg-gradient-to-r rounded-lg">Infinite List Fetch</h1>
      <InfiniteListFetch initialData={initialData} />
    </div>
  );
}
