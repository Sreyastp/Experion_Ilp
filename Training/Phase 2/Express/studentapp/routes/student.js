var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(' got a get response ');
});
router.put('/', function(req, res, next) {
    res.send(' got a put response ');
  });
  router.post('/', function(req, res, next) {
    res.send(' got a post response ');
  });
  router.delete('/', function(req, res, next) {
    res.send(' got a delete response ');
  });

module.exports = router;
