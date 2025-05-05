import { Router } from 'express';

import { create, list, show, update, destroy } from 'controllers/posts';

const router = Router();

router.post('/', create);

router.get('/', list);

router.get('/:id([0-9]+)', show);

router.put('/:id([0-9]+)', update);

router.delete('/:id([0-9]+)', destroy);

export default router;
