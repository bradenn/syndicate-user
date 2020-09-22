import mongoose from 'mongoose';

const requiredKeys = ['username', 'firstname', 'lastname', 'email', 'password'];
export default {
    create(req, res, next) {
        const requestBody = !!req.body ? req.body : {}, requestKeys = Object.keys(requestBody);

        /* Ensure the request body contains required object keys */
        if (!requiredKeys.every(key => requestKeys.includes(key))
            || requestKeys.length > requiredKeys.length)
            return next(new Error('Invalid request.'))

        next();
    },
    get(req, res, next) {
        const id = req.params.id;
        if (!id) return next(new Error('Invalid request.'))
        if (id.length < 24) return next(new Error('Invalid userId.'))

        next();
    },
    update(req, res, next) {
        const id = req.params.id;
        if (!id) return next(new Error('Invalid request.'))
        if (id.length < 24) return next(new Error('Invalid userId.'))

        const requestBody = !!req.body ? req.body : {}, requestKeys = Object.keys(requestBody);

        if (!requestKeys.every(key => requiredKeys.includes(key)))
            return next(new Error('Invalid request.'))

        next();
    }
}
