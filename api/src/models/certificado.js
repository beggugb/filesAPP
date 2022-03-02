'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Certificado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Certificado.belongsTo(models.Alumno, {
        foreignKey: 'alumnoId',
        as: 'alumno',
      });
    }
  };
  Certificado.init({
    codigo: DataTypes.STRING,
    modulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    filename: DataTypes.STRING,
    alumnoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Certificado',
  });
  return Certificado;
};