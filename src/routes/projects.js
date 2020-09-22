import {Router} from 'express';
import middleware from "../middleware";
import {projectService} from "../services";
import {projectValidator} from "../validators";

let router = Router();

/* POST /api/v1/projects */
router.post('/', userValidator.create, async (req, res, next) => {
    const doc = await projectService.createProject(req.body);
    return res.json(doc);
});

/* GET /api/v1/users/:id */
router.get('/:id', middleware.isAuthorized, userValidator.get, async (req, res, next) => {
    const doc = await projectService.getProject(req.params.id);
    if(!doc.project) return next(new Error('Project not found'));
    return res.json(doc);
});

/* PUT /api/v1/users/:id */
router.put('/:id', middleware.isAuthorized, userValidator.update, async (req, res, next) => {
    const doc = await projectService.updateProject(req.params.id, req.body);
    if(!doc.project) return next(new Error('User not found'));
    return res.json(doc);
});

/* DELETE /api/v1/users/:id */
router.delete('/:id', middleware.isAuthorized, userValidator.update, async (req, res, next) => {
    const doc = await projectService.deleteProject(req.params.id);
    if(!doc.project) return next(new Error('User not found'));
    return res.json(doc);
});

export default router;
