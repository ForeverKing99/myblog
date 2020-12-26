var express = require('express');
var router = express.Router();
const testlist = require('../articles/testlist.json')
var list=[]

router.get('/:tab', function (req, res, next) {
  console.log(req.params);
  
  var num = req.params.tab
  testlist.forEach(item => {
    if(item.tab == num){
      list.push(item)
    }
  });
  res.send(list)
  list = []
});


module.exports = router;