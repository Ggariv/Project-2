const User = require('./User');
const Meal = require('./Meal');
const Ingredient = require('./Ingredient');
const Quantity = require('./Quantity');
const RefTable = require('./RefTable');
const FavTable = require('./FavTable');

// User.hasMany(Post, {
//     foreignKey: 'user_id'
//     });

// Post.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: "cascade"
//     });

// Comment.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: "cascade"
//     });

// Comment.belongsTo(Post, {
//     foreignKey: 'post_id',
//     onDelete: "cascade"
//     });

// User.hasMany(Comment, {
//     foreignKey: 'user_id',
//     onDelete: "cascade"
//     });

// Post.hasMany(Comment, {
//     foreignKey: 'post_id',
//     onDelete: "cascade"
//     });

module.exports = { User, Meal, Ingredient, Quantity, RefTable, FavTable };