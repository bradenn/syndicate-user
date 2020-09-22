
const requiredKeys = ['username', 'password'];

export default {
    user(req, res, next) {
        const requestBody = !!req.body ? req.body : {}, requestKeys = Object.keys(requestBody);

        /* Ensure the request body contains required object keys */
        if (!requiredKeys.every(key => requestKeys.includes(key))
            || requestKeys.length > requiredKeys.length)
            return next(new Error('Invalid request.'))

        next();
    }
}
