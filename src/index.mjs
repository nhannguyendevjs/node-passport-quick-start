import express from 'express';
import { passport, initPassport } from './utils/passport/passport.mjs';

const app = express();
const port = 3000;

app.use(express.json());

initPassport();

app
  .get('/', (_req, res) => {
    res.send('Hello World!');
  })
  .get('/login-failed', (_req, res) => {
    res.send('Login failed!');
  })
  .post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login-failed',
    session: false,
  }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
