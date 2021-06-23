const express = require('./services/express/index');
const routes = require('./api/index');
const mongoose = require('./services/mongoose/index')
const {mongo} = require('./config');
const app = express(routes);

mongoose.connect(
    mongo.uri,
    { useUnifiedTopology: true,  useNewUrlParser: true},
    () => console.log('Connected to db')
)

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
})

module.exports = app;