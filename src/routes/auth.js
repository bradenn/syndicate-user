import {Router} from 'express';
import {authService} from "../services";
import {authValidator} from "../validators";

let router = Router();

/* POST /api/v1/auth */
router.post('/', authValidator.user, async (req, res, next) => {
    const user = await authService.authUser(req.body);
    if(!user.token) return next(new Error('User not found'));
    return res.json(user);
});

export default router;
