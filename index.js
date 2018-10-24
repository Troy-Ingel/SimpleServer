// variables
var express = require('express');
var morgan = require('morgan');
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');

// set up express routers, host server on port 8080
express()
	.use(morgan('dev'))
	.use(express.static('public'))
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: false }))
	.listen(port, function() {
		console.log('Sever running at localhost:' + port);
	});

