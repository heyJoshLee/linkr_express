var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Post = mongoose.model("Post");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/new', function(req, res, next) {
  res.render('users_new', { title: 'Express' });
});

router.post("/new", function(req, res, next) {
  var post = new Post({name: req.body["name "]});

  res.redirect("/");

});

module.exports = router;
