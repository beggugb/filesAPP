'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alumno extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Alumno.init({
    codigo: DataTypes.STRING,
    nombres: DataTypes.STRING,
    pais: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    email: DataTypes.STRING,
    estado: DataTypes.STRING,
    filename: DataTypes.STRING,
    telefono: DataTypes.STRING,
    observaciones: DataTypes.STRING,
    facultad: DataTypes.STRING,
    carrera: DataTypes.STRING,
    fci: DataTypes.STRING,
    fbachiller: DataTypes.STRING,
    fegreso: DataTypes.STRING,
    flicenciatura: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Alumno',
  });
  return Alumno;
};