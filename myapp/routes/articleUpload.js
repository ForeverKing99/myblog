var express = require('express');
var router = express.Router();
var fs = require('fs')
var buf = new Buffer.alloc(10240);
var path = require('path')
var articlePath = path.resolve(__dirname, '../articles')
var obj = {}
var newDetail = {}
var idData = JSON.parse(fs.readFileSync(articlePath + '/testdetail.json').toString())
var articleData = JSON.parse(fs.readFileSync(articlePath + '/testlist.json').toString())





router.post('/', function (req, res, next) {
  obj.summary = req.body.summary
  obj.title = req.body.title
  obj.id = idData[0].contentlength
  newDetail.id = idData[0].contentlength
  idData[0].contentlength++
  articleData.push(obj)

  
  newDetail.content = req.body.content
  newDetail.title = req.body.title
  idData.push(newDetail)
  var writeDetail = JSON.stringify(idData)
  var writeData = JSON.stringify(articleData)
  fs.writeFile(articlePath + '/testlist.json', writeData, function (err) {
    if (err) {
      return console.error(err);
    }
    // res.send(JSON.stringify(articleData))
    fs.writeFile(articlePath + '/testdetail.json', writeDetail, function (err) {
      if (err) {
        return console.error(err);
      }
      res.send(JSON.stringify(req.body))
    });
  });


});



module.exports = router;