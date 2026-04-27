import Link from "next/link";

const footerLinks = {
  Explore: [
    { href: "/destinations", label: "Destinations" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
  "Travel Types": [
    { href: "/destinations", label: "Beach Getaways" },
    { href: "/destinations", label: "Mountain Adventures" },
    { href: "/destinations", label: "City Breaks" },
  ],
  Support: [
    { href: "/contact", label: "Help Center" },
    { href: "/contact", label: "Travel Insurance" },
    { href: "/contact", label: "FAQs" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">✈</span>
              <span className="text-xl font-bold text-white">Wanderlust</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Discover the world with us. We craft unforgettable travel
              experiences that inspire adventure and create lasting memories.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-primary-light transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Wanderlust Travel. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {["Twitter", "Instagram", "Facebook"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-gray-500 hover:text-primary-light transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
