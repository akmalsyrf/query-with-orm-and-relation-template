const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize("course-express", "root", null, {
  host: "localhost",
  port: "3306",
  dialect: "mysql",
  logging: console.log,
  freezeTableName: true,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

db.sequelize = sequelize;

module.exports = db;
