const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class FavTable extends Model {}

FavTable.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
            },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
                }
            },
        fav_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'meal',
                key: 'id'
                }
            },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'favtable'
    }
    )

module.exports = FavTable;