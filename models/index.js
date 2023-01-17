const User = require('./User');
const Meal = require('./Meal');
const Ingredient = require('./Ingredient');
const Quantity = require('./Quantity');
const RefTable = require('./RefTable');
// const FavTable = require('./FavTable');

User.hasMany(RefTable, {
    foreignKey: 'user_id',
    });

RefTable.belongsTo(User, {
    foreignKey: 'user_id',
    })

// User.hasMany(Meal, {
//     foreignKey: 'user_id',
//     });

// RefTable.belongsTo(User, {
//     foreignKey: 'user_id',
//     })

Meal.belongsTo(RefTable, {
    foreignKey: 'meal_id',
    onDelete: "cascade"
    })

RefTable.hasMany(Meal, {
    foreignKey: 'meal_id',
    onDelete: "cascade"
    });

Meal.hasMany(Ingredient, {
    foreignKey: 'ing_id',
    onDelete: "cascade"
    });

Ingredient.belongsTo(Meal, {
    foreignKey: 'ing_id',
    onDelete: "cascade"
    })

Ingredient.hasOne(Quantity, {
    foreignKey: 'qty_id',
    onDelete: "cascade"
    });

Quantity.belongsTo(Ingredient, {
    foreignKey: 'qty_id',
    onDelete: "cascade"
    });

// User.hasOne(FavTable, {
//     foreignKey: 'id',
//     });

// Meal.belongsTo(FavTable, {
//     foreignKey: 'id',
//     })

module.exports = { User, Meal, Ingredient, Quantity, RefTable };