const router = require('express').Router();
const sequelize = require('../config/connection');
// const withAuth = require('../utils/auth');
const { RefTable, Meal, Ingredient, User } = require('../models');

router.get('/', (req,res) => {
    res.render('recipes', {loggedin: true});
    })

module.exports = router;