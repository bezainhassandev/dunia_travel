import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { logout } from "@/app/actions/auth";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Profile | Wanderlust Travel",
  description: "Manage your Wanderlust Travel profile.",
};

const upcomingTrips = [
  { destination: "Santorini, Greece", date: "Aug 15 - Aug 22, 2026", status: "Confirmed" },
  { destination: "Bali, Indonesia", date: "Oct 5 - Oct 15, 2026", status: "Pending" },
];

const pastTrips = [
  { destination: "Paris, France", date: "Mar 1 - Mar 6, 2025", rating: 5 },
  { destination: "Swiss Alps", date: "Dec 10 - Dec 18, 2024", rating: 5 },
];

export default async function ProfilePage() {
  const session = await getSession();

  if (!session) {
    redirect("/signin");
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-surface py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
                {session.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{session.name}</h1>
                <p className="text-gray-600">{session.email}</p>
                <span className={`inline-block mt-1 text-xs font-semibold px-3 py-1 rounded-full ${
                  session.role === "admin"
                    ? "bg-purple-100 text-purple-700"
                    : "bg-teal-100 text-teal-700"
                }`}>
                  {session.role === "admin" ? "Administrator" : "Traveler"}
                </span>
              </div>
            </div>
            <div className="flex gap-3">
              {session.role === "admin" && (
                <Link
                  href="/admin"
                  className="rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-purple-700 transition-colors"
                >
                  Admin Dashboard
                </Link>
              )}
              <form action={logout}>
                <button
                  type="submit"
                  className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Sign Out
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stats */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Travel Stats</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Countries Visited</span>
                  <span className="text-lg font-bold text-primary">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Trips Completed</span>
                  <span className="text-lg font-bold text-primary">8</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Reward Points</span>
                  <span className="text-lg font-bold text-accent">2,450</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Member Since</span>
                  <span className="text-sm font-medium text-gray-900">2024</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Link
                  href="/destinations"
                  className="block w-full text-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
                >
                  Browse Destinations
                </Link>
                <Link
                  href="/contact"
                  className="block w-full text-center rounded-xl border border-primary text-primary px-4 py-2.5 text-sm font-semibold hover:bg-primary hover:text-white transition-all"
                >
                  Plan a Trip
                </Link>
              </div>
            </div>
          </div>

          {/* Trips */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Upcoming Trips</h2>
              {upcomingTrips.length > 0 ? (
                <div className="space-y-4">
                  {upcomingTrips.map((trip) => (
                    <div
                      key={trip.destination}
                      className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div>
                        <h3 className="font-semibold text-gray-900">{trip.destination}</h3>
                        <p className="text-sm text-gray-600">{trip.date}</p>
                      </div>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        trip.status === "Confirmed"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {trip.status}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-sm">No upcoming trips planned.</p>
              )}
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Past Adventures</h2>
              <div className="space-y-4">
                {pastTrips.map((trip) => (
                  <div
                    key={trip.destination}
                    className="flex items-center justify-between p-4 rounded-xl bg-gray-50"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-900">{trip.destination}</h3>
                      <p className="text-sm text-gray-600">{trip.date}</p>
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: trip.rating }).map((_, i) => (
                        <span key={i} className="text-accent text-sm">★</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
