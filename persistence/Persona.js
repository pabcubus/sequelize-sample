function init(db, models) {
	var PersonaModel = {
		nombre: String,
		apellido: String
	};

	var Persona = db.define('persona', PersonaModel);
	return Persona;
}

module.exports.init = init;
