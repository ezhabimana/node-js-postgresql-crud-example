const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.users = require("./user.model.js")(sequelize, Sequelize);
db.polls = require("./poll.model.js")(sequelize, Sequelize);
db.friendships = require("./friendship.model.js")(sequelize, Sequelize);
db.pollOptions = require("./poll_option.model.js")(sequelize, Sequelize);
db.pollResponses = require("./poll_response.model.js")(sequelize, Sequelize);

module.exports = db;
