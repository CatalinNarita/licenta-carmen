import { Sequelize } from "sequelize";

const db = new Sequelize("licenta_carmen", "carmen", "admin", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
