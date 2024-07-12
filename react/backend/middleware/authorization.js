const jwt = require('jsonwebtoken');

function authorize(role) {
    return (req, res, next) => {
        const token = req.header('x-auth-token');
        if (!token) return res.status(401).send('No token provided.');

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded || (role && decoded.role !== role)) return res.status(403).send('Forbidden.');

        req.user = decoded;
        next();
    }
}

module.exports = authorize;