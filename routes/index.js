var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

var Post = mongoose.model("Post");

/* GET home page. */
router.get('/', function(req, res, next) {
  var posts;

  Post.find(function(err, collection) {
    posts = collection;
    
    res.render('index', {
       title: 'Express',
       posts: posts.length 
    });
  });

});

module.exports = router;
