const LocalStrategy = require('passport-local');

module.exports = new LocalStrategy({
  usernameField: 'userName',
  passwordField: 'password',
  passReqToCallback: true,
}, (req, userName, password, done) => {
  // if (err) { return done(err); }
  // if (!user) { return done(null, false); }
  // if (!user.verifyPassword(password)) { return done(null, false); }
  return done(null, { user: userName, displayName: userName })
})