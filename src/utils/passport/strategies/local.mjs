import LocalStrategy from 'passport-local';

const localStrategy = new LocalStrategy((username, password, done) => {
  if (username === 'admin' && password === '123456') {
    return done(null, { username, password });
  } else {
    return done(null, false, { message: 'Incorrect username or password.' });
  }
});

export {
  localStrategy,
}
