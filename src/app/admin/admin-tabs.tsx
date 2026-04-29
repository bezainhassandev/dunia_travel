"use client";

import { useState } from "react";
import Image from "next/image";
import type { Destination } from "@/lib/destinations";
import type { Booking } from "@/lib/bookings";
import {
  createDestinationAction,
  updateDestinationAction,
  deleteDestinationAction,
} from "@/app/actions/destinations";

interface UserInfo {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

interface AdminTabsProps {
  users: UserInfo[];
  bookings: Booking[];
  destinations: Destination[];
}

type Tab = "overview" | "users" | "bookings" | "destinations";

const dashboardStats = [
  { label: "Total Bookings", value: "1,247", change: "+12%", icon: "📋" },
  { label: "Revenue", value: "$1.2M", change: "+8%", icon: "💰" },
  { label: "Active Users", value: "3,891", change: "+24%", icon: "👥" },
  { label: "Destinations", value: "52", change: "+4", icon: "🌍" },
];

export default function AdminTabs({ users, bookings, destinations: initialDestinations }: AdminTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [destinations, setDestinations] = useState(initialDestinations);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingDest, setEditingDest] = useState<Destination | null>(null);
  const [formMessage, setFormMessage] = useState<string | null>(null);

  const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: "overview", label: "Overview", icon: "📊" },
    { id: "users", label: "Users", icon: "👥" },
    { id: "bookings", label: "Bookings", icon: "📋" },
    { id: "destinations", label: "Destinations", icon: "🌍" },
  ];

  async function handleAddDestination(formData: FormData) {
    const result = await createDestinationAction(formData);
    if (result.error) {
      setFormMessage(result.error);
      return;
    }
    const newDest: Destination = {
      id: `dest-${Date.now()}`,
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      image: formData.get("image") as string,
      price: formData.get("price") as string,
      duration: formData.get("duration") as string,
      category: formData.get("category") as string,
    };
    setDestinations((prev) => [...prev, newDest]);
    setShowAddForm(false);
    setFormMessage(null);
  }

  async function handleEditDestination(formData: FormData) {
    const result = await updateDestinationAction(formData);
    if (result.error) {
      setFormMessage(result.error);
      return;
    }
    const id = formData.get("id") as string;
    setDestinations((prev) =>
      prev.map((d) =>
        d.id === id
          ? {
              ...d,
              name: formData.get("name") as string,
              description: formData.get("description") as string,
              image: formData.get("image") as string,
              price: formData.get("price") as string,
              duration: formData.get("duration") as string,
              category: formData.get("category") as string,
            }
          : d
      )
    );
    setEditingDest(null);
    setFormMessage(null);
  }

  async function handleDeleteDestination(id: string) {
    const formData = new FormData();
    formData.set("id", id);
    const result = await deleteDestinationAction(formData);
    if (result.error) {
      setFormMessage(result.error);
      return;
    }
    setDestinations((prev) => prev.filter((d) => d.id !== id));
  }

  return (
    <>
      {/* Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => { setActiveTab(tab.id); setShowAddForm(false); setEditingDest(null); setFormMessage(null); }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? "bg-primary text-white shadow-md"
                : "bg-white dark:bg-dark-card text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-slate-700"
            }`}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-dark-card rounded-2xl shadow-md p-6 border border-gray-100 dark:border-dark-border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{stat.icon}</span>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      )}

      {/* Users Tab */}
      {activeTab === "users" && (
        <div className="bg-white dark:bg-dark-card rounded-2xl shadow-md border border-gray-100 dark:border-dark-border overflow-hidden">
          <div className="p-6 border-b border-gray-100 dark:border-dark-border">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">All Users ({users.length})</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-slate-800 text-left">
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">User ID</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Joined</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-dark-border">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                    <td className="px-6 py-4 text-sm font-mono text-gray-500 dark:text-gray-400">{user.id}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
                          {user.name.charAt(0).toUpperCase()}
                        </span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{user.email}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        user.role === "admin"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-blue-100 text-blue-700"
                      }`}>
                        {user.role === "admin" ? "Admin" : "User"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{user.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Bookings Tab */}
      {activeTab === "bookings" && (
        <div className="bg-white dark:bg-dark-card rounded-2xl shadow-md border border-gray-100 dark:border-dark-border overflow-hidden">
          <div className="p-6 border-b border-gray-100 dark:border-dark-border">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">All Bookings ({bookings.length})</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-slate-800 text-left">
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Booking ID</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Destination</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-dark-border">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{booking.id}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{booking.userName}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{booking.userEmail}</td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">{booking.destination}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{booking.date}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{booking.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                        booking.status === "Confirmed"
                          ? "bg-green-100 text-green-700"
                          : booking.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Destinations Tab */}
      {activeTab === "destinations" && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              Manage Destinations ({destinations.length})
            </h2>
            {!showAddForm && !editingDest && (
              <button
                onClick={() => setShowAddForm(true)}
                className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-primary-dark transition-colors"
              >
                + Add Destination
              </button>
            )}
          </div>

          {formMessage && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 text-red-700 text-sm">
              {formMessage}
            </div>
          )}

          {/* Add/Edit Form */}
          {(showAddForm || editingDest) && (
            <DestinationForm
              destination={editingDest}
              onSubmit={editingDest ? handleEditDestination : handleAddDestination}
              onCancel={() => { setShowAddForm(false); setEditingDest(null); setFormMessage(null); }}
            />
          )}

          {/* Destinations Table */}
          {!showAddForm && !editingDest && (
            <div className="bg-white dark:bg-dark-card rounded-2xl shadow-md border border-gray-100 dark:border-dark-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-slate-800 text-left">
                      <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Price</th>
                      <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Duration</th>
                      <th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-dark-border">
                    {destinations.map((dest) => (
                      <tr key={dest.id} className="hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-lg bg-gray-200 dark:bg-slate-700 overflow-hidden flex-shrink-0">
                              <Image src={dest.image} alt={dest.name} fill className="object-cover" />
                            </div>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">{dest.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary dark:text-accent">
                            {dest.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{dest.price}</td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{dest.duration}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setEditingDest(dest)}
                              className="text-sm font-semibold text-primary dark:text-accent hover:text-primary-dark dark:hover:text-accent-light transition-colors"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteDestination(dest.id)}
                              className="text-sm font-semibold text-red-600 hover:text-red-800 transition-colors"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

function DestinationForm({
  destination,
  onSubmit,
  onCancel,
}: {
  destination: Destination | null;
  onSubmit: (formData: FormData) => Promise<void>;
  onCancel: () => void;
}) {
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(e.currentTarget);
    await onSubmit(formData);
    setPending(false);
  }

  const inputCls =
    "w-full rounded-xl border border-gray-300 dark:border-slate-600 dark:bg-dark-surface dark:text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow";
  const labelCls = "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2";

  return (
    <div className="bg-white dark:bg-dark-card rounded-2xl shadow-md p-6 sm:p-8 border border-gray-100 dark:border-dark-border mb-6">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
        {destination ? "Edit Destination" : "Add New Destination"}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        {destination && <input type="hidden" name="id" value={destination.id} />}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="dest-name" className={labelCls}>Name</label>
            <input id="dest-name" name="name" type="text" defaultValue={destination?.name ?? ""} placeholder="e.g. Santorini, Greece" className={inputCls} required />
          </div>
          <div>
            <label htmlFor="dest-category" className={labelCls}>Category</label>
            <select id="dest-category" name="category" defaultValue={destination?.category ?? ""} className={inputCls} required>
              <option value="">Select category</option>
              <option value="Beach">Beach</option>
              <option value="Adventure">Adventure</option>
              <option value="Culture">Culture</option>
              <option value="City">City</option>
            </select>
          </div>
          <div>
            <label htmlFor="dest-price" className={labelCls}>Price</label>
            <input id="dest-price" name="price" type="text" defaultValue={destination?.price ?? ""} placeholder="e.g. $1,299" className={inputCls} required />
          </div>
          <div>
            <label htmlFor="dest-duration" className={labelCls}>Duration</label>
            <input id="dest-duration" name="duration" type="text" defaultValue={destination?.duration ?? ""} placeholder="e.g. 7 Days" className={inputCls} required />
          </div>
        </div>
        <div>
          <label htmlFor="dest-image" className={labelCls}>Image URL</label>
          <input id="dest-image" name="image" type="url" defaultValue={destination?.image ?? ""} placeholder="https://images.unsplash.com/..." className={inputCls} required />
        </div>
        <div>
          <label htmlFor="dest-description" className={labelCls}>Description</label>
          <textarea id="dest-description" name="description" rows={3} defaultValue={destination?.description ?? ""} placeholder="Describe this destination..." className={`${inputCls} resize-none`} required />
        </div>
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={pending}
            className="rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-primary-dark transition-colors disabled:opacity-50"
          >
            {pending ? "Saving..." : destination ? "Update Destination" : "Add Destination"}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="rounded-xl border border-gray-300 dark:border-slate-600 px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
