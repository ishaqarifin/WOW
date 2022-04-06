'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class daftarBuku extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  daftarBuku.init({
    idUser: DataTypes.INTEGER,
    idBuku: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'daftarBuku',
  });
  return daftarBuku;
};