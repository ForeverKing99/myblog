var express = require('express');
var router = express.Router();
var fs = require('fs')
var buf = new Buffer.alloc(10240);
var path = require('path')
var articlePath = path.resolve(__dirname, '../articles')
var obj = {}
var idData = JSON.parse(fs.readFileSync(articlePath + '/testdetail.json').toString())
var articleData = JSON.parse(fs.readFileSync(articlePath + '/testlist.json').toString())


fs.readFile(articlePath + '/testlist.json', function (err, data) {
  if (err) {
    return console.error(err);
  }
  var listData = JSON.parse(data.toString())
});



router.post('/', function (req, res, next) {
  obj = req.body
  obj.id = idData[0].contentlength
  articleData.push(obj)
  var writeData = JSON.stringify(articleData)
  fs.writeFile(articlePath + '/testlist.json', writeData, function (err) {
    if (err) {
      return console.error(err);
    }
    res.send(JSON.stringify(articleData))
  });


});



module.exports = router;