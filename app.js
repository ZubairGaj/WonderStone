const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var cors = require('cors')

const app = express();

mongoose.connect('mongodb://zubzg:zubair1998@ds225382.mlab.com:25382/ebaymanager', { useNewUrlParser: true });

// view engine setup
app.use(cors())

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

app.set('views', path.join(__dirname, 'views'));
app.set('public', path.join(__dirname, 'public'));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
const port = process.env.PORT || '5000'

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, (res, req)=>{
  console.log('server connected on', port);
});

module.exports = app;
