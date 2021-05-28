'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Posts', [
      {
        text: 'Welcome to our page. This is a test of the post system!',
        date: 'datetest',
        bandId: 1
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
  }
};
