const router = require('express').Router();
let controller = require('../controllers/users');

/* POST /api/v1/users */
router.post('/', controller.createUser);

/* GET /api/v1/users/:id */
router.get('/:id', controller.getUser);

/* PUT /api/v1/users/:id */
router.put('/:id', controller.updateUser);

/* DELETE /api/v1/users/:id */
router.delete('/:id', controller.deleteUser);

module.exports = router;
