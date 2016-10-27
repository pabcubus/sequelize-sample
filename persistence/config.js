function start(Sequelize, connection){
	require('../persistence/Persona').init(Sequelize, connection);
	require('../persistence/Telefono').init(Sequelize, connection);

	// relationships
	Persona.hasMany(Telefono, { foreignKey: 'persona' });
}

module.exports.start = start;
