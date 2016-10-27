// Dependencies
var express = require('express');
var _ = require('lodash');
var router = express.Router();
var Sequelize = require('sequelize');
var connection;

router.use(function(req, res, next) {
	connection = req.app.get('connection');
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

router.get('/getAll', function(req, res) {
	connection.sync().then(function() {
		Telefono.findAll().then(function(telefonos){
			return res.json(telefonos);
		});
	});
});

router.get('/:id', function(req, res) {
	var id = req.params.id;

	connection.sync().then(function() {
		Telefono.findAll({
			where: {
				'id': id
			}
		})
		.then(function(telefonos){
			return res.json(telefonos);
		});
	});
});

// Return router
module.exports = router;
