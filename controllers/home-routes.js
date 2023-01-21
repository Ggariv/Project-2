const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('login');
    });

router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
        }
    res.render('login');
    });
module.exports = router;
