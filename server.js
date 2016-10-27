// Dependencies
var express			= require('express');
var bodyParser 		= require('body-parser');

var app = express();
app.use(bodyParser.json());

// Set the params for the ORM (Sequelize)
var Sequelize = require('sequelize');
var propertiesReader = require('properties-reader');

var properties = propertiesReader('config/db.properties');
var user = properties.get('db.midom.user');
var password = properties.get('db.midom.password');

var connectionString = 'postgresql://' + user + ':' + password + '@localhost:5432/test';

var connection = new Sequelize(connectionString, {
	define: {
		timestamps: false
	}
});

// Configure the ORM
require('./persistence/config').start(Sequelize, connection);

app.set('connection', connection);

// Routes
app.use('/api/cliente', require('./routes/cliente'));
app.use('/api/telefono', require('./routes/telefono'));

// Start server
app.listen(3210);
console.log('API is running on port 3210');
