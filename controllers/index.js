const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const recipeRoutes = require('./recipe-routes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/recipes', recipeRoutes);
router.use((req, res) => {
    res.status(404).end();
    });

module.exports = router;