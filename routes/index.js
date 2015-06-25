var express = require('express');
var _ = require('underscore');
var router = express.Router();
var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Is it Ruby Tuesday yet?",
  "It's almost beer o'clock",
  "The Force is strong with you",
  "Du är vackert",
  "Du bist wunderschön",
  "Eres hermos@"
];
var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"];
 


/* GET home page. */
router.get('/', function(req, res, next) {
  var flatter = _.sample(compliments);
  var newColor = _.sample(colors);
  res.render('index', {flatter: flatter, newColor: newColor});

});

router.get('/:name', function(req, res, next) {
  var flatter = _.sample(compliments);
  var newColor = _.sample(colors);
  var name = req.params.name;
  res.render('name', {flatter: flatter, newColor: newColor, name: name});

});




// router.get('/hello', function(req, res, next) {
//   res.render('hello', { title: 'Express' });
// });



module.exports = router;
