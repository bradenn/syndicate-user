const mongoose = require('mongoose');

let ProjectSchema = new mongoose.Schema({
    name: String,
    repository: String,
    owner: mongoose.ObjectId,
    dateEdited: {type: Date, default: Date.now},
    dateCreated: {type: Date, default: Date.now}
});

let Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
