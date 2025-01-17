var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var tests = require('./routes/tests');

var app = express();


//服务端允许所有请求
var allowCrossDomain = function(req, res, next){
res.header('Access-Control-Allow-Origin','*');
res.header('Access-Control-Allow-Methods','GET,POST,PUT');
return next();
}
app.use(allowCrossDomain);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
var ejs = require('ejs');
app.engine('html', ejs.__express);
//设置模板引擎的格式即运用何种模板引擎
app.set("view engine","html");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/demo",express.static(path.join(__dirname, 'demo')));
//app.use("/",express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/api/users', users);
app.use('/api/tests', tests);
















// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;
