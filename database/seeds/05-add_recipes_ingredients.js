
exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('recipes_ingredients').truncate()
		.then(function () {
			// Inserts seed entries
			return knex('recipes_ingredients').insert([
				{ id: 1, recipe_id: 1, ingredient_id: 1, has_ingredient: false, units: 'pounds', amount: '1' },
				{ id: 2, recipe_id: 1, ingredient_id: 2, has_ingredient: false, units: 'tablespoon', amount: '1.5' },
				{ id: 3, recipe_id: 1, ingredient_id: 3, has_ingredient: true, units: 'teaspoon', amount: '2' },
				{ id: 4, recipe_id: 1, ingredient_id: 4, has_ingredient: false, units: '', amount: '1' },
				{ id: 5, recipe_id: 1, ingredient_id: 5, has_ingredient: false, units: '', amount: 'To taste' },
				{ id: 6, recipe_id: 1, ingredient_id: 6, has_ingredient: false, units: '', amount: 'To taste' },
				{ id: 7, recipe_id: 1, ingredient_id: 7, has_ingredient: false, units: 'tablespoon', amount: '1.5' },
				{ id: 8, recipe_id: 1, ingredient_id: 8, has_ingredient: false, units: 'teasppon', amount: '0.5' },
				{ id: 9, recipe_id: 1, ingredient_id: 9, has_ingredient: false, units: 'dash', amount: '1' },
				{ id: 10, recipe_id: 2, ingredient_id: 16, has_ingredient: false, units: 'cup', amount: '1.5' },
				{ id: 11, recipe_id: 2, ingredient_id: 14, has_ingredient: false, units: 'cup', amount: '0.5' },
				{ id: 12, recipe_id: 2, ingredient_id: 17, has_ingredient: false, units: 'tablespoon', amount: '3' },
				{ id: 13, recipe_id: 2, ingredient_id: 18, has_ingredient: false, units: 'teaspoon', amount: '1' },
				{ id: 14, recipe_id: 2, ingredient_id: 19, has_ingredient: false, units: 'teaspoon', amount: '0.25' },
				{ id: 15, recipe_id: 2, ingredient_id: 20, has_ingredient: false, units: 'teaspoon', amount: '0.25' },
				{ id: 16, recipe_id: 2, ingredient_id: 22, has_ingredient: false, units: 'tablespoon', amount: '1' },
				{ id: 17, recipe_id: 2, ingredient_id: 21, has_ingredient: false, units: '', amount: '' },
				{ id: 18, recipe_id: 2, ingredient_id: 24, has_ingredient: false, units: 'tablespoon', amount: '1' },
				{ id: 19, recipe_id: 2, ingredient_id: 4, has_ingredient: false, units: '', amount: '1' },
				{ id: 20, recipe_id: 3, ingredient_id: 10, has_ingredient: false, units: 'ounces', amount: '2-3' },
				{ id: 21, recipe_id: 3, ingredient_id: 11, has_ingredient: false, units: 'teaspoon', amount: '2' },
				{ id: 22, recipe_id: 3, ingredient_id: 12, has_ingredient: false, units: 'cloves', amount: '2' },
				{ id: 23, recipe_id: 3, ingredient_id: 13, has_ingredient: false, units: 'cup', amount: '0.25' },
				{ id: 24, recipe_id: 3, ingredient_id: 14, has_ingredient: false, units: 'teaspoon', amount: '1' },
				{ id: 25, recipe_id: 3, ingredient_id: 15, has_ingredient: false, units: 'teaspoon', amount: '2' },
			]);
		});
};
