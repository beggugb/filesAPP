'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Alumnos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codigo: {
        type: Sequelize.STRING
      },
      nombres: {
        type: Sequelize.STRING
      },
      pais: {
        type: Sequelize.STRING
      },
      ciudad: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.STRING
      },
      filename: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      observaciones: {
        type: Sequelize.STRING
      },
      facultad: {
        type: Sequelize.STRING
      },
      carrera: {
        type: Sequelize.STRING
      },
      fci: {
        type: Sequelize.STRING
      },
      fbachiller: {
        type: Sequelize.STRING
      },
      fegreso: {
        type: Sequelize.STRING
      },
      flicenciatura: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Alumnos');
  }
};