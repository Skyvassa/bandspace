'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Posts', 'bandId',
    {
      type: Sequelize.INTEGER
    });
  },

  down: async (queryInterface, Sequelize) => {
  }
};
