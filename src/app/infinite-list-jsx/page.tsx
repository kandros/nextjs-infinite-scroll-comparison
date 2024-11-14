import { loadUsersJSX } from "@/app/actions";
import { InfiniteListJSX } from "@/app/infinite-list-jsx/InfiniteListJSX";

export default async function Home() {
  const initialData = await loadUsersJSX();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 p-3 bg-gradient-to-r rounded-lg">Infinite List JSX</h1>
      <InfiniteListJSX initialData={initialData} />
    </div>
  );
}
