import express from 'express';
import { router as routerEmailBox } from '../../core/emailbox/interface/router';

const app = express();

app.use(
  express.json({
    type: ['application/json', 'text/plain'],
  }),
);

app.use('/api', routerEmailBox);

export { app };
