import { Sequelize } from "sequelize";

const db = new Sequelize("licenta_carmen", "carmen", "admin", {
  host: "192.168.64.2",
  dialect: "mysql",
});

export default db;
