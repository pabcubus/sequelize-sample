function init(Sequelize, connection){
	Persona = connection.define('persona', {
		nombre: Sequelize.STRING,
		apellido: Sequelize.STRING,
		edad: Sequelize.INTEGER,
		direccion: Sequelize.STRING
	}, {
		freezeTableName: true,
	});
}

module.exports.init = init;
