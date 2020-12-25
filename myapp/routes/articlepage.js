var express = require('express');
var router = express.Router();
const detaildata = require('../articles/testdetail.json')


router.get('/:id', function (req, res, next) {
  var num = req.params.id
  res.send(detaildata.find((item) => {
    return item.id == num
  }));

});


module.exports = router;