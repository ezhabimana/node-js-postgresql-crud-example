module.exports = (sequelize, Sequelize) => {
  const PollOption = sequelize.define("poll_option", {
    name: {
      type: Sequelize.STRING
    },
    pollId: {
      type: Sequelize.INTEGER
    },
  });

  
  return PollOption;
};
