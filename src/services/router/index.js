const express = require('express')
const cors = require('cors')

module.exports = () =>{
    const app = express.Router();

    app.use(cors());

    return app
}