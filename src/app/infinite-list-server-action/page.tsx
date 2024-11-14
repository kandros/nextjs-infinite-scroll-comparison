import { loadUsers } from "@/app/actions";
import { InfiniteList } from "@/app/infinite-list-server-action/InfiniteList";

export default async function Home() {
  const initialData = await loadUsers();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 p-3 bg-gradient-to-r rounded-lg">Infinite List Server Action</h1>
      <InfiniteList initialData={initialData} />
    </div>
  );
}
