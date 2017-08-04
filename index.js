var express = require('express');
var app = express();
var path = require("path");

app.use('/dist',express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/src/index.html'));
});

app.listen(80, function () {
  console.log('Example app listening on port 3000!');
});
