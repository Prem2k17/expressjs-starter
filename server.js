var express = require('express');
var app = express();
var env          = process.env;
app.use(express.static(__dirname + '/app/appmodule', { 'index': ['appmodule.html']}));

var customPort = 9090;

app.listen(env.NODE_PORT || customPort, env.NODE_IP || 'localhost', function () 
{
	  console.log('Application running in port : '+customPort);
	  console.log(`Application worker ${process.pid} started...`);
});