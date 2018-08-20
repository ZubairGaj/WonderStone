const eBayStrategy = require('passport-ebay').default;
// const OAuth2Strategy = require('general-oauth2');
const passport = require('passport');
const keys = require('./keys');

// passport.use(new OAuth2Strategy({
//     authorizationURL: 'https://auth.sandbox.ebay.com/oauth2/authorize',
//     tokenURL: 'https://api.sandbox.ebay.com/identity/v1/oauth2/token',
//     clientID: keys.ebay.clientID,
//     clientSecret: keys.ebay.clientSecret,
//     ruName: 'https://wonderstone.herokuapp.com/ebay/redirect'
//   },
//   function(accessToken, refreshToken, cb) {
//     console.log(accessToken);
//     cb();
//   }
// ));

passport.use(new eBayStrategy({
    clientID: `${keys.ebay.clientID}`,
    clientSecret: `${keys.ebay.clientSecret}`,
    ruName: 'ebay/redirect'
  },
  function(accessToken, refreshToken, cb) {
    // Do whatever you need with credentials. A request call to eBay api to fetch user perhaps?
    cb();
  }
));
