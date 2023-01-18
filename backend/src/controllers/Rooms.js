import Rooms from "../models/RoomModel.js";
import Bookings from "../models/BookingModel.js";

export const getRooms = async (req, res) => {
  try {
    const rooms = await Rooms.findAll({
      attributes: ["id", "title", "capacity", "phone", "type"],
    });
    res.json(rooms);
  } catch (error) {
    console.log(error);
  }
};
