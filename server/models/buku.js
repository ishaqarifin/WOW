'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class buku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  buku.init({
    title: DataTypes.STRING,
    pages: DataTypes.INTEGER,
    publication: DataTypes.STRING,
    author: DataTypes.STRING,
    isbn: DataTypes.STRING,
    about: DataTypes.TEXT,
    bookFile: DataTypes.STRING,
    bookCover: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'buku',
  });
  return buku;
};