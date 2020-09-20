import bodyParser from 'body-parser';
import config from '../config';
import routes from '../routes';

export default app => {

    /* System Health Checks */
    app.route('/status')
        .get((req, res) => res.status(200).end())
        .head((req, res) => res.status(200).end());

    /* Allow the API to receive JSON */
    app.use(bodyParser.json());

    /* Helps with reverse proxy */
    app.enable('trust proxy');

    /* Define endpoint prefix */
    app.use(config.API_PREFIX, routes);

    /* Catch all unhandled requests */
    app.use((req, res, next) => {
        const err = new Error('Not Found');
        err['status'] = 404;
        next(err);
    });

    /* Handler all errors */
    app.use((err, req, res, next) => {
        res
            .status(err.status || 500)
            .json({
                error: err.message
            });
    });

};

