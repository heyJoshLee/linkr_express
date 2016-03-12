var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var stylus = require("stylus");
var nib = require("nib");

mongoose.connect("mongodb://localhost/linkr");

var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  body: String,
  author: String,
  img: String,
  slug: String,
  categories: Array,
  date: {type: Date }
});

var CategorySchema = new Schema({
  name: String
});

mongoose.model("Post", PostSchema);
mongoose.model("Category", CategorySchema);

var routes = require('./routes/index');
var users = require('./routes/users');
var posts = require('./routes/posts');
var categories = require('./routes/categories');


var app = express();

app.locals.basedir = path.join(__dirname, "views");


app.locals.shortenBody = function(body) {
   if (body.length > 200) {
    var shortend = body.substring(0, 195);
    shortend += ".....";
    return shortend;  
 } 
  return title;
}

app.locals.shortenTitle = function(title){
 if (title.length > 40) {
    var shortend = title.substring(0, 37);
    shortend += "...";
    return shortend;  
 } 
  return title;
}

app.locals.formatDate = function(date) {
  if(date instanceof Date) {
  var days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"],
      months = ["Jan", "Feb", "March", "April", "May", "June",
                "July", "Aug", "Sept", "Nov", "Dec"];
  return months[date.getMonth()] + " " +  date.getDate() + " " + days[date.getDay()]; 
  } else {
    return "date unknown"
  }
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(stylus.middleware({
  src: path.join(__dirname, "public"),
  compile: function(str, p) {
    return stylus(str).set("filename", p).use(nib());
  }
}));


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', routes);
app.use('/users', users);
app.use('/posts', posts);
app.use('/categories', categories);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
