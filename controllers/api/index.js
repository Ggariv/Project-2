const router = require('express').Router();
const userRoutes = require('./user-routes');
const ingRoutes = require('./ingredient-routes');
const mealRoutes = require('./meal-routes');
const reftableRoutes = require('./reftable-routes');

// router.use
router.use('/users', userRoutes);
router.use('/ingredients', ingRoutes);
router.use('/meals', mealRoutes);
router.use('/recipes', reftableRoutes);

module.exports = router;