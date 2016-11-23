function init(db, models) {
	var TelefonoModel = {
		telefono: String
	};

	var Telefono = db.define('telefono', TelefonoModel);
	return Telefono;
}

module.exports.init = init;
