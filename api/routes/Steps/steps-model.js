const db = require('../../../database/dbConfig');

module.exports = {
	getStepsByRecipe,
	insert
}

function getStepsByRecipe(id) {
	return db('steps')
		.where('recipe_id', id);
}

function insert(data) {
	return db('steps')
		.insert(data);
}