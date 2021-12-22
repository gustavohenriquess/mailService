import express from 'express';
import { router as routerEmailBox } from '../../core/emailbox/infra/router';

const app = express();

app.use(
  express.json({
    type: ['application/json', 'text/plain'],
  }),
);

app.use('/api', routerEmailBox);

export { app };
