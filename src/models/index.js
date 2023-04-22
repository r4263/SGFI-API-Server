const database = require("../config/database.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(database.DB, database.USER, database.PASSWORD, {
  host: database.HOST,
  dialect: database.dialect,
  operatorsAliases: false,
  pool: {
    max: database.pool.max,
    min: database.pool.min,
    acquire: database.pool.acquire,
    idle: database.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.usuario = require("./usuario.model.js")(sequelize, Sequelize);
db.compra = require("./compra.model.js")(sequelize, Sequelize);
db.lote = require("./lote.model.js")(sequelize, Sequelize);
db.insumo = require("./insumo.model.js")(sequelize, Sequelize);

module.exports = db;