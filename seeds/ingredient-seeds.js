const { Ingredient } = require('../models');

const ingredientData = [
    {
        ing_name:'Bread',
        ing_img:'Link1',
    },
    {
        ing_name:'Tomato',
        ing_img:'Link2',
    },
    {
        ing_name:'Lettuce',
        ing_img:'Link3',
    },
    {
        ing_name:'Butter',
        ing_img:'Link4',
    },
    {
        ing_name:'Cheese',
        ing_img:'Link5',
    },
    {
        ing_name:'Ham',
        ing_img:'Link6',
    },
    {
        ing_name:'Meat',
        ing_img:'Link7',
    },
    {
        ing_name:'Onion',
        ing_img:'Link8',
    },
    {
        ing_name:'Rice',
        ing_img:'Link9',
    },
    {
        ing_name:'Egg',
        ing_img:'Link10',
    },
    ]

const seedIngredient = () => Ingredient.bulkCreate(ingredientData);
module.exports = seedIngredient;