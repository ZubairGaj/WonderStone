const passport = require('passport');
const ebayauth = require('passport-ebay');

passport.use(new eBayStrategy({
    clientID: 'ZubairGa-hoodedso-SBX-c5d8a3c47-8b93d42a',
    clientSecret: 'SBX-5d8a3c47277e-866c-430e-9847-077d',
    ruName: '/ebay/redirect'
  },
  function(accessToken, refreshToken, cb) {
    // Do whatever you need with credentials. A request call to eBay api to fetch user perhaps?
    cb();
  }
));
