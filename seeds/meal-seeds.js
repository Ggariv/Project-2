const { Meal } = require('../models');

const MealData = [
    {
        meal_title:'Salted Apple',
        meal_country: 'USA',
        ing_id: 3,
        qty_amount: 1,
        meal_instructions: "boil apple and add salt"
    },
    {
        meal_title:'Butter salt',
        meal_country: 'USA',
        ing_id: 2,
        qty_amount: 1,
        meal_instructions: "boil butter in a pan and drowse with sal"
    },
    ]

const seedMeal = () => Meal.bulkCreate(MealData);
module.exports = seedMeal;