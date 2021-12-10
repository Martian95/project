var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
  res.render('video/list', { title: 'LIST VIDEO PAGE' });
});

router.get('/add', function(req, res, next) {
  res.render('video/add', { title: 'ADD VIDEO PAGE' })
});

router.get('/edit', function(req, res, next) {
  res.render('video/edit', { title: 'EDIT VIDEO PAGE' })
});

module.exports = router;
