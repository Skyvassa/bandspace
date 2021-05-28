'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Posts', [
      {
        text: 'texttest',
        date: 'datetest',
        bandId: 1
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
  }
};
