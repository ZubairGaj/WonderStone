const passport = require('passport');
const ebayauth = require('passport-ebay');

passport.use(new eBayStrategy({
    clientID: EBAY_APP_ID,
    clientSecret: EBAY_APP_SECRET,
    ruName: EBAY_APP_REDIRECT_URL_NAME
  },
  function(accessToken, refreshToken, cb) {
    // Do whatever you need with credentials. A request call to eBay api to fetch user perhaps?
    cb();
  }
));
