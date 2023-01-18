import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Rooms = db.define(
  "rooms",
  {
    title: {
      type: DataTypes.STRING,
    },
    capacity: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    phone: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.ENUM("DELUXE", "BUDGET", "APARTMENT"),
    },
  },
  {
    freezeTableName: true,
  }
);

(async () => {
  await db.sync();
})();

export default Rooms;
