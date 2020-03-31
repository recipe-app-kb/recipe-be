const db = require('../../../database/dbConfig');

module.exports = {
	getStepsByRecipe,
	insert,
	removeStep,
	updateStep
}

function getStepsByRecipe(id) {
	return db('steps')
		.where('recipe_id', id);
}

function insert(data) {
	return db('steps')
		.insert(data);
}

function removeStep(id) {
	return db('steps')
		.where('id', id)
		.del()
}

function updateStep(id, data) {
	return db('steps')
		.where({
			'id': id,
			'recipe_id': data.recipe_id,
		})
		.update(data)
}