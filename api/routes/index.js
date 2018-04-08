var express = require('express');
var router = express.Router();
const fieldController = require('../controllers/field');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/fields', fieldController.all);

module.exports = router;
