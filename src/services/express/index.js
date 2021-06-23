const express = require('express')

module.exports = (routes) =>{
    const app = express();

    app.use(express.json());
    app.use(routes);

    return app
}