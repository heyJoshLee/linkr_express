var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Category = mongoose.model("Category");
var Post = mongoose.model("Post");

router.get('/', function(req, res, next) {

  Category.find(function(err, collection) {    
    res.render('categories_index', {
       title: 'Express',
       categories: collection
    });
  });
});


router.get('/new', function(req, res, next) {
  res.render("categories_new", {
    title: "Categories"
  });
});



router.post("/new", function(req, res, next) {
  var category = new Category({
                      name: req.body["name"]
                });

    category.save(function(err, doc) {
      res.redirect("/");    
    });
});

router.get('/:slug', function(req, res, next) {
  var name = req.params["slug"];
      
  Category.find({name: name}, function(err, doc) {
    res.render('categories_show', 
            { title: doc[0].name ,
              category: doc[0]
          }); 
  });
});



module.exports = router;
