import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import { bookings } from "../config/initialData.js";
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
      unique: true,
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

Bookings.sync().then(() => {
  bookings.forEach((booking) => {
    Bookings.create(booking);
  });
});

(async () => {
  await db.sync();
})();

export default Bookings;
