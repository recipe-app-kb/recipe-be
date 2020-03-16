const jwt = require('jsonwebtoken');

function restricted(req, res, next) {
	const secret = process.env.JWT_SECRET;
	const token = req.headers.authorization;

	if (token) {
		jwt.verify(token, secret, (error, token) => {
			if (error) {
				res.status(401).json({ message: 'You are not authenticated.' });
			} else {
				req.token = token;
				next();
			}
		});
	} else {
		res.status(401).json({ message: 'Please try logging in again.' });
	}
}

module.exports = { restricted };