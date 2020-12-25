var express = require('express');
var router = express.Router();
const pass = {
  name:'forever',
  password:'forever99'
}
/* GET home page. */
router.post('/', function(req, res, next) {
  if(req.body.name===pass.name&&req.body.password===pass.password){
    res.send('true')
  }else{
    res.send('false')
  }
});

module.exports = router;
