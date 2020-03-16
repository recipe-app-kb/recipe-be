const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'yoshi', password: bcrypt.hashSync('play', 8)},
        { id: 2, username: 'mello', password: bcrypt.hashSync('bello', 8)},
        { id: 3, username: 'pepper', password: bcrypt.hashSync('sleep', 8)}
      ]);
    });
};
