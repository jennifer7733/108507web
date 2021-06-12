var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Memberloginfail', { title: 'Express' });
});

module.exports = router;
