import {Router} from 'express';
import middleware from "../middleware";
import {userService} from "../services";
import {userValidator} from "../validators";

let router = Router();

/* POST /api/v1/users */
router.post('/', userValidator.create, async (req, res, next) => {
    const user = await userService.createUser(req.body);
    if(!user.user) return next(new Error('User not found'));
    return res.json(user);
});

/* GET /api/v1/users/:id */
router.get('/:id', middleware.isAuthorized, userValidator.get, async (req, res, next) => {
    const user = await userService.getUser(req.params.id);
    if(!user.user) return next(new Error('User not found'));
    return res.json(user);
});

/* PUT /api/v1/users/:id */
router.put('/:id', middleware.isAuthorized, userValidator.update, async (req, res, next) => {
    const user = await userService.updateUser(req.params.id, req.body);
    if(!user.user) return next(new Error('User not found'));
    return res.json(user);
});

/* DELETE /api/v1/users/:id */
router.delete('/:id', middleware.isAuthorized, userValidator.update, async (req, res, next) => {
    const user = await userService.deleteUser(req.params.id);
    if(!user.user) return next(new Error('User not found'));
    return res.json(user);
});

export default router;
