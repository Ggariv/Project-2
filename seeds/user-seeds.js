const { User } = require('../models');

const userData = [
    {
        email:'user1@gmail.com',
        password:'test1'
    },
    {
        email:'user2@gmail.com',
        password:'test2'
    },
    {
        email:'user3@gmail.com',
        password:'test3'
    }
    ]

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;