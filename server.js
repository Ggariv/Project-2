const express = require('express');
const helpers = require('./utils/helpers');
const path = require('path');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const session = require('express-session');
const sess = {
    secret: 'Super secret secret',
    resave: false,
    saveUninitialized: true,
    };


// handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });

// Tailwind
const tailwind = require('tailwind');


const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(session(sess));
app.use(routes);


// turn on connection to db and server
sequelize.sync({ alter: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening' + PORT));
    });