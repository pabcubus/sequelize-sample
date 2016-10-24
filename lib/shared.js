var fs = require('fs');
var xml2js = require('xml2js');
var _ = require('lodash');
var pg = require('pg');
var propertiesReader = require('properties-reader');

var properties = propertiesReader('config/db.properties');
var user = properties.get('db.midom.user');
var password = properties.get('db.midom.password');

var connectionString = 'postgresql://' + user + ':' + password + '@localhost:5432/midom';

exports.getSql = function(tipo, sql, func) {
	var parser = new xml2js.Parser();
	var res = [];

	fs.readFile('xml/queries.xml', function(err, data) {
		parser.parseString(data, function(err, result) {
			var queries = _.find(result.root.queries, function(obj) {
				return obj.$.tipo === tipo;
			});

			if (queries) {
				queries = _.find(queries.query, function(obj) {
					return obj.$.name === sql;
				});

				res = queries._.replace(/(?:\t|\r)/g, '').replace(/(?:\n)/g, ' ');

				func(res);
			}
		});
	});
}

exports.executeQuery = function(table, queryName, data, callback) {
	this.getSql(table, queryName, function(sql) {
		pg.connect(connectionString, function(err, client, done) {
			client.query(sql, data, function(err, result) {
				done();
				callback(result.rows);
			});
		});
	});
}

exports.executeUpdate = function(table, queryName, data, callback) {
	this.getSql(table, queryName, function(sql) {
		pg.connect(connectionString, function(err, client, done) {
			client.query(sql, data, function(err, result) {
				if (err) {
					done();
					callback({
						respuesta_codigo: err.code,
						respuesta_mensaje: err.detail
					});
				} else {
					done();
					callback({
						respuesta_codigo: '00',
						respuesta_mensaje: 'operación exitosa'
					});
				}
			});
		});
	});
}
