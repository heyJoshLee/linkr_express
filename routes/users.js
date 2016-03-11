var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {
    title: "Users"
  });
});

router.get('/new', function(req, res, next) {
  res.render('users_new', {
    title: "New User"
  });
});

router.post('/new', function(req, res, next) {
  console.log(req.body.name);
  Users.push({name: req.body.name})
  res.redirect("/")
});

module.exports = router;
