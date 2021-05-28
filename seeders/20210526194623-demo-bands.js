'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Bands', [
      {
        username: 'usertest',
        password: 'passtest',
        bandName: 'bandtest',
        genre: 'genretest',
        bandMembers: 'membertest',
        img: 'https://i.imgur.com/IBn6HZo.png',
        bcLink: 'https://futureislands.bandcamp.com/album/singles',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
  }
};
