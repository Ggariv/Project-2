const { Meal } = require('../models');

const MealData = [
    {
        meal_title:'Salted Apple',
        meal_img:'Link1',
        cty_name: 'USA',
        meal_instructions: "boil apple and add salt",
        views: 1,
    },
    {
        meal_title:'Butter salt',
        meal_img:'Link2',
        cty_name: 'USA', 
        meal_instructions: "boil butter in a pan and drowse with sal",
        views: 10,
    },
    ]

const seedMeal = () => Meal.bulkCreate(MealData);
module.exports = seedMeal;