import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Wanderlust Travel",
  description:
    "Learn about our passion for travel and the team behind Wanderlust Travel.",
};

const team = [
  {
    name: "Elena Rodriguez",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Marcus Chen",
    role: "Head of Experiences",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Amara Okafor",
    role: "Travel Curator",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "Liam Parker",
    role: "Adventure Guide",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
];

const values = [
  {
    icon: "🌱",
    title: "Sustainable Travel",
    description:
      "We prioritize eco-friendly practices and partner with local communities to ensure responsible tourism.",
  },
  {
    icon: "❤️",
    title: "Authentic Experiences",
    description:
      "We connect travelers with genuine local cultures, traditions, and hidden gems off the beaten path.",
  },
  {
    icon: "🤝",
    title: "Community First",
    description:
      "We invest in the communities we visit, supporting local businesses and cultural preservation.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=1920&h=800&fit=crop"
          alt="Group of travelers on mountain summit at sunrise"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            About Wanderlust
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Fueled by passion, driven by wanderlust, and committed to
            extraordinary travel.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Born From a Love of Exploration
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Wanderlust Travel was founded in 2010 with a simple mission: to
                  make extraordinary travel accessible to everyone. What started
                  as a small team of passionate travelers has grown into a global
                  community of explorers.
                </p>
                <p>
                  We believe that travel has the power to transform lives, bridge
                  cultures, and create memories that last a lifetime. Every
                  itinerary we craft is designed to immerse you in the authentic
                  spirit of each destination.
                </p>
                <p>
                  Over the past 15 years, we&apos;ve helped more than 10,000
                  travelers discover 50+ destinations across 6 continents. Our
                  team of expert travel curators personally visits every location
                  to ensure the highest quality experience.
                </p>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=1000&fit=crop"
                alt="Scenic mountain lake at golden hour"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Our Values
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 shadow-md text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Our Team
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Meet the Explorers
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse team of travel enthusiasts brings years of expertise and
              a genuine passion for discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-primary font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-teal-100 mb-8 max-w-xl mx-auto">
            Let our team of experts craft the perfect adventure for you. Your
            dream trip is just a conversation away.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-white text-primary px-8 py-3 text-sm font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
