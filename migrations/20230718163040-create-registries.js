'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('registries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      observaciones: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.STRING
      },
      validado: {
        type: Sequelize.STRING
      },
      item: {
        type: Sequelize.INTEGER
      },
      work: {
        type: Sequelize.INTEGER
      },
      empresa: {
        type: Sequelize.INTEGER
      },
      create_by: {
        type: Sequelize.INTEGER
      },
      update_by: {
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('registries');
  }
};