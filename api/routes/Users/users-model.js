const db = require('../../../database/dbConfig');

module.exports = {
	getUsers,
	findById,
	add,
	findBy
}

function getUsers() {
	return db('users');
}

function findById(id) {
	return db('users').where('id', id).first();
}

function findBy(filter) {
	return db('users')
		.where(filter)
		.first();
}

async function add(user) {
	const [id] = await db('users').insert(user);
	return findById(id);
}