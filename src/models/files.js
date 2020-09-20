const mongoose = require('mongoose');

let FileSchema = new mongoose.Schema({
    name: String,
    location: String,
    hash: String,
    project: mongoose.ObjectId,
    path: String,
    dateEdited: {type: Date, default: Date.now},
    dateCreated: {type: Date, default: Date.now}
});

let File = mongoose.model('File', FileSchema);

module.exports = File;
