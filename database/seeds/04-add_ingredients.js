
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, name: 'Crabmeat' },
        { id: 2, name: 'Bread Crumbs' },
        { id: 3, name: 'Parsley' },
        { id: 4, name: 'Egg' },
        { id: 5, name: 'Salt' },
        { id: 6, name: 'Pepper' },
        { id: 7, name: 'Mayonnaise' },
        { id: 8, name: 'Ground Dry Mustard' },
        { id: 9, name: 'Hot pepper sauce' },
        { id: 10, name: 'Pack of Ramen Noodles' },
        { id: 11, name: 'Sesame Oil' },
        { id: 12, name: 'Garlic' },
        { id: 13, name: 'Soya Sauce' },
        { id: 14, name: 'Brown Sugar' },
        { id: 15, name: 'Siracha' },
        { id: 16, name: 'Sugar' },
        { id: 17, name: 'all-purpose flour' },
        { id: 18, name: 'ground cinnamon' },
        { id: 19, name: 'ground ginger' },
        { id: 20, name: ' ground nutmeg' },
        { id: 21, name: 'apples' },
        { id: 22, name: 'lemon juice' },
        { id: 23, name: 'double-crust pie' },
        { id: 24, name: 'butter' }
      ]);
    });
};
