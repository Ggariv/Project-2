const { RefTable } = require('../models');

const RefTableData = [
    {
		"meal_id": 1,
		"ing_id": 2,
		"qty_title": "kg",
		"qty_value": 10,
		"user_id": 1,
    },
    {
		"meal_id": 2,
		"ing_id": 1,
		"qty_title": "lb",
		"qty_value": 200,
		"user_id": 3,
    },
    ]

const seedRefTable = () => RefTable.bulkCreate(RefTableData);
module.exports = seedRefTable;