function isAdmin(req, res, next) {
    if(req.headers['x-authorization']) {
        next();
    } else {
        res.status(401).send('Please log in');
    }
}

module.exports = {
    isAdmin
}