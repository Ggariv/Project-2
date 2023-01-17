const router = require('express').Router();
const { Quantity } = require('../../models');
// const withAuth = require('../../utils/auth');

// GET all quantities
router.get('/', (req, res) => {
    Quantity.findAll({
        attributes: ['id', 'qty_title'],
        order: [['created_at', 'DESC']],  
        })
    .then(dbQuantityData => res.json(dbQuantityData.reverse()))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
        })
    });

// GET a single quantity
router.get('/:id', (req, res) => {
    Quantity.findOne({
        where: {
            id: req.params.id
            },
        })
    .then(dbQuantityData => {
        if (!dbQuantityData) {
            res.status(404).json({ message: 'No user found with this email' });
            return;
            }
        res.json(dbQuantityData);
        })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
    })

// CREATE a quantity
router.post('/', (req, res) => {
    Quantity.create({ 
        qty_title: req.body.qty_title,
        })
    .then(dbQuantityData => res.json(dbQuantityData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err); 
        });
    });

module.exports = router;
