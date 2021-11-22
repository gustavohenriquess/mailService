import { Router } from 'express';
import { CreateEmailBoxController } from '../application/CreateEmailBoxController';
const router = Router();

router.post('/email/box', new CreateEmailBoxController().create);

export { router };
