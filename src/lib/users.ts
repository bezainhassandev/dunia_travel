import type { User, UserRole } from "@/lib/definitions";
import bcrypt from "bcryptjs";

const users: Map<string, User> = new Map();

async function seedDemoUsers() {
  if (users.size > 0) return;

  const adminPassword = await bcrypt.hash("Admin123!", 10);
  const userPassword = await bcrypt.hash("User1234!", 10);

  const admin: User = {
    id: "admin-001",
    name: "Admin User",
    email: "admin@wanderlust.travel",
    password: adminPassword,
    role: "admin",
    createdAt: new Date("2024-01-01"),
  };

  const demoUser: User = {
    id: "user-001",
    name: "John Traveler",
    email: "john@example.com",
    password: userPassword,
    role: "user",
    createdAt: new Date("2024-06-15"),
  };

  users.set(admin.email, admin);
  users.set(demoUser.email, demoUser);
}

seedDemoUsers();

export async function findUserByEmail(email: string): Promise<User | undefined> {
  await seedDemoUsers();
  return users.get(email);
}

export async function getAllUsers(): Promise<Omit<User, "password">[]> {
  await seedDemoUsers();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return Array.from(users.values()).map(({ password, ...rest }) => rest);
}

export async function createUser(
  name: string,
  email: string,
  password: string,
  role: UserRole = "user"
): Promise<User | null> {
  await seedDemoUsers();

  if (users.has(email)) {
    return null;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user: User = {
    id: `user-${Date.now()}`,
    name,
    email,
    password: hashedPassword,
    role,
    createdAt: new Date(),
  };

  users.set(email, user);
  return user;
}

export async function verifyPassword(
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(plainPassword, hashedPassword);
}
