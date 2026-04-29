"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/lib/destinations";

const PAGE_SIZE = 9;

export default function DestinationsGrid({ destinations }: { destinations: Destination[] }) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visible = destinations.slice(0, visibleCount);
  const hasMore = visibleCount < destinations.length;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visible.map((dest) => (
          <div
            key={dest.id}
            className="group bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-dark-border"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {dest.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{dest.name}</h3>
                <span className="text-lg font-bold text-primary dark:text-accent">{dest.price}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                {dest.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {dest.duration}
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-primary dark:text-accent font-semibold text-sm hover:text-primary-dark dark:hover:text-accent-light transition-colors"
                >
                  Book Now
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="text-center mt-12">
          <button
            onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
            className="inline-flex items-center rounded-full border-2 border-primary dark:border-accent text-primary dark:text-accent px-8 py-3 text-sm font-semibold hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all"
          >
            View More
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
