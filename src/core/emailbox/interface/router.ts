import { Router } from 'express';
import { CreateEmailBoxController } from '../application/CreateEmailBoxController';
import { DeleteEmailBoxController } from '../application/DeleteEmailBoxController';
import { GetEmailBoxController } from '../application/GetEmailBoxController';
import { UpdateEmailBoxController } from '../application/UpdateEmailBoxController copy';

const router = Router();

router.post('/email/box', new CreateEmailBoxController().create);
router.get('/email/box', new GetEmailBoxController().get);
router.put('/email/box', new UpdateEmailBoxController().update);
router.delete('/email/box', new DeleteEmailBoxController().delete);

export { router };
