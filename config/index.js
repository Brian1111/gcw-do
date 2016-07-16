if (process.env.NODE_ENV == 'production') {
    // Offer production stage environment variables
    module.exports = {
        host: process.env.host || "",
        dbURI: process.env.dbURI
    }
} else {
    // Offer dev stage settings and data
    module.exports = require('./development.json');
}
