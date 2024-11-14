import { getPaginatedUsers } from "@/app/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";

  const users = getPaginatedUsers(Number(page), 10);

  return Response.json(users);
}
