const { Ingredient } = require('../models');

const ingredientData = [
    {
        ing_name:'Salt',
    },
    {
        ing_name:'Butter',
    },
    {
        ing_name:'Apples',
    },
    ]

const seedIngredient = () => Ingredient.bulkCreate(ingredientData);
module.exports = seedIngredient;