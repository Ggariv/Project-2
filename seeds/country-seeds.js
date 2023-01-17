const { Country } = require('../models');

const countryData = [
    {
        cty_name: 'USA'
    },
    {
        cty_name: 'India'
    },
    {
        cty_name: 'China'
    }
    ]

const seedCountry = () => Country.bulkCreate(countryData);
module.exports = seedCountry;