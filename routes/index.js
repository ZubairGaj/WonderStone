const express = require('express');
const router = express.Router();
var config = require('../config/config.js');
const passport = require('passport');
const nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WonderStone Group' });
});

router.get('/ebay', function(req, res, next) {
  res.render('login', { title: 'WonderStone Group' });
});

router.post('/query', function(req, res, next) {
  console.log(req.body);
  nodemailer.createTestAccount((err, account) => {
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
          sendmail: true,
          newline: 'unix',
          path: '/usr/sbin/sendmail'
      });

      // setup email data with unicode symbols
      let mailOptions = {
          from: `noreply@wonderstonegroup.com`, // sender address
          to: 'thecreatorofthisempire@gmail.com', // list of receivers
          subject: 'New Query', // Subject line
          text: `${req.body.query}`, // plain text body
          html: `${req.body.query}` // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);
          // Preview only available when sending through an Ethereal account
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

          // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
          // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      });
  });
  res.status(200);
});

router.get('/ebay/auth',
  passport.authenticate('oauth2')
);

router.get('/ebay/redirect',
  passport.authenticate('oauth2', { failureRedirect: '/login' }), function(req, res, next) {
    res.redirect('/');
});

module.exports = router;
