var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Post = mongoose.model("Post");

function slugify(title) {
  var slug = title.replace(/\W/g, "-")
  return slug;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/new', function(req, res, next) {
  res.render('posts_new', { title: 'Express' });
});



router.post("/new", function(req, res, next) {
  var post = new Post({
                      title: req.body["title"],
                      body: req.body["body"],
                      author: req.body["author"],
                      img: req.body["image"],
                      slug: slugify(req.body["title"]),
                      date: new Date()
            });

    post.save(function(err, doc) {
      res.redirect("/");    
    });
});

router.get('/:slug', function(req, res, next) {
  var slug = req.params["slug"];
      
  Post.find({"slug": slug}, function(err, doc) {
    res.render('posts_show', 
            { title: 'Express' ,
              head:  "header",
              post: doc[0],
              p_title: doc.title
          }); 


  });

  

});

module.exports = router;
