var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WonderStone Group' });
});

router.get('/ebay/login', function(req, res, next) {
  res.render('login', { title: 'WonderStone Group' });
});

module.exports = router;
