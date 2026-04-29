export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  category: string;
}

const destinations: Map<string, Destination> = new Map();

function seedDestinations() {
  if (destinations.size > 0) return;

  const seed: Destination[] = [
    {
      id: "dest-001",
      name: "Santorini, Greece",
      description: "Experience the magic of sunset views over the caldera, explore charming villages, and savor Mediterranean cuisine.",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=600&fit=crop",
      price: "$1,299",
      duration: "7 Days",
      category: "Beach",
    },
    {
      id: "dest-002",
      name: "Bali, Indonesia",
      description: "Discover sacred temples, terraced rice paddies, vibrant coral reefs, and a rich spiritual culture.",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
      price: "$899",
      duration: "10 Days",
      category: "Culture",
    },
    {
      id: "dest-003",
      name: "Swiss Alps",
      description: "Conquer legendary peaks, ride scenic railways, and unwind in world-class mountain resorts.",
      image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=600&fit=crop",
      price: "$1,599",
      duration: "8 Days",
      category: "Adventure",
    },
    {
      id: "dest-004",
      name: "Kyoto, Japan",
      description: "Walk through ancient bamboo groves, visit serene temples, and experience traditional tea ceremonies.",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop",
      price: "$1,450",
      duration: "9 Days",
      category: "Culture",
    },
    {
      id: "dest-005",
      name: "Maldives",
      description: "Relax in overwater bungalows surrounded by turquoise lagoons and pristine coral reefs.",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop",
      price: "$2,199",
      duration: "6 Days",
      category: "Beach",
    },
    {
      id: "dest-006",
      name: "Machu Picchu, Peru",
      description: "Trek the legendary Inca Trail to the ancient citadel perched high in the Andes mountains.",
      image: "https://images.unsplash.com/photo-1587595431973-160d0d163571?w=800&h=600&fit=crop",
      price: "$1,350",
      duration: "7 Days",
      category: "Adventure",
    },
    {
      id: "dest-007",
      name: "Paris, France",
      description: "Stroll along the Seine, marvel at the Eiffel Tower, and indulge in exquisite French cuisine.",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
      price: "$1,199",
      duration: "5 Days",
      category: "City",
    },
    {
      id: "dest-008",
      name: "Serengeti, Tanzania",
      description: "Witness the Great Migration and encounter Africa's Big Five on an unforgettable safari.",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop",
      price: "$2,499",
      duration: "8 Days",
      category: "Adventure",
    },
    {
      id: "dest-009",
      name: "Amalfi Coast, Italy",
      description: "Drive along dramatic cliffs, swim in crystal-clear coves, and taste authentic Italian flavors.",
      image: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=800&h=600&fit=crop",
      price: "$1,399",
      duration: "6 Days",
      category: "Beach",
    },
    {
      id: "dest-010",
      name: "Dubai, UAE",
      description: "Experience futuristic architecture, luxury shopping, and desert adventures in this modern oasis.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
      price: "$1,799",
      duration: "5 Days",
      category: "City",
    },
    {
      id: "dest-011",
      name: "Cape Town, South Africa",
      description: "Explore Table Mountain, vibrant neighborhoods, world-class vineyards, and stunning coastlines.",
      image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&h=600&fit=crop",
      price: "$1,650",
      duration: "8 Days",
      category: "Adventure",
    },
    {
      id: "dest-012",
      name: "Iceland",
      description: "Chase the Northern Lights, bathe in geothermal springs, and hike across glaciers and volcanoes.",
      image: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=800&h=600&fit=crop",
      price: "$1,899",
      duration: "7 Days",
      category: "Adventure",
    },
  ];

  for (const dest of seed) {
    destinations.set(dest.id, dest);
  }
}

seedDestinations();

export function getAllDestinations(): Destination[] {
  seedDestinations();
  return Array.from(destinations.values());
}

export function getDestinationById(id: string): Destination | undefined {
  seedDestinations();
  return destinations.get(id);
}

export function addDestination(data: Omit<Destination, "id">): Destination {
  seedDestinations();
  const id = `dest-${Date.now()}`;
  const dest: Destination = { id, ...data };
  destinations.set(id, dest);
  return dest;
}

export function updateDestination(id: string, data: Partial<Omit<Destination, "id">>): Destination | null {
  seedDestinations();
  const existing = destinations.get(id);
  if (!existing) return null;
  const updated = { ...existing, ...data };
  destinations.set(id, updated);
  return updated;
}

export function deleteDestination(id: string): boolean {
  seedDestinations();
  return destinations.delete(id);
}
