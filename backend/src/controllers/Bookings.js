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

export const registrBooking = async (req, res) => {
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
