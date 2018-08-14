var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WonderStone Group' });
});

router.get('/ebay', function(req, res, next) {
  res.render('login', { title: 'WonderStone Group' });
});

router.get('/ebay/logout', function(req, res, next) {
  //handlewith passport
  res.send('logout your ebay account');
});

router.get('/ebay/login', function(req, res, next) {
  //handlewith passport
  res.send('login with ebay');
});

router.get('/ebay/redirect', function(req, res, next) {
  //handlewith passport
  res.send('login with ebay');
});

module.exports = router;
