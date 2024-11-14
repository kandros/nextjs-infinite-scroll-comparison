import { loadUsersJSX } from "@/app/actions";
import { InfiniteListJSXScroll } from "@/app/infinite-list-jsx-scroll/infiniteListJSXScroll";

export default async function Home() {
  const initialData = await loadUsersJSX();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 p-3 bg-gradient-to-r rounded-lg">Infinite List JSX Scroll</h1>
      <InfiniteListJSXScroll initialData={initialData} />
    </div>
  );
}
