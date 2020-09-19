const loader = require('./loaders');
const config = require('./config');

function startServer() {

    const app = loader();
    const port = config.PORT;
    app.listen(port, () => console.log(`Syndicate::Users microservice started, listening on port ${port}.`));

}

startServer();
