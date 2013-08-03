var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());


var fl = new Buffer(fs.readFileSync('index.html'));




app.get('/', function(request, response) {
    
    response.send(fl.toString());
    //response.send('test');
});

var port = process.env.PORT ||  8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
