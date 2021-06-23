const dotenv = require('dotenv');
dotenv.config();

const config = {
    mongo: {
        uri: process.env.MONGO_URL
    }
}

module.exports = config;