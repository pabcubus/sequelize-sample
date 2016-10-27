function init(Sequelize, connection){
	Telefono = connection.define('telefono', {
		persona: Sequelize.BIGINT,
		telefono: Sequelize.STRING
	}, {
		freezeTableName: true,
	});
}

module.exports.init = init;
