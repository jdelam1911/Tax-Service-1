const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/User');

// Register
exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    let hashedPassword = await bcrypt.hash(password, 10);
    try {
        await User.create({ username, email, password: hashedPassword });
        res.redirect('/auth/login');
    } catch (err) {
        res.redirect('/auth/register');
    }
};

// Login
exports.login = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/clients',
        failureRedirect: '/auth/login',
        failureFlash: true
    })(req, res, next);
};

// Logout
exports.logout = (req, res) => {
    req.logout();
    res.redirect('/auth/login');
};
