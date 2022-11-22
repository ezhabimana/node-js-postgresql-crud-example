
module.exports = (sequelize, Sequelize) => {
  const PollResponse = sequelize.define("poll_response", {
    pollId: {
      type: Sequelize.INTEGER
    },
    pollOptionId: {
      type: Sequelize.INTEGER
    },
    pollUserId: {
      type: Sequelize.INTEGER
    },
  });

  return PollResponse;
};
