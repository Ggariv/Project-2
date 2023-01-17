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
        cty_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'country',
                key: 'id'
                }
            },
        ing_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'ingredient',
                key: 'id'
                }
            },
        meal_instructions: {
            type: DataTypes.TEXT,
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