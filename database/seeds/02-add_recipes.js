
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { id: 1, user_id: 1, title: 'Crab Cakes', description: 'Small summary about recipe'},
        { id: 2, user_id: 1, title: 'Apple Pie', description: 'Small summary about recipe' },
        { id: 3, user_id: 2, title: 'Sesame Garlic Ramen Noodles', description: 'Small summary about recipe' }
      ]);
    });
};