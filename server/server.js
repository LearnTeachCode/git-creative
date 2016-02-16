var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3000;

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // allows us to post data to server, converts it from bytes i think.

app.listen(port, function() {
  console.log('server running on ' + port); 
});
