// Dependencies
var express = require('express');
var _ = require('lodash');
var router = express.Router();
var Sequelize = require('sequelize');

var Cliente = null;
var Telefono = null;
var connection = null;

router.use(function(req, res, next) {

	if (!Cliente) {
		connection = req.app.get('connection');

		Telefono = connection.define('telefono', {
			cliente: Sequelize.BIGINT,
			telefono: Sequelize.STRING
		}, {
			freezeTableName: true,
		});

		Cliente = connection.define('cliente', {
			nombre: Sequelize.STRING,
			apellido: Sequelize.STRING,
			telefono: Sequelize.INTEGER,
			edad: Sequelize.INTEGER,
			precio: Sequelize.INTEGER,
			estrato: Sequelize.INTEGER
		}, {
			freezeTableName: true,
		});
		Cliente.hasMany(Telefono, { foreignKey: 'cliente' });
	}

	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

router.get('/test', function(req, res) {
	connection.sync().then(function() {
		Cliente.findAll({ include : Telefono }).then(function(clientes){
			return res.json(clientes);
		});
	});
});

// Return router
module.exports = router;
