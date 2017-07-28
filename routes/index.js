var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'IGlaze', page_name: 'Home' });
});

router.get('/gallery', function(req, res, next) {
  res.render('pages/gallery', { title: 'IGlaze', page_name: 'Gallery' });
});

router.get('/about', function(req, res, next) {
  res.render('pages/about', { title: 'IGlaze', page_name: 'About' });
});

router.get('/contact', function(req, res, next) {
  res.render('pages/contact', { title: 'IGlaze', page_name: 'Contact' });
});

router.post('/contact', function(req, res, next) {
  res.render('pages/contact', { title: 'IGlaze', page_name: 'Contact' });
  console.log("Hello");
});
module.exports = router;
