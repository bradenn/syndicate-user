const router = require('express').Router();
const controller = require('../controllers/auth');

router.post('/', controller.authenticateUser);

module.exports = router;
