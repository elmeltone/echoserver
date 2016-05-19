var express = require('express');

var app = express();

app.get('/', function(request, response) {
  response.send('hello world');
});

app.get('/headers', function(request, response) {
  var echo = request.headers;
  response.send(echo).json;
});

app.get('/headers/:header_name', function(request, response) {
  var headerName = request.headers[request.params.header_name];
  response.send(headerName);
});

app.get('/version', function(request, response) {
  var version = request.httpVersion;
  response.send(version);
});

app.listen(8080);
