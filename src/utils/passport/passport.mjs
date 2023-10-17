import passport from 'passport';
import { localStrategy } from './strategies/local.mjs';

const initPassport = () => {
  console.log('Passport is ready to use.');
  passport.use('local', localStrategy);
}

export {
  initPassport,
  passport,
}
