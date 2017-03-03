var express = require('express');
var logger  = require('morgan');

var app = express();

app.use(express.static('public'))

app.use(logger('dev'));

app.listen(process.env.PORT || 4000, function () {
  console.log("What's you say? Listen to 4000?! No problem!");
})
