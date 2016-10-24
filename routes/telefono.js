// Dependencies
var express = require('express');
var _ = require('lodash');
var router = express.Router();
var Sequelize = require('sequelize');

var Telefono = null;
var connection = null;

router.use(function(req, res, next) {

	if (!Telefono) {
		connection = req.app.get('connection');

		Telefono = connection.define('telefono', {
			cliente: Sequelize.BIGINT,
			telefono: Sequelize.STRING
		}, {
			freezeTableName: true,
		});
	}

	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

router.get('/test', function(req, res) {
	connection.sync().then(function() {
		Telefono.findAll().then(function(telefonos){
			return res.json(telefonos);
		});
	});
});

// Return router
module.exports = router;
