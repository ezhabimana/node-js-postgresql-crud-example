
module.exports = (sequelize, Sequelize) => {
  const Friendship = sequelize.define("friendship", {
    userId: {
      type: Sequelize.INTEGER
    },
    friendId: {
      type: Sequelize.INTEGER
    },
  });
  return Friendship;
};
