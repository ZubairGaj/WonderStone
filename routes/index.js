var express = require('express');
var router = express.Router();
const config = require('../config/config.js');
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WonderStone Group' });
});

router.get('/ebay', function(req, res, next) {
  res.render('login', { title: 'WonderStone Group' });
});

router.get('/ebay/auth',
  passport.authenticate('ebay'));

router.get('/ebay/redirect',
  passport.authenticate('ebay', { failureRedirect: '/login' }), function(req, res, next) {
    res.redirect('/');
});

module.exports = router;
