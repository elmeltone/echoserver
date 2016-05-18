var express = require('express');

var app = express();

app.get('/headers', function(request, response) {
  response.json({
    request.headers;
  })
});

app.listen(8080);
