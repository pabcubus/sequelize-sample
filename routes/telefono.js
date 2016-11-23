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
	req.models.telefono.find(function (err, telefonos) {
		return res.json(telefonos);
	});
});

// Return router
module.exports = router;
