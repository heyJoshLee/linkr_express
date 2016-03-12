var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Post = mongoose.model("Post");

/* GET home page. */
router.get('/', function(req, res, next) {

  Post.find(function(err, collection) {    
    res.render('index', {
       title: 'Express',
       posts: collection,
       length: collection.length
    });
  });

});

module.exports = router;
