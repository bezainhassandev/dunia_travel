import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllDestinations } from "@/lib/destinations";
import DestinationsGrid from "./destinations-grid";

export const metadata: Metadata = {
  title: "Destinations | Wanderlust Travel",
  description:
    "Browse our curated collection of stunning travel destinations around the world.",
};

export default function DestinationsPage() {
  const destinations = getAllDestinations();

  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&h=800&fit=crop"
          alt="Road trip through scenic landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Destinations
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            From tropical paradise to mountain peaks — find your perfect escape.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <DestinationsGrid destinations={destinations} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            We offer custom trip planning. Tell us your dream destination and
            we&apos;ll create the perfect itinerary just for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-white text-primary px-8 py-3 text-sm font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
