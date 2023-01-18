import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Rooms from "./RoomModel.js";
import Users from "./UserModel.js";

const { DataTypes } = Sequelize;

const Bookings = db.define(
  "bookings",
  {
    booking_number: {
      type: DataTypes.STRING,
      unique: true,
    },
    num_of_guests: {
      type: DataTypes.INTEGER,
    },
    phone_number: {
      type: DataTypes.STRING,
    },
    start_date: {
      type: DataTypes.DATE,
    },
    end_date: {
      type: DataTypes.DATE,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Users,
        key: "id",
      },
    },
    room_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Rooms,
        key: "id",
      },
    },
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

export default Bookings;
