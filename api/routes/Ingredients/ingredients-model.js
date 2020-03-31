const db = require('../../../database/dbConfig');

module.exports = {
	getIngredientsByRecipe,
	getAll,
	insert,
	addIngredientToRecipe,
	removeFromRecipe,
	updateIngredients
}

function getIngredientsByRecipe(recipeId) {
	// select * from ingredients as i
	// inner join recipes_ingredients as ri on i.id = ri.ingredient_id
	// where ri.recipe_id = 1;

	return db('ingredients')
		.join('recipes_ingredients', 'ingredients.id', 'recipes_ingredients.ingredient_id')
		.where('recipes_ingredients.recipe_id', recipeId);
}

function getAll() {
	return db('ingredients');
}

function insert(data) {
	return db('ingredients')
		.insert(data);
}

function addIngredientToRecipe(data) {
	return db('recipes_ingredients')
		.insert(data)
}

function removeFromRecipe(recipeId, ingredientId) {
	// select * from recipes_ingredients where recipe_id = 3 and ingredient_id = 15

	return db('recipes_ingredients')
		.where({
			recipe_id: recipeId,
			ingredient_id: ingredientId
		})
		.del();
}

// Update ingredient per recipe
function updateIngredients(data) {

	return db('recipes_ingredients')
		.where({
			recipe_id: data.recipe_id,
			ingredient_id: data.ingredient_id
		})
		.update(data)
}