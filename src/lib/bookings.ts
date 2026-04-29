export interface Booking {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  destination: string;
  date: string;
  status: "Confirmed" | "Pending" | "Cancelled";
  amount: string;
}

const bookings: Map<string, Booking> = new Map();

function seedBookings() {
  if (bookings.size > 0) return;

  const seed: Booking[] = [
    { id: "BK-001", userId: "user-001", userName: "Sarah Mitchell", userEmail: "sarah@example.com", destination: "Santorini, Greece", date: "2026-08-15", status: "Confirmed", amount: "$1,299" },
    { id: "BK-002", userId: "user-002", userName: "James Lee", userEmail: "james@example.com", destination: "Bali, Indonesia", date: "2026-09-01", status: "Pending", amount: "$899" },
    { id: "BK-003", userId: "user-003", userName: "Emma Klein", userEmail: "emma@example.com", destination: "Swiss Alps", date: "2026-10-05", status: "Confirmed", amount: "$1,599" },
    { id: "BK-004", userId: "user-004", userName: "Carlos Rivera", userEmail: "carlos@example.com", destination: "Maldives", date: "2026-11-20", status: "Cancelled", amount: "$2,199" },
    { id: "BK-005", userId: "user-005", userName: "Aisha Brown", userEmail: "aisha@example.com", destination: "Kyoto, Japan", date: "2026-12-01", status: "Pending", amount: "$1,450" },
    { id: "BK-006", userId: "user-006", userName: "Michael Park", userEmail: "michael@example.com", destination: "Paris, France", date: "2026-07-10", status: "Confirmed", amount: "$1,199" },
    { id: "BK-007", userId: "user-007", userName: "Priya Sharma", userEmail: "priya@example.com", destination: "Machu Picchu, Peru", date: "2026-08-22", status: "Confirmed", amount: "$1,350" },
    { id: "BK-008", userId: "user-001", userName: "Sarah Mitchell", userEmail: "sarah@example.com", destination: "Amalfi Coast, Italy", date: "2027-01-15", status: "Pending", amount: "$1,399" },
  ];

  for (const booking of seed) {
    bookings.set(booking.id, booking);
  }
}

seedBookings();

export function getAllBookings(): Booking[] {
  seedBookings();
  return Array.from(bookings.values());
}
