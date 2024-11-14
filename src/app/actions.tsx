"use server";

import { Card } from "@/app/components/Card";
import { getPaginatedUsers } from "@/app/data";

export async function loadUsers(page: number = 1, pageSize: number = 10) {
  return getPaginatedUsers(page, pageSize);
}

export async function loadUsersJSX(page: number = 1, pageSize: number = 10) {
  const users = getPaginatedUsers(page, pageSize);
  return users.map((user) => <Card key={user.id} user={user} position={`page ${page}`} />);
}
