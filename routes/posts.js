var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var Post = mongoose.model("Post");
var Category = mongoose.model("Category");

function slugify(title) {
  var slug = title.replace(/\W/g, "-")
  return slug;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// router.get('/new', function(req, res, next) {

//   Category.find(function(err, collection) {
//     res.render('posts_new', { 
//       title: 'Express',
//       categories: collection
//     });
//   });
// });



router.post("/new", function(req, res, next) {
  console.log("post new")
  var post = new Post({
                      title: req.body["title"],
                      body: req.body["body"],
                      author: req.body["author"],
                      img: req.body["image"],
                      slug: slugify(req.body["title"]),
                      categories: req.body["categories"],
                      date: new Date()
            });

    post.save(function(err, doc) {
      console.log("saved: " + doc);
      next();
    });
});

router.get('/:slug', function(req, res, next) {
  var slug = req.params["slug"];
 
   Post.find({"slug": slug}, function(err, doc) {
    res.send(doc[0]);
  });




  // Post.find({"slug": slug}, function(err, doc) {
  //   res.render('posts_show', 
  //           { title: 'Express' ,
  //             post: doc[0],
  //             p_title: doc.title
  //         }); 
  // });
});


router.get("/delete/:slug", function(req, res, next) {
  var slug = req.params["slug"];
  Post.remove({"slug": slug}, function(err, doc) {
    res.redirect("/");
  });
})

module.exports = router;
