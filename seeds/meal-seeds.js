const { Meal } = require('../models');

const MealData = [
    {
        meal_title:'Salted Apple',
        cty_id: 1, 
        ing_id: 3,
        meal_instructions: "boil apple and add salt"
    },
    {
        meal_title:'Butter salt',
        cty_id: 1, 
        ing_id: 2,
        meal_instructions: "boil butter in a pan and drowse with sal"
    },
    ]

const seedMeal = () => Meal.bulkCreate(MealData);
module.exports = seedMeal;