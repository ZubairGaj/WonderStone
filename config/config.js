// const eBayStrategy = require('passport-ebay').default;
const OAuth2Strategy = require('general-oauth2');
const passport = require('passport');
const keys = require('./keys');

passport.use(new OAuth2Strategy({
    authorizationURL: 'https://auth.sandbox.ebay.com/oauth2/authorize',
    tokenURL: 'https://api.sandbox.ebay.com/identity/v1/oauth2/token',
    clientID: keys.ebay.clientID,
    clientSecret: keys.ebay.clientSecret,
    ruName: 'https://wonderstone.herokuapp.com/ebay/redirect'
  },
  function(accessToken, refreshToken, cb) {
    console.log(accessToken);
    cb();
  }
));
