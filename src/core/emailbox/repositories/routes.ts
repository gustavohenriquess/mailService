import { Router } from 'express';

const router = Router();

router.post('/emailbox', (req, res) => {
  res.send('Emailbox Repositories');
});

router.get('/emailbox', (req, res) => {
  res.send('Emailbox Repositories');
});

router.patch('/emailbox', (req, res) => {
  res.send('Emailbox Repositories');
});

router.delete('/emailbox', (req, res) => {
  res.send('Emailbox Repositories');
});

export { router };
