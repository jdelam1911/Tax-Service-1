module.exports = {
    ensureAuthenticated: (req, res, next) => {
        if (req.ensureAuthenticated()) {
            return next();
        }
        res.redirect('/auth/login');
    }
}