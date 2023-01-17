const User = require('./User');
const RefTable = require('./RefTable');
const Country = require('./Country');
const Meal = require('./Meal');
const Ingredient = require('./Ingredient');
const Quantity = require('./Quantity');

// User <--> RefTable
User.hasMany(RefTable, {
    foreignKey: 'user_id',
    });

RefTable.belongsTo(User, {
    foreignKey: 'user_id',
    })

// RefTable <--> Meal
RefTable.hasMany(Meal, {
    foreignKey: 'meal_id'
    });

Meal.belongsTo(RefTable, {
    foreignKey: 'meal_id'
    })

// Meal <--> Country
Meal.hasOne(Country, {
    foreignKey: 'cty_id'
    })

Country.belongsTo(Meal, {
    foreignKey: 'cty_id'
    });

// Meal <--> Ingredient
Meal.hasMany(Ingredient, {
    foreignKey: 'ing_id'
    });

Ingredient.belongsTo(Meal, {
    foreignKey: 'ing_id'
    });

// Ingredient  <--> Quantity
Ingredient.hasOne(Quantity, {
    foreignKey: 'qty_id'
    });

Quantity.belongsTo(Ingredient, {
    foreignKey: 'qty_id'
    });

module.exports = { User, Quantity, Ingredient, Country, Meal, RefTable };