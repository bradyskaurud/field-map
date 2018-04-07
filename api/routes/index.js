var express = require('express');
var router = express.Router();
const fieldController = require('../controllers/field');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/fields', fieldController.all);
router.get('/fields/:id', fieldController.byId);
router.post('/fields', fieldController.create);
router.put('/fields/:id', fieldController.update);
router.delete('/fields/:id', fieldController.remove);

module.exports = router;
