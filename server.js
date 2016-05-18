var express = require('express');

var app = express();

app.get('/', function(request, response) {
  response.send('hello world');
});

app.get('/headers', function(request, response) {
  var echo = request.headers;
  response.send(echo).json;
});

app.listen(8080);
