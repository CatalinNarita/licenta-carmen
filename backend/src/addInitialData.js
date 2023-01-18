import Rooms from "./models/RoomModel.js";
import Bookings from "./models/BookingModel.js";

export const rooms = [
  {
    title: "Title 1",
    capacity: 2,
    phone: "1234567890",
    type: "DELUXE",
  },
  {
    title: "Title 2",
    capacity: 3,
    phone: "1234567890",
    type: "BUDGET",
  },
  {
    title: "Title 3",
    capacity: 4,
    phone: "1234567890",
    type: "APARTMENT",
  },
  {
    title: "Title 4",
    capacity: 2,
    phone: "1234567890",
    type: "DELUXE",
  },
  {
    title: "Title 5",
    capacity: 3,
    phone: "1234567890",
    type: "BUDGET",
  },
  {
    title: "Title 6",
    capacity: 4,
    phone: "1234567890",
    type: "APARTMENT",
  },
  {
    title: "Title 7",
    capacity: 2,
    phone: "1234567890",
    type: "DELUXE",
  },
  {
    title: "Title 8",
    capacity: 3,
    phone: "1234567890",
    type: "BUDGET",
  },
  {
    title: "Title 9",
    capacity: 4,
    phone: "1234567890",
    type: "APARTMENT",
  },
  {
    title: "Title 10",
    capacity: 4,
    phone: "1234567890",
    type: "APARTMENT",
  },
];

export const bookings = [
  {
    booking_number: 1,
    num_of_guests: 2,
    start_date: "2023-01-17",
    end_date: "2023-01-18",
    user_id: 1,
    room_id: 1,
  },
];

Rooms.sync().then(() => {
  rooms.forEach((room) => {
    Rooms.create(room);
  });
});

Bookings.sync().then(() => {
  bookings.forEach((booking) => {
    Bookings.create(booking);
  });
});
