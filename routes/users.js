const express = require('express');
const controller = require('../controllers/users');
let router = express.Router();

router.get('/:id', (req, res) => {
    controller.getUser(req.params.id)
        .then(user => res.json(user))
        .catch(error => res.json(error));
});

router.post('/', (req, res) => {
    const requiredKeys = ['username', 'firstname', 'lastname', 'email', 'password'];
    const requestBody = !!req.body?req.body:{};
    const requestKeys = Object.keys(requestBody);

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

module.exports = router;
