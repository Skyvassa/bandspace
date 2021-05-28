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
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
