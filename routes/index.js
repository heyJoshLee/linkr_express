var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var session = require("express-session");
var Post = mongoose.model("Post");
var User = mongoose.model("User");

function loggedIn(req, res, next) {
  return !!req.session.user_name;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  if (loggedIn(req, res, next)){
    var user = req.session.user_name;
  }
  Post.find(function(err, collection) {    
    res.render('index', {
       title: 'Express',
       posts: collection,
       user: user
    });
  });
});

/* DESTROY SESSION. */
router.get("/login", function(req, res, next) {
  res.render("login");
});

/* CREATE SESSION*/
router.post("/login", function(req, res, next) {
  var username = req.body["username"],
      password = req.body["password"];

  User.find({$and: [{username: username}, {password: password}]}, function(err, doc) {
    req.session.user_name = username;
    res.redirect("/");
  }),
  function() {
    res.redirect("/login");
  }
  ;
});


router.get("/register", function(req, res, next) {
  res.render("register");
})

router.post("/register", function(req, res, next) {
  var name = req.body["username"],
      password = req.body["password"];
  var user = new User({
    name: name,
    password: password
  });

  user.save(function(err, doc) {
      res.redirect("/");    
    });
});




module.exports = router;
