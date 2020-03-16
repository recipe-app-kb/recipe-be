const router = require('express').Router();
const Recipes = require('./recipes-model');
const Ingredients = require('../Ingredients/ingredients-model');
const Steps = require('../Steps/steps-model');
const restricted = require('../Auth/auth-middleware').restricted;

// Get all recipes
router.get('/', (req, res) => {
	Recipes.get()
		.then(recipes => {
			res.status(200).json(recipes);
		})
		.catch(err => {
			res.status(500).json({ message: 'Problems fetching recipes', error: err });
		})
});

// Get recipe by id
router.get('/:id', validateRecipeId, restricted, (req, res) => {
	const id = req.params.id;

	Recipes.findByIdDetails(id)
		.then(recipe => {
			if (recipe) {
				res.status(200).json(recipe);
			} else {
				res.status(404).json({ message: 'No recipe exist by that id.' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Problems fetching recipe', error: err });
		})
})

// Delete recipe
router.delete('/:id', validateRecipeId, restricted, (req, res) => {
	const id = req.params.id;

	Recipes.remove(id)
		.then(count => {
			res.status(200).json(count)
		})
		.catch(err => {
			res.status(500).json({ message: 'Problem deleting recipe', error: err })
		})
})

// Get ingredients for a recipe
router.get('/:id/ingredients', (req, res) => {
	const id = req.params.id;

	Ingredients.getIngredientsByRecipe(id)
		.then(ing => {
			res.status(200).json(ing);
		})
		.catch(err => {
			res.status(500).json({ message: 'Problems fetching ingredients.', error: err });
		})
});

// Get steps for a recipe
router.get('/:id/steps', (req, res) => {
	const id = req.params.id;

	Steps.getStepsByRecipe(id)
		.then(steps => {
			res.status(200).json(steps);
		})
		.catch(err => {
			res.status(500).json({ message: 'Problems fetching steps.', error: err });
		})
});

// custom middleware to validate recipe id.
function validateRecipeId(req, res, next) {
	const id = req.params.id;

	Recipes.findById(id)
		.then(recipe => {
			if (recipe) {
				next();
			} else {
				res.status(404).json({ message: 'No such recipe exist for that id.' });
			}
		})
}

module.exports = router;