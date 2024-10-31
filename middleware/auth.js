module.exports = {
    ensureAuthintacted: (req, res, next) => {
        if (req.ensureAuthintacted()) {
            return next();
        }
        res.redirect('/auth/login');
    }
}