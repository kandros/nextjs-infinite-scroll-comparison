import Link from "next/link";

export default async function Home() {
  // const initialData = getPaginatedUsers(1, 10);

  return (
    <div className="flex flex-col gap-4 p-3">
      <Link className="underline" href="/infinite-list-server-action">
        Infinite List Server Action returning data
      </Link>
      <Link className="underline" href="/infinite-list-jsx">
        Infinite List Server Action returning JSX
      </Link>
      <Link className="underline" href="/infinite-list-jsx-scroll">
        Infinite List Server Action returning JSX on scroll
      </Link>

      <Link className="underline" href="/infinite-list-fetch">
        Infinite List with goold old api route
      </Link>
    </div>
  );
}
