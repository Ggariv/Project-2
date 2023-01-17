const { Quantity } = require('../models');

const quantityData = [
    {
        qty_title: 'tblsp'
    },
    {
        qty_title: 'cup'
    },
    {
        qty_title: 'units'
    },
    {
        qty_title: 'dash'
    },
    {
        qty_title: 'gr'
    },
    {
        qty_title: 'lb'
    },
    {
        qty_title: 'kg'
    },
    ]

const seedQuantity = () => Quantity.bulkCreate(quantityData);
module.exports = seedQuantity;