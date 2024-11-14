import { faker } from "@faker-js/faker";

export interface User {
  id: string;
  name: string;
  avatar: string;
}

export function generateUsers(count: number): User[] {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
  }));
}

const allUsers = generateUsers(100);
export function getPaginatedUsers(page: number = 1, pageSize: number = 10): User[] {
  // Generate a fixed set of users for consistency

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedUsers = allUsers.slice(startIndex, endIndex);

  return paginatedUsers;
}
