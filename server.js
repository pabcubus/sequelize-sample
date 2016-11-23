// Dependencies
var express			= require('express');
var bodyParser 		= require('body-parser');
var orm 			= require('orm');

var app = express();
app.use(bodyParser.json());

var propertiesReader 	= require('properties-reader');

var properties 			= propertiesReader('config/db.properties');
var user 				= properties.get('db.pqrs.user');
var password 			= properties.get('db.pqrs.password');
var dbname 				= properties.get('db.pqrs.dbname');

var connectionString = 'postgresql://' + user + ':' + password + '@localhost:5432/' + dbname;

require('./persistence/config').start(app, orm, connectionString);

// Routes
app.use('/api/persona', require('./routes/persona'));
app.use('/api/telefono', require('./routes/Telefono'));

// Start server
app.listen(3210);
console.log('API is running on port 3210');
