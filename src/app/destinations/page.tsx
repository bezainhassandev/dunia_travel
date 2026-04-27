import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Destinations | Wanderlust Travel",
  description:
    "Browse our curated collection of stunning travel destinations around the world.",
};

const destinations = [
  {
    name: "Santorini, Greece",
    description:
      "Experience the magic of sunset views over the caldera, explore charming villages, and savor Mediterranean cuisine.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
    price: "$1,299",
    duration: "7 Days",
    category: "Beach",
  },
  {
    name: "Bali, Indonesia",
    description:
      "Discover sacred temples, terraced rice paddies, vibrant coral reefs, and a rich spiritual culture.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
    price: "$899",
    duration: "10 Days",
    category: "Culture",
  },
  {
    name: "Swiss Alps",
    description:
      "Conquer legendary peaks, ride scenic railways, and unwind in world-class mountain resorts.",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop",
    price: "$1,599",
    duration: "8 Days",
    category: "Adventure",
  },
  {
    name: "Kyoto, Japan",
    description:
      "Walk through ancient bamboo groves, visit serene temples, and experience traditional tea ceremonies.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop",
    price: "$1,450",
    duration: "9 Days",
    category: "Culture",
  },
  {
    name: "Maldives",
    description:
      "Relax in overwater bungalows surrounded by turquoise lagoons and pristine coral reefs.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop",
    price: "$2,199",
    duration: "6 Days",
    category: "Beach",
  },
  {
    name: "Machu Picchu, Peru",
    description:
      "Trek the legendary Inca Trail to the ancient citadel perched high in the Andes mountains.",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d163571?w=800&h=600&fit=crop",
    price: "$1,350",
    duration: "7 Days",
    category: "Adventure",
  },
  {
    name: "Paris, France",
    description:
      "Stroll along the Seine, marvel at the Eiffel Tower, and indulge in exquisite French cuisine.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    price: "$1,199",
    duration: "5 Days",
    category: "City",
  },
  {
    name: "Serengeti, Tanzania",
    description:
      "Witness the Great Migration and encounter Africa's Big Five on an unforgettable safari.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop",
    price: "$2,499",
    duration: "8 Days",
    category: "Adventure",
  },
  {
    name: "Amalfi Coast, Italy",
    description:
      "Drive along dramatic cliffs, swim in crystal-clear coves, and taste authentic Italian flavors.",
    image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&h=600&fit=crop",
    price: "$1,399",
    duration: "6 Days",
    category: "Beach",
  },
];

export default function DestinationsPage() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <div
                key={dest.name}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
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
                    <h3 className="text-xl font-bold text-gray-900">{dest.name}</h3>
                    <span className="text-lg font-bold text-primary">{dest.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {dest.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {dest.duration}
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-primary font-semibold text-sm hover:text-primary-dark transition-colors"
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
