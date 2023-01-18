import { Sequelize } from "sequelize";

const db = new Sequelize("licenta_carmen", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
