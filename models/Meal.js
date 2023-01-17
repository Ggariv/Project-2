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
        meal_country: {
            type: DataTypes.TEXT,
            allowNull: false
            },
        ing_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'ingredient',
                key: 'id'
                }
            },
        qty_amount: {
            type: DataTypes.INTEGER,
            allowNull: false
            },
        meal_instructions: {
            type: DataTypes.TEXT,
            allowNull: false
            }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'meal'
    }
    )

module.exports = Meal;