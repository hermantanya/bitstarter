var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs = require('fs');
  filePath="./index.html";
  var message_back;

  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    message_back=data
    response.send(message_back);
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

