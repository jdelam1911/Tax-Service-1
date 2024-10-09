require('dotenv').config();
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const passport = require('passport');
const flash = require('connect-flash');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const db = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const clientRoutes = require('./routes/clientRoutes');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Handlebars as Template Engine
app.engine('hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', 'hbs');

// Sessions
app.use(session({
    secret: process.env.SESSION_SECRET,
    store: new SequelizeStore({ db: db }),
    resave: false,
    saveUninitialized: false
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Flash messages
app.use(flash());

// Routes
app.use('/auth', authRoutes);
app.use('/clients', clientRoutes);

// Start server
db.sync().then(() => {
    app.listen(process.env.PORT || 3000, () => console.log('Server running...'));
});
