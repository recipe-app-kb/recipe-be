const db = require('../../../database/dbConfig');

module.exports = {
	get,
	getUserRecipes,
	findById,
	findByIdDetails,
	insert,
	remove,
	update
}

function get() {
	return db('recipes');
}

function findById(id) {
	return db('recipes')
		.where('id', id)
		.first();
}

function findByIdDetails(id) {
	const ingredients = db('ingredients')
		.join('recipes_ingredients', 'ingredients.id', 'recipes_ingredients.ingredient_id')
		.where('recipes_ingredients.recipe_id', id);

	const steps = db('steps')
		.where('recipe_id', id);

	const recipe = db('recipes')
		.where('id', id)
		.first();

	const promises = [ingredients, steps, recipe];

	return Promise.all(promises)
		.then(results => {
			const [ingredients, steps, recipe] = results;
			recipe.ingredients = ingredients;
			recipe.steps = steps;
			// console.log(recipe)

			return recipe;
		})
}

function insert(data) {
	return db('recipes')
		.insert(data);
}

function remove(id) {
	return db('recipes')
		.where('id', id)
		.del();
}

function update(id, data) {
	return db('recipes')
		.where('id', id)
		.update(data);
}

function getUserRecipes(userId) {
	return db('recipes')
		.where('user_id', userId);
}