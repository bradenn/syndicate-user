let Users = require('../models/users');

/* Insert user into database */
let createUser = (req, res, next) => {
    const requiredKeys = ['username', 'firstname', 'lastname', 'email', 'password'],
        requestBody = !!req.body ? req.body : {}, requestKeys = Object.keys(requestBody);

    /* Ensure the request body contains required object keys */
    if (!requiredKeys.every(key => requestKeys.includes(key))
        || requestKeys.length > requiredKeys.length)
        return res.status(400);

    /* Emplace user into database */
    Users.create(requestBody)
        .then(user => res.json(user))
        .catch(error => res.status(409).json({
            message: 'Conflict',
            error: error
        }));
}

/* Get user from database */
let getUser = (req, res, next) => {
    Users.findById(req.params.id)
        .then(user => res.json(user))
        .catch(error => res.json(error));
}

/* Update user info in database */
let updateUser = (req, res, next) => {
    const allowedKeys = ['username', 'firstname', 'lastname', 'email', 'password'],
        requestBody = !!req.body ? req.body : {}, requestKeys = Object.keys(requestBody);

    /* Ensure the request body contains only allowed object keys */
    if (!requestKeys.every(key => allowedKeys.includes(key))
        || requestKeys.length > allowedKeys.length)
        return res.status(400);

    /* Pass clean arguments to database controller to update */
    Users.findOneAndUpdate({_id: req.params.id}, req.body).exec()
        .then(user => res.json(user))
        .catch(error => res.json(error));
}

/* Delete user from database */
let deleteUser = (req, res, next) => {
    Users.findOneAndDelete({_id: req.params.id})
        .then(user => res.json(user))
        .catch(error => res.json(error));

}

module.exports = {createUser, getUser, updateUser, deleteUser};
