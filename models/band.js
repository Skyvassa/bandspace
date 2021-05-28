'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Band.hasMany(models.Post, { foreignKey: 'bandId'})
    }
  };
  Band.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    bandName: DataTypes.STRING,
    genre: DataTypes.STRING,
    bandMembers: DataTypes.STRING,
    img: DataTypes.STRING,
    bcLink: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Band',
  });
  return Band;
};