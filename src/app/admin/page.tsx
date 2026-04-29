import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { getAllUsers } from "@/lib/users";
import { getAllBookings } from "@/lib/bookings";
import { getAllDestinations } from "@/lib/destinations";
import Link from "next/link";
import AdminTabs from "./admin-tabs";

export const metadata: Metadata = {
  title: "Admin Dashboard | Wanderlust Travel",
  description: "Manage destinations, bookings, and users.",
};

export default async function AdminPage() {
  const session = await getSession();

  if (!session) {
    redirect("/signin");
  }

  if (session.role !== "admin") {
    redirect("/profile");
  }

  const [users, bookings, destinations] = await Promise.all([
    getAllUsers(),
    Promise.resolve(getAllBookings()),
    Promise.resolve(getAllDestinations()),
  ]);

  const serializedUsers = users.map((u) => ({
    ...u,
    createdAt: u.createdAt.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }),
  }));

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-surface dark:bg-dark-surface py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Welcome back, {session.name}. Here&apos;s your overview.
            </p>
          </div>
          <Link
            href="/profile"
            className="rounded-xl border border-gray-300 dark:border-slate-600 px-5 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
          >
            Back to Profile
          </Link>
        </div>

        <AdminTabs
          users={serializedUsers}
          bookings={bookings}
          destinations={destinations}
        />
      </div>
    </div>
  );
}
