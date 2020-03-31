const router = require('express').Router();
const Steps = require('./steps-model');

// GET steps by reicpe id
router.get('/:id', (req, res) => {
	const id = req.params.id;

	Steps.getStepsByRecipe(id)
		.then(steps => {
			res.status(200).json(steps)
		})
		.catch(err => {
			res.status(500).json({ message: " unable to fetch steps", error: err });
		})
})

// POST step to recipe
router.post('/', (req, res) => {
	const data = req.body;

	Steps.insert(data)
		.then(id => {
			res.status(201).json(id)
		})
		.catch(err => {
			res.status(500).json({ message: 'Unable to add step', error: err });
		})
})

// DELETE step from recipe
router.delete('/:id', (req, res) => {
	const id = req.params.id;

	Steps.removeStep(id)
		.then(count => {
			res.status(200).json(count)
		})
		.catch(err => {
			res.status(500).json({ message: 'Unable to delete step', error: err })
		})
})

// PUT step details
router.put('/:id', (req, res) => {
	const id = req.params.id;
	const changes = req.body

	Steps.updateStep(id, changes)
		.then(count => {
			res.status(200).json(count)
		})
		.catch(err => {
			res.status(500).json({ message: 'Unable to update step', error: err })
		})
})

module.exports = router;