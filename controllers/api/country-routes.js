const router = require('express').Router();
const { Country } = require('../../models');

// GET all countries
router.get('/', (req, res) => {
    Country.findAll({
        attributes: ['id', 'cty_name'],
        })
    .then(dbCountryData => res.json(dbCountryData.reverse()))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
        })
    });

// GET a single country
router.get('/:id', (req, res) => {
    Country.findOne({
        where: {
            id: req.params.id
            },
        })
    .then(dbCountryData => {
        if (!dbCountryData) {
            res.status(404).json({ message: 'No country found in the data' });
            return;
            }
        res.json(dbCountryData);
        })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
    })

// CREATE a quantity
router.post('/', (req, res) => {
    Country.create({ 
        cty_name: req.body.cty_name,
        })
    .then(dbCountryData => res.json(dbCountryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err); 
        });
    });

module.exports = router;