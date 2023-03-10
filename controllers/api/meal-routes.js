const router = require('express').Router();
const { Meal, RefTable, Ingredient } = require('../../models/index');

// GET all Meals
router.get('/', (req, res) => {
    Meal.findAll({
        attributes: ['id', 'meal_title', 'meal_img', 'cty_name', 'meal_instructions', 'views'],
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
        meal_img: req.body.meal_img,
        cty_name: req.body.cty_name,
        meal_instructions: req.body.meal_instructions,
        views: req.body.views,
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
            meal_img: req.body.meal_img,
            cty_name: req.body.cty_name,
            meal_instructions: req.body.meal_instructions,
            views: req.body.views,
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

// Meal routes
const getMeal = (req, res) => {
    Meal.findByPk(req.params.id, {
        include: {
            model: RefTable,
            },
            })
        .then((result) => {
        res.status(200).send(result);
        //const mealId = result.meal_id;
        //console.log(result);

        // meal_ing_ref.findAll(mealId).then((result) => {
        //   console.log(result);
        // });
        });
    };

router.route('/aa/:id').get(getMeal);

module.exports = router;