var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/problems', (req, res) => {
  res.render('problems');
})

router.get('/problems/:id', (req, res) => {
  let id = req.params['id'];
  res.render('problem', { problem: {
    id,
    name: "A+B",
    description: "For each input, print the output of the two numbers.",
    input: ['1 1', '1 2', '3 4', '4 1', '5 3'],
    output: ['2', '3', '7', '5', '8']
  }});
})

module.exports = router;
