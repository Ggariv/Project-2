const router = require('express').Router();
const { Ingredient, Quantity } = require('../../models');
// const withAuth = require('../../utils/auth');

// GET all Ingredients
router.get('/', (req, res) => {
    Ingredient.findAll({
        attributes: ['id', 'ing_name', 'qty_id'],
        include: [
            {
                model: Quantity,
            },
            ]
        })
    .then(dbIngredientData => res.json(dbIngredientData.reverse()))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
        })
    });

// GET a single ingredient
router.get('/:id', (req, res) => {
    Ingredient.findOne({
        where: {
            id: req.params.id
            },
        })
    .then(dbIngredientData => {
        if (!dbIngredientData) {
            res.status(404).json({ message: 'No user found with this email' });
            return;
            }
        res.json(dbIngredientData);
        })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
    })

// CREATE an Ingredient
router.post('/', (req, res) => {
    Ingredient.create({ 
        ing_name: req.body.ing_name,
        qty_id: req.body.qty_id,
        })
    .then(dbIngredientData => res.json(dbIngredientData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err); 
        });
    });

// UPDATE an Ingredient
router.put('/:id', (req, res) => {
    Ingredient.update(
        {
            ing_name: req.body.ing_name,
            qty_id: req.body.qty_id,
        },
        {
            where: {
                id: req.params.id
                }
        }
        )
    .then(dbIngredientData => {
        if (!dbIngredientData) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
            }
        res.json(dbIngredientData);
        })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
        })
    });

// DELETE an Ingredient
router.delete('/:id', (req, res) => {
    Ingredient.destroy({
        where: {
            id: req.params.id
            }
        })
    .then(dbIngredientData => {
        if (!dbIngredientData) {
            res.status(404).json({ message: 'No user found with this id' })
            return;
            }
        res.json(dbIngredientData);
        })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
        })
    });

module.exports = router;