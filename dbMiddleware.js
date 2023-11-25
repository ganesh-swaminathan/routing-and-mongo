const connectToMongoDB = require('./db');

async function dbMiddleware(req, res, next) {
    try {
        const dbConnection = await connectToMongoDB();
        req.dbConnection = dbConnection;
        next();
    } catch (err) {
        next(err);
    }
}

module.exports = dbMiddleware;