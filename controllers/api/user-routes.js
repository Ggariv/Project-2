const router = require('express').Router();
const { User } = require('../../models');

// GET all users
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

// GET a single user
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
            },
        // include: [
        //     {
        //         model: RefTable,
        //         attributes: ['id', 'meal_id', 'qty_value']
        //     },
        //     ]
        })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this email' });
            return;
            }
        res.json(dbUserData);
        })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
    })

// POST to CREATE an user
router.post('/', (req, res) => {
    // expects {email: 'lernantino@gmail.com', password: 'password1234'}
    User.create({
        email: req.body.email,
        password: req.body.password
        })
    .then(dbUserData => {
        req.session.save(() => {
            req.session.email = dbUserData.email;
            req.session.loggedIn = true;
            res.json(dbUserData);
            });
        })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
        });
    });

// POST to LOGIN
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
            }
        })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(400).json({ message: 'Incorrect username or password!' });
            return;
            }
        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect username or password!' });
            return;
            }
        req.session.save(() => {
            req.session.email = dbUserData.email;
            req.session.loggedIn = true;
            res.json({ user: dbUserData, message: 'You are now logged in!' });
            })
        })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
        })
    });

// POST to LOGOUT
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
            });
        }
    else {
        res.status(404).end();
        }
    });

// // PUT to UPDATE
// router.put('/:id', (req, res) => {
//     // if req.body has exact key/value pairs to match the model, you can just use `req.body` instead
//     User.update(req.body, {
//         individualHooks: true,
//         where: {
//             id: req.params.id
//             }
//         })
//     .then(dbUserData => {
//         if (!dbUserData[0]) {
//             res.status(404).json({ message: 'No user found with this id' });
//             return;
//             }
//         res.json(dbUserData);        
//         })
//     .catch(err => {
//         console.log(err); 
//         res.status(500).json(err);
//         })
//     });
    
// // DELETE to DESTROY ACCOUNT
// router.delete('/:id', (req, res) => {
//     User.destroy({
//         where: {
//             id: req.params.id
//             }
//         })
//     .then(dbUserData => {
//         if (!dbUserData) {
//             res.status(404).json({ message: 'No user found with this id' })
//             return;
//             }
//         res.json(dbUserData);
//         })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//         })
//     });

module.exports = router;