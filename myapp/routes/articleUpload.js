var express = require('express');
var router = express.Router();
var fs = require('fs')
var buf = new Buffer.alloc(102400);
var path = require('path')
var articlePath = path.resolve(__dirname, '../articles')
var obj = {}
var newDetail = {}
var idData = JSON.parse(fs.readFileSync(articlePath + '/testdetail.json').toString())
var articleData = JSON.parse(fs.readFileSync(articlePath + '/testlist.json').toString())
var time = new Date().getTime()




router.post('/', function (req, res, next) {
  obj.summary = req.body.summary
  obj.title = req.body.title
  obj.id = idData[0].contentlength
  obj.length = req.body.content.length
  obj.time = time
  obj.tab = req.body.tab
  newDetail.id = idData[0].contentlength
  idData[0].contentlength++
  articleData.push(obj)
  newDetail.content = req.body.content
  newDetail.title = req.body.title
  newDetail.length = req.body.content.length
  newDetail.time = time
  newDetail.tab = req.body.tab
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