const adminMiddleware = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        return next();
    }
    res.status(403).json({ msg: 'Access denied. Admins only.' });
};

module.exports = adminMiddleware;
