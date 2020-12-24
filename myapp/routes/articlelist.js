var express = require('express');
var router = express.Router();
var fs = require('fs')
var buf = new Buffer.alloc(10240);
var path = require('path')
var articlePath = path.resolve(__dirname, '../articles')

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("准备打开文件！");
  fs.open(articlePath + '/testlist.json', 'r+', function (err, fd) {
    if (err) {
      return console.error(err);
    }
    console.log("文件打开成功！");
    console.log("准备读取文件！");
    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
      if (err) {
        console.log(err);
      }
  
      // 仅输出读取的字节
      if (bytes > 0) {
        console.log(buf.slice(0, bytes).toString());
        res.send(buf.slice(0, bytes).toString())
      }
  
      // 关闭文件
      fs.close(fd, function (err) {
        if (err) {
          console.log(err);
        }
        console.log("文件关闭成功");
      });
  
    });
  });
 
});




module.exports = router;
