// Dependencies
var express = require('express');
var _ 		= require('lodash');
var router 	= express.Router();
var orm 	= require('orm');

router.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

router.get('/', function(req, res) {
	req.models.persona.find(function (err, personas) {
		return res.json(personas);
	});
});

router.get('/:id', function(req, res) {
	var id = req.params.id;

	req.models.persona.get(id, function (err, persona) {
		req.models.telefono.find({'persona': id}, function (err, telefonos) {
			persona.telefonos = telefonos;
			return res.json(persona);
		});
	});
});

// Return router
module.exports = router;
