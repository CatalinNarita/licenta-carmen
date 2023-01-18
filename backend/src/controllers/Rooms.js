import Rooms from "../models/RoomModel.js";
import Bookings from "../models/BookingModel.js";
import { Op } from "sequelize";

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

export const getAvailableRooms = async (req, res) => {
  const { startDate, endDate } = req.body;

  try {
    const bookedRooms = await Bookings.findAll({
      attributes: ["room_id"],
      where: {
        [Op.or]: [
          {
            start_date: {
              [Op.and]: [{ [Op.gt]: startDate }, { [Op.lt]: endDate }],
            },
          },
          {
            end_date: {
              [Op.and]: [{ [Op.gt]: startDate }, { [Op.lt]: endDate }],
            },
          },
          {
            [Op.and]: [
              {
                start_date: {
                  [Op.lte]: startDate,
                },
              },
              {
                end_date: {
                  [Op.gte]: endDate,
                },
              },
            ],
          },
        ],
      },
    });

    const bookedRoomsIds = bookedRooms.map((room) => room.room_id);

    const validRooms = await Rooms.findAll({
      where: {
        id: {
          [Op.notIn]: bookedRoomsIds,
        },
      },
    });

    res.json(validRooms);
  } catch (error) {
    console.log(error);
  }
};
