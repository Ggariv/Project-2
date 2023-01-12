const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// GET /api/users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
        })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
    });

// GET /api/users/1

// POST /api/users

// POST to login

// POST to logout

// PUT to update meal

// DELETE a meal

module.exports = router;