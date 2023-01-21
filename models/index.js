const User = require('./User');
const RefTable = require('./RefTable');
const Meal = require('./Meal');
const Ingredient = require('./Ingredient');

// User <--> RefTable
User.hasMany(RefTable, {
    foreignKey: 'user_id',
    });

RefTable.belongsTo(User, {
    foreignKey: 'user_id',
    })

// RefTable <--> Meal
Meal.hasOne(RefTable, {
    foreignKey: 'meal_id'
    });

RefTable.belongsTo(Meal, {
    foreignKey: 'meal_id'
    })

// RefTable <--> Ingredient
RefTable.hasMany(Ingredient, {
    foreignKey: 'ing_id'
    });

Ingredient.belongsTo(RefTable, {
    foreignKey: 'ing_id'
    });

module.exports = { User, Ingredient, Meal, RefTable };