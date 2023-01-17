const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Country extends Model {}

Country.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
            },
        cty_name: {
            type: DataTypes.STRING,
            allowNull: false
            },
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        modelName: 'country'
    }
    )

module.exports = Country;