var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('employeeLogin', { title: 'Express' });
});

module.exports = router;
