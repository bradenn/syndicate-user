let app = require('express')();
const bodyParser = require('body-parser');
const routes = require("../routes");

function configureServer() {
    app.use(bodyParser.json());
    app.use('/api/v1', routes);
    return app;
}

module.exports = configureServer;
