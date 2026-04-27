import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin Dashboard | Wanderlust Travel",
  description: "Manage destinations, bookings, and users.",
};

const recentBookings = [
  { id: "BK-001", user: "Sarah M.", destination: "Santorini, Greece", date: "2026-08-15", status: "Confirmed", amount: "$1,299" },
  { id: "BK-002", user: "James L.", destination: "Bali, Indonesia", date: "2026-09-01", status: "Pending", amount: "$899" },
  { id: "BK-003", user: "Emma K.", destination: "Swiss Alps", date: "2026-10-05", status: "Confirmed", amount: "$1,599" },
  { id: "BK-004", user: "Carlos R.", destination: "Maldives", date: "2026-11-20", status: "Cancelled", amount: "$2,199" },
  { id: "BK-005", user: "Aisha B.", destination: "Kyoto, Japan", date: "2026-12-01", status: "Pending", amount: "$1,450" },
];

const dashboardStats = [
  { label: "Total Bookings", value: "1,247", change: "+12%", icon: "📋" },
  { label: "Revenue", value: "$1.2M", change: "+8%", icon: "💰" },
  { label: "Active Users", value: "3,891", change: "+24%", icon: "👥" },
  { label: "Destinations", value: "52", change: "+4", icon: "🌍" },
];

export default async function AdminPage() {
  const session = await getSession();

  if (!session) {
    redirect("/signin");
  }

  if (session.role !== "admin") {
    redirect("/profile");
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-surface py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-1">
              Welcome back, {session.name}. Here&apos;s your overview.
            </p>
          </div>
          <Link
            href="/profile"
            className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Back to Profile
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{stat.icon}</span>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Recent Bookings */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-900">Recent Bookings</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Booking ID
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Destination
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {booking.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {booking.user}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {booking.destination}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {booking.date}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {booking.amount}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${
                          booking.status === "Confirmed"
                            ? "bg-green-100 text-green-700"
                            : booking.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Management */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Manage Destinations</h3>
            <p className="text-sm text-gray-600 mb-4">
              Add, edit, or remove travel destinations from the catalog.
            </p>
            <Link
              href="/destinations"
              className="inline-flex text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              View Destinations →
            </Link>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-2">User Management</h3>
            <p className="text-sm text-gray-600 mb-4">
              View and manage user accounts, roles, and permissions.
            </p>
            <span className="inline-flex text-sm font-semibold text-gray-400">
              Coming Soon
            </span>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Analytics</h3>
            <p className="text-sm text-gray-600 mb-4">
              View booking trends, revenue reports, and user insights.
            </p>
            <span className="inline-flex text-sm font-semibold text-gray-400">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
