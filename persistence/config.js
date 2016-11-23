function start(app, orm, connectionString){
	app.use(orm.express(connectionString, {
		define: function (db, models, next) {
			// loaded!
			models.persona	= require('../persistence/Persona').init(db, models);
			models.telefono	= require('../persistence/Telefono').init(db, models);
			next();
		}
	}));
}

module.exports.start = start;
