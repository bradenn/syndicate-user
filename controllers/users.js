let Users = require('../models/user');

/**
 * Insert user into database
 * @param {object} userObject Required Keys: username, firstname, lastname, email, password
 */
let createUser = (userObject) => new Promise((resolve, reject) => {
    Users.create(userObject)
        .then(user => resolve(user))
        .catch(error => reject(new Error(error)));
});

/**
 * Get user from database
 * @param {_id} userId Unique identifier
 */
let getUser = (userId) => new Promise((resolve, reject) => {
    Users.findById(userId)
        .then(user => resolve(user))
        .catch(error => reject(new Error(error)));
});

/**
 * Update user info in database
 * @param {_id} userId Unique identifier
 * @param {object} updates Allowed Keys: username, firstname, lastname, email, password
 */
let updateUser = (userId, updates) => new Promise((resolve, reject) => {

});

module.exports = {createUser, getUser}
