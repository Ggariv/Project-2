const { Meal } = require('../models');

const MealData = [
    {
        meal_title:'Salted Apple',
        cty_name: 'USA',
        meal_instructions: "boil apple and add salt"
    },
    {
        meal_title:'Butter salt',
        cty_name: 'USA', 
        meal_instructions: "boil butter in a pan and drowse with sal"
    },
    ]

const seedMeal = () => Meal.bulkCreate(MealData);
module.exports = seedMeal;