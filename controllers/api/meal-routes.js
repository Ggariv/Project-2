const router = require('express').Router();
const { Meal, Ingredient, Country } = require('../../models');
// const withAuth = require('../../utils/auth');

// GET all Meals
router.get('/', (req, res) => {
    Meal.findAll({
        attributes: ['id', 'meal_title', 'cty_id', 'ing_id', 'meal_instructions'],
        include: [
            {
                model: Country,
            },
            {
                model: Ingredient,
            }
            ]
        })
    .then(dbMealData => res.json(dbMealData.reverse()))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
        })
    });

// GET a single ingredient
router.get('/:id', (req, res) => {
    Meal.findOne({
        where: {
            id: req.params.id
            },
        })
    .then(dbMealData => {
        if (!dbMealData) {
            res.status(404).json({ message: 'No user found with this email' });
            return;
            }
        res.json(dbMealData);
        })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
    })

// CREATE a Meal
router.post('/', (req, res) => {
    Meal.create({ 
        meal_title: req.body.meal_title,
        cty_id: req.body.cty_id,
        ing_id: req.body.ing_id,
        meal_instructions: req.body.meal_instructions,
        })
    .then(dbMealData => res.json(dbMealData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err); 
        });
    });

// UPDATE a meal
router.put('/:id', (req, res) => {
    Meal.update(
        {
            meal_title: req.body.meal_title,
            cty_id: req.body.cty_id,
            ing_id: req.body.ing_id,
            meal_instructions: req.body.meal_instructions,
        },
        {
            where: {
                id: req.params.id
                }
        }
        )
    .then(dbMealData => {
        if (!dbMealData) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
            }
        res.json(dbMealData);
        })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
        })
    });

// DELETE a meal
router.delete('/:id', (req, res) => {
    Meal.destroy({
        where: {
            id: req.params.id
            }
        })
    .then(dbMealData => {
        if(!dbMealData) {
            res.status(404).json({ message: 'No comment found with this id'});
            return;
            }
        res.json(dbMealData);
        })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
        })
    });

module.exports = router;