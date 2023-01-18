import db from "../config/Database.js";
import Bookings from "../models/BookingModel.js";

export const getBookings = async (req, res) => {
  try {
    const bookings = await Bookings.findAll({
      attributes: [
        "booking_number",
        "num_of_guests",
        "start_date",
        "end_date",
        "user_id",
        "room_id",
      ],
    });
    res.json(bookings);
  } catch (error) {
    console.log(error);
  }
};

export const getUserBookings = async (req, res) => {
  const { userId } = req.query;
  try {
    const [bookings] = await db.query(
      `select rooms.title, rooms.capacity, rooms.type, bookings.booking_number, bookings.start_date, bookings.end_date FROM rooms JOIN bookings ON bookings.room_id = rooms.id WHERE bookings.user_id = ${userId}`
    );

    res.json(bookings);
  } catch (error) {
    console.log(error);
  }
};

export const registerBooking = async (req, res) => {
  const { phoneNumber, numberOfGuests, startDate, endDate, userId, roomId } =
    req.body;

  console.log(req.body);

  try {
    await Bookings.create({
      booking_number: `${userId}${roomId}`,
      num_of_guests: numberOfGuests,
      phone_number: phoneNumber,
      start_date: startDate,
      end_date: endDate,
      user_id: userId,
      room_id: roomId,
    });
    res.json({ msg: "Registration Successful" });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(400).json({ msg: "Cannot book!" });
    }
  }
};
