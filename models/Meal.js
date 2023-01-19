const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Meal extends Model {}

Meal.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
            },
        meal_title: {
            type: DataTypes.STRING,
            allowNull: false
            },
        meal_img: {
            type: DataTypes.STRING,
            allowNull: false
            },
        cty_name: {
            type: DataTypes.STRING,
            allowNull: false
            },
        meal_instructions: {
            type: DataTypes.TEXT,
            allowNull: false
            },
        views: {
            type: DataTypes.INTEGER,
            allowNull: false
            }
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        modelName: 'meal'
    }
    )

module.exports = Meal;