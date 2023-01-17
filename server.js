const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const session = require('express-session');
const sess = {
    secret: 'Super secret secret',
    resave: false,
    saveUninitialized: true,
    };

// // handlebars
// const exphbs = require('express-handlebars');
// const hbs = exphbs.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sess));
app.use(routes);

// // handlebars
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// turn on connection to db and server
sequelize.sync({ alter: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
    });