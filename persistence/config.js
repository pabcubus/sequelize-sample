function start(Sequelize, connection){
	require('../persistence/Cliente').init(Sequelize, connection);
	require('../persistence/Telefono').init(Sequelize, connection);

	// relationships
	Cliente.hasMany(Telefono, { foreignKey: 'cliente' });
}

module.exports.start = start;
