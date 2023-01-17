const router = require('express').Router();
const { RefTable, Meal, Quantity, Ingredient, User } = require('../../models');
const sequelize = require('../../config/connection');
// const withAuth = require('../../utils/auth');

// GET all recipes
router.get('/', (req, res) => {
    RefTable.findAll({
        attributes: ['id', 'meal_id', 'user_id'],
        order: [['created_at', 'DESC']],  
        include: [
            {
                model: Meal,
                attributes: ['id', 'meal_title', 'meal_country', 'qty_amount', 'meal_instructions'],
                include: {
                    model: Ingredient,
                    attributes: ['ing_id'],
                    include: {
                        model: Quantity,
                        attributes: ['qty_id']
                        }
                    },
            },
            {
                model: User,
                attributes: ['email'],
            }
            ]
        })
    .then(dbRecipeData => res.json(dbRecipeData.reverse()))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
        })
    });

// GET a single recipe
router.get('/:id', (req, res) => {
    RefTable.findOne({
        where: {
            id: req.params.id
            },
        attributes: ['id', 'meal_id', 'user_id'],
        include: [
            {
                model: Meal,
                attributes: ['id', 'meal_title', 'meal_country', 'qty_amount', 'meal_instructions'],
                include: {
                    model: Ingredient,
                    attributes: ['ing_id'],
                    include: {
                        model: Quantity,
                        attributes: ['qty_id']
                        }
                    },
            },
            {
                model: User,
                attributes: ['email'],
            }
            ]
        })
    .then(dbRecipeData => {
        if (!dbRecipeData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
            }
        res.json(dbRecipeData);
        })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
        })
    });

// CREATE a recipe
router.post('/', (req, res) => {
    RefTable.create({ 
        meal_id: req.body.meal_id,
        user_id: req.session.user_id
        })
    .then(dbRecipeData => res.json(dbRecipeData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err); 
        });
    });

// UPDATE a recipe
router.put('/:id', (req, res) => {
    Post.update(
        {
            meal_id: req.body.meal_id,
            user_id: req.session.user_id
        },
        {
            where: {
                id: req.params.id
                }
        }
        )
    .then(dbRecipeData => {
        if (!dbRecipeData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
            }
        res.json(dbRecipeData);
        })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
    });

// DELETE a recipe
router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id 
            }
        })
    .then(dbRecipeData => {
        if (!dbRecipeData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
            }
        res.json(dbRecipeData);
        })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
    })

module.exports = router;