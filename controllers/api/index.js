const router = require('express').Router();
const userRoutes = require('./user-routes');
const qtyRoutes = require('./quantity-routes');
const ingRoutes = require('./ingredient-routes');
const ctyRoutes = require('./country-routes');
const mealRoutes = require('./meal-routes');
const reftableRoutes = require('./reftable-routes');

// router.use
router.use('/users', userRoutes);
router.use('/quantities', qtyRoutes);
router.use('/ingredients', ingRoutes);
router.use('/countries', ctyRoutes);
router.use('/meals', mealRoutes);
router.use('/recipes', reftableRoutes);

module.exports = router;