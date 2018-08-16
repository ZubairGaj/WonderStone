const eBayStrategy = require('passport-ebay').default;
const passport = require('passport');

passport.use(new eBayStrategy({
    clientID: 'ZubairGa-hoodedso-SBX-c5d8a3c47-8b93d42a',
    clientSecret: 'SBX-5d8a3c47277e-866c-430e-9847-077d',
    ruName: '/ebay/redirect'
  },
  function(accessToken, refreshToken, cb) {
    console.log(accessToken);
    cb();
  }
));
