const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const recipeRoutes = require('./recipe-routes.js');
const rateLimit = require('express-rate-limit');
const express = require('express');
const app = express();

// npm express rate limit
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 20, // Limit each IP to 10 requests per `window` (here, per minute)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    });
    // Apply the rate limiting middleware to all requests
 
app.use(limiter);

router.use('/api', limiter, apiRoutes);
router.use('/', limiter, homeRoutes);
router.use('/recipes', limiter, recipeRoutes);
router.use((req, res) => {
    res.status(404).end();
    });

module.exports = router;