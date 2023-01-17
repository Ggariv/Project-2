const seedUsers = require('./user-seeds');
const seedQuantity = require('./quantity-seeds');
const seedIngredient = require('./ingredient-seeds');
const seedMeal = require('./meal-seeds');
// const seedRefTable = require('./recipes');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    await seedQuantity();
    console.log('\n----- QUANTITIES SEEDED -----\n');
    await seedIngredient();
    console.log('\n----- INGREDIENTS SEEDED -----\n');
    await seedMeal();
    console.log('\n----- MEALS SEEDED -----\n');
    // await seedRefTable();
    // console.log('\n----- POSTS SEEDED -----\n');
    process.exit(0);
    };

seedAll();