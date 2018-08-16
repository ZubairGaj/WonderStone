const eBayStrategy = require('passport-ebay').default;
const passport = require('passport');
const keys = require('./keys');

passport.use(new eBayStrategy({
    clientID: keys.ebay.clientID,
    clientSecret: keys.ebay.clientSecret,
    ruName: '/ebay/redirect'
  },
  function(accessToken, refreshToken, cb) {
    console.log(accessToken);
    cb();
  }
));
