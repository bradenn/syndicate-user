const express = require('express');
let router = express.Router();

router.route('/').get();

module.exports = { router };
