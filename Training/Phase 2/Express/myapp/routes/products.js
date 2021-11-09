var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, ) {
  res.send("Helo world");
});

router.put('/', function(req, res, ) {
  res.send("Got a put request");
});

router.post('/', function(req, res, ) {
  res.send("Got a product Post request");
});

router.delete('/', function(req, res, ) {
  res.send("Got a Delete request");
});


module.exports = router;
