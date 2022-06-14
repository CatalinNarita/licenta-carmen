import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import { rooms } from "../config/initialData.js";

const { DataTypes } = Sequelize;

const Rooms = db.define(
  "rooms",
  {
    breakfast_included: {
      type: DataTypes.BOOLEAN,
    },
    type: {
      type: DataTypes.ENUM("SINGLE", "STANDARD", "DOUBLE", "TRIPLE", "SUITE"),
    },
    lake_view: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    freezeTableName: true,
  }
);

// Rooms.sync().then(() => {
//   rooms.forEach((room) => {
//     Rooms.create(room);
//   });
// });

(async () => {
  await db.sync();
})();

export default Rooms;
