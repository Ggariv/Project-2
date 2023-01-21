const seedUsers = require('./user-seeds');
const seedIngredient = require('./ingredient-seeds');
const seedMeal = require('./meal-seeds');
const seedRefTable = require('./reftable-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    await seedIngredient();
    console.log('\n----- INGREDIENTS SEEDED -----\n');
    await seedMeal();
    console.log('\n----- MEALS SEEDED -----\n');
    await seedRefTable();
    console.log('\n----- REFTABLE SEEDED -----\n');
    process.exit(0);
    };

seedAll();