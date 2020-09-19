const fs = require('fs');
const jwt = require('jsonwebtoken');
const privateKey = fs.readFileSync('private.key');
const Users = require('../models/users');


function authenticateUser(req, res, next) {
    Users.authenticate(req.body.username, req.body.password)
        .then((output) => {
            generateToken(output._id)
                .then(token => {
                    res.status(201).json({token: token});
                })
        })
        .catch((error) => {
            return res.status(401).json({message: 'Invalid Credentials', error: error})
        });

}

/**
 * Generate Session Token
 * @param {_id} userId Unique identifier
 */
let generateToken = (userId) => new Promise((resolve, reject) => {
    const token = jwt.sign({user: userId, exp: Date.now()}, privateKey, {algorithm: 'HS256'});
    resolve(token);
});

/**
 * Check Session Token
 * @param {token} token Session Token
 */
let verifyToken = (token) => new Promise((resolve, reject) => {
    jwt.verify(token, privateKey, {algorithm: 'HS256'})
        .then((result) => resolve(result))
});

module.exports = {authenticateUser, verifyToken};
