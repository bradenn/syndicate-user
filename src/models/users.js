const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

let UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    firstname: String,
    lastname: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    date: {type: Date, default: Date.now}
});

UserSchema.statics.authenticate = (username, password) => new Promise((resolve, reject) => {
    const query = {$regex: new RegExp(username, "i")};
    Users.findOne({"username": query}).exec()
        .then((user) => {
            if (!user) {
                let err = new Error('This user does not exist...');
                reject(err);
            }
            verifyHash(password, user.password)
                .then(status => status ? resolve(user) : reject())
                .catch(error => reject(new Error(error)));
        })
        .catch((error) => {
            reject(new Error(error));
        });
});

UserSchema.pre('save', async function (next) {
    let user = this;
    if (!user.isModified('password')) return next();
    user.password = await hashPassword(user.password);
    next();
});

let hashPassword = (password) => new Promise((resolve, reject) => {
    bcrypt.hash(password, 10)
        .then((hash) => resolve(hash))
        .catch((error) => reject(error));
});

let verifyHash = (password, original) => new Promise((resolve, reject) => {
    bcrypt.compare(password, original)
        .then((status) => resolve(status))
        .catch((error) => reject(error));
});

let Users = mongoose.model('User', UserSchema);

module.exports = Users;
