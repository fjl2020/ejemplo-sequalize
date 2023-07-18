'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class registries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  registries.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
  }, 
    observaciones: DataTypes.STRING,
    data: DataTypes.STRING,
    validado: DataTypes.STRING,
    inicio:DataTypes.INTEGER,
    final:DataTypes.INTEGER,
    item: DataTypes.INTEGER,
    work: DataTypes.INTEGER,
    empresa: DataTypes.INTEGER,
    created_by: DataTypes.INTEGER,
    updated_by: DataTypes.INTEGER
    
  }, {
    sequelize,
    modelName: 'registries',
    timestamps: false
  });
  return registries;
};