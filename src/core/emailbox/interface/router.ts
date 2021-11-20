import { Router } from 'express';
import { CreateMailboxController } from '../application/CreateMailboxController';
const router = Router();

router.post('/emailbox', new CreateMailboxController().create);

export { router };
