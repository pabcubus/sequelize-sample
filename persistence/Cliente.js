function init(Sequelize, connection){
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
}

module.exports.init = init;
