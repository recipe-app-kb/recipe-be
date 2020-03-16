const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../Users/users-model');

router.post('/register', (req, res) => {
	const newUser = req.body;

	if (newUser.username && newUser.password) {
		const hash = bcrypt.hashSync(newUser.password, 8); //hash password
		newUser.password = hash;

		User.add(newUser)
			.then(user => {
				res.status(201).json(user);
			})
			.catch(err => {
				res.status(500).json({ message: 'Problems adding user', error: err });
			});
	} else {
		res.status(400).json({ message: 'Must enter username and password.' });
	}
})

router.post('/login', (req, res) => {
	const { username, password } = req.body;

	User.findBy({ username })
		.then(user => {
			if (user && bcrypt.compareSync(password, user.password)) {
				// Generate the token
				const token = generateToken(user);

				// Send token to client
				res.status(200)
					.json({
						token,
						message: `Welcome ${username}!`,
						userInfo: {
							id: user.id,
							username: user.username
						}
					});
			} else {
				res.status(401).json({ message: 'Invalid username or password.' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Problem logging user in', error: err });
		})

});

// custom function to use jwt to generate a token.
function generateToken(user) {
	const secret = process.env.JWT_SECRET;
	const payload = {
		id: user.id,
		username: user.username
	}

	const options = {
		expiresIn: '12hr'
	}

	return jwt.sign(payload, secret, options);
}

module.exports = router;