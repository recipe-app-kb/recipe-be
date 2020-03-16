const router = require('express').Router();
const Ingredients = require('./ingredients-model');

// Get all ingredients
router.get('/', (req, res) => {
	Ingredients.getAll()
		.then(ingredients => {
			res.status(200).json(ingredients);
		})
		.catch(err => {
			res.status(500).json({ message: 'Unable to fetch ingredients', error: err })
		})
})

// POST an ingredient
router.post('/', (req, res) => {
	const { body } = req;

	Ingredients.insert(body)
		.then(count => {
			res.status(201).json(count)
		})
		.catch(err => {
			res.status(500).json({ message: 'Unable to add ingredient', error: err })
		})
})

// POST ingredient to recipe
router.post('/:id', (req, res) => {
	const ingredientId = req.params.id;

	const data = { ...req.body, ingredient_id: ingredientId };

	Ingredients.addIngredientToRecipe(data)
		.then(count => {
			// Currently returns the id of recipe_ingredient combo. [26]
			res.status(201).json(count);
		})
		.catch(err => {
			res.status(500).json({ message: 'Unable to add recipe', error: err });
		})

})

// DELETE ingredient from recipe
router.delete('/:id/recipe', (req, res) => {
	const id = req.params.id;

	Ingredients.removeFromRecipe(id)
		.then(count => {
			res.status(200).json(count);
		})
		.catch(err => {
			res.status(500).json({ message: 'Unable to delete ingredient', error: err });
		})
})


module.exports = router;