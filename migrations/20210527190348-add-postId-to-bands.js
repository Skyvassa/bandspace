'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Bands', 'postId',
    {
      type: Sequelize.INTEGER
    });
  },

  down: async (queryInterface, Sequelize) => {
  }
};
