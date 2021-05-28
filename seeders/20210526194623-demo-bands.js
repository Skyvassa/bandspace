'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Bands', [
      {
        username: 'usertest',
        password: 'passtest',
        bandName: 'Groove Vendors',
        genre: 'Like...Groovy Man',
        bandMembers: 'Groovy Dan, Groovy Phil, and Groovy Steve',
        img: 'https://i.imgur.com/IBn6HZo.png',
        bcLink: 'https://futureislands.bandcamp.com/album/singles',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
  }
};
