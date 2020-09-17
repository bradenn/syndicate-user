const express = require('express');
const controller = require('../controllers/users');
let router = express.Router();

/**
 * Create User
 * POST /api/v1/users
 */
router.post('/', (req, res) => {
    const requiredKeys = ['username', 'firstname', 'lastname', 'email', 'password'],
        requestBody = !!req.body ? req.body : {}, requestKeys = Object.keys(requestBody);

    /* Ensure the request body contains required object keys */
    if (!requiredKeys.every(key => requestKeys.includes(key))
        || requestKeys.length > requiredKeys.length)
        return res.status(400);

    /* Emplace user into database */
    controller.createUser(requestBody)
        .then(status => res.json(status))
        .catch(error => res.status(409).json({
            message: 'Conflict',
            error: error
        }));
});

/**
 * Get User
 * GET /api/v1/users/:id
 */
router.get('/:id', (req, res) => {
    controller.getUser(req.params.id)
        .then(user => res.json(user))
        .catch(error => res.json(error));
});

/**
 * Update User
 * PUT /api/v1/users/:id
 */
router.put('/:id', (req, res) => {
    const allowedKeys = ['username', 'firstname', 'lastname', 'email', 'password'],
        requestBody = !!req.body ? req.body : {}, requestKeys = Object.keys(requestBody);

    /* Ensure the request body contains only allowed object keys */
    if (!requestKeys.every(key => allowedKeys.includes(key))
        || requestKeys.length > allowedKeys.length)
        return res.status(400);

    /* Pass clean arguments to database controller to update */
    controller.updateUser(req.params.id, requestBody)
        .then(user => res.json(user))
        .catch(error => res.json(error));
});

/**
 * Delete User
 * DELETE /api/v1/users/:id
 */
router.delete('/:id', (req, res) => {
    controller.deleteUser(req.params.id)
        .then(user => res.json(user))
        .catch(error => res.json(error));
});


module.exports = router;
