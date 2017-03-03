var express = require('express');

var app = express();

app.use(express.static('public'))

app.listen(process.env.PORT || 4000, function () {
  console.log("What's you say? Listen to 4000?! No problem!");
})
