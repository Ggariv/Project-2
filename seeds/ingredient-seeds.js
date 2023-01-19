const { Ingredient } = require('../models');

const ingredientData = [
    {
        ing_name:'Salt',
        ing_img:'Link1',
    },
    {
        ing_name:'Butter',
        ing_img:'Link2',
    },
    {
        ing_name:'Apples',
        ing_img:'Link3',
    },
    ]

const seedIngredient = () => Ingredient.bulkCreate(ingredientData);
module.exports = seedIngredient;