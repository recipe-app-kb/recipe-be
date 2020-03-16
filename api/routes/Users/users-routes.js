const router = require('express').Router();
const User = require('./users-model');
const Recipes = require('../Recipes/recipes-model');

// custom middlewares
const validateId = require('./users-middleware').validateId;
const authorizeId = require('./users-middleware').authorizeId;
const restricted = require('../Auth/auth-middleware').restricted;

// get all users
router.get('/', (req, res) => {
	User.getUsers()
		.then(users => {
			res.status(200).json(users);
		})
		.catch(error => {
			res.status(500).json({ message: 'Problems getting users' });
		})
});

// Get the logged in user's profile info
router.get('/profile', restricted, (req, res) => {
	const id = req.token.id;

	// console.log(req.token)

	User.findById(id)
		.then(user => {
			res.status(200).json(user);
		})
		.catch(err => {
			res.status(500).json({ message: 'Problems getting user.', error: err });
		})
});

// get user by id
router.get('/:id', restricted, validateId, authorizeId, (req, res) => {
	const id = req.params.id;

	User.findById(id)
		.then(user => {
			res.status(200).json(user);
		})
		.catch(err => {
			res.status(500).json({ message: 'Problems getting user.', error: err });
		})
});

// get recipes for a user.
router.get('/:id/recipes', restricted, validateId, authorizeId, (req, res) => {
	const id = req.params.id;

	Recipes.getUserRecipes(id)
		.then(recipes => {
			res.status(200).json(recipes);
		})
		.catch(err => {
			res.status(500).json({ message: 'Problems getting user recipes.', error: err });
		});
});

// Post Recipes
router.post('/:id/recipes', restricted, (req, res) => {
	const data = req.body;

	Recipes.insert(data)
		.then(recipe => {
			res.status(201).json(recipe);
		})
		.catch(err => {
			res.status(500).json({ message: 'Problems adding recipe.', error: err });
		})
});

module.exports = router;

