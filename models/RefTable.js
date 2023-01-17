const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RefTable extends Model {}

RefTable.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
            },
        meal_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'meal',
                key: 'id'
                }
            },
        qty_value: {
            type: DataTypes.INTEGER,
            allowNull: false
            },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
                }
            }
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        underscored: true,
        modelName: 'reftable'
    }
    )

module.exports = RefTable;