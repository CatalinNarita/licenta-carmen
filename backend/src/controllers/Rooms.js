import Rooms from "../models/RoomModel.js";

export const getRooms = async (req, res) => {
  try {
    const rooms = await Rooms.findAll({
      attributes: ["id", "breakfast_included", "type", "lake_view"],
    });
    res.json(rooms);
  } catch (error) {
    console.log(error);
  }
};
