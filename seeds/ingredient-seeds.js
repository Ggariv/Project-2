const { Ingredient } = require('../models');

const ingredientData = [
    {
        ing_name:'Salt',
        qty_id: 5
    },
    {
        ing_name:'Butter',
        qty_id: 6
    },
    {
        ing_name:'Apples',
        qty_id: 7
    },
    ]

const seedIngredient = () => Ingredient.bulkCreate(ingredientData);
module.exports = seedIngredient;