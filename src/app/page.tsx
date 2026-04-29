import Image from "next/image";
import Link from "next/link";

const featuredDestinations = [
  {
    name: "Santorini, Greece",
    description: "Iconic white-washed buildings perched above the crystal-clear Aegean Sea.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
    price: "$1,299",
    tag: "Popular",
  },
  {
    name: "Bali, Indonesia",
    description: "Lush rice terraces, ancient temples, and pristine beaches await.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
    price: "$899",
    tag: "Best Value",
  },
  {
    name: "Swiss Alps",
    description: "Majestic peaks, charming villages, and world-class skiing adventures.",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop",
    price: "$1,599",
    tag: "Adventure",
  },
];

const stats = [
  { value: "50+", label: "Destinations" },
  { value: "10K+", label: "Happy Travelers" },
  { value: "15+", label: "Years Experience" },
  { value: "4.9", label: "Average Rating" },
];

const features = [
  {
    icon: "🌍",
    title: "Handpicked Destinations",
    description: "Every destination is carefully selected by our travel experts for the most authentic experiences.",
  },
  {
    icon: "🛡️",
    title: "Safe & Secure",
    description: "Travel with confidence. We provide 24/7 support and comprehensive travel insurance.",
  },
  {
    icon: "💰",
    title: "Best Price Guarantee",
    description: "Find a lower price? We'll match it. No hidden fees, no surprises.",
  },
  {
    icon: "🎯",
    title: "Personalized Trips",
    description: "Every journey is tailored to your preferences, budget, and travel style.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "New York, USA",
    text: "Wanderlust made our honeymoon in Santorini absolutely magical. Every detail was perfectly planned!",
    rating: 5,
  },
  {
    name: "James L.",
    location: "London, UK",
    text: "The Bali trip exceeded all expectations. The local guides were incredible and the itinerary was perfect.",
    rating: 5,
  },
  {
    name: "Emma K.",
    location: "Sydney, Australia",
    text: "Best travel agency I've ever used. The Swiss Alps adventure was the highlight of my year!",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&h=1080&fit=crop"
          alt="Beautiful tropical beach with crystal clear water"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-accent-light font-semibold text-sm uppercase tracking-widest mb-4 animate-fade-in">
            Your Adventure Awaits
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
            Discover the World&apos;s Most{" "}
            <span className="text-accent">Beautiful</span> Places
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200">
            From pristine beaches to majestic mountains, we craft unforgettable
            journeys that turn your travel dreams into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Link
              href="/destinations"
              className="rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-accent-light hover:shadow-xl transition-all"
            >
              Explore Destinations
            </Link>
            <Link
              href="/about"
              className="rounded-full bg-white/15 backdrop-blur-sm border border-white/30 px-8 py-4 text-base font-semibold text-white hover:bg-white/25 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-blue-100 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 sm:py-28 bg-surface dark:bg-dark-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary dark:text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Top Picks
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Featured Destinations
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our handpicked selection of the world&apos;s most extraordinary
              travel destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((dest) => (
              <div
                key={dest.name}
                className="group bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                      {dest.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-bold px-3 py-1 rounded-full">
                      From {dest.price}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{dest.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{dest.description}</p>
                  <Link
                    href="/destinations"
                    className="inline-flex items-center mt-4 text-primary dark:text-accent font-semibold text-sm hover:text-primary-dark dark:hover:text-accent-light transition-colors group/link"
                  >
                    View Details
                    <svg
                      className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/destinations"
              className="inline-flex items-center rounded-full border-2 border-primary dark:border-accent text-primary dark:text-accent px-8 py-3 text-sm font-semibold hover:bg-primary hover:text-white dark:hover:bg-accent dark:hover:text-white transition-all"
            >
              View All Destinations
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary dark:text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Why Wanderlust
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              Travel With Confidence
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We go above and beyond to ensure every trip is seamless, safe, and
              unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center p-8 rounded-2xl bg-surface dark:bg-dark-card hover:bg-primary hover:text-white group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white group-hover:text-white transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-blue-100 transition-colors leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 bg-surface dark:bg-dark-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary dark:text-accent font-semibold text-sm uppercase tracking-widest mb-3">
              Testimonials
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              What Travelers Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-accent text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&h=800&fit=crop"
          alt="Scenic lake surrounded by mountains"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/85" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10">
            Join thousands of happy travelers who have discovered the world with
            Wanderlust. Your dream destination is just a click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-white text-primary px-8 py-4 text-base font-semibold shadow-lg hover:bg-gray-100 transition-all"
            >
              Start Planning Today
            </Link>
            <Link
              href="/destinations"
              className="rounded-full border-2 border-white text-white px-8 py-4 text-base font-semibold hover:bg-white/10 transition-all"
            >
              Browse Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Stay Inspired
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Subscribe to our newsletter for travel tips, exclusive deals, and
            destination inspiration delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-gray-300 dark:border-slate-600 dark:bg-dark-card dark:text-white px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors shadow-md">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
