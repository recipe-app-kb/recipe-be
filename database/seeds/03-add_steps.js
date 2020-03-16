
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { id: 1, recipe_id: 1, instruction: 'Preheat oven broiler.', step_num: 1 },
        { id: 2, recipe_id: 1, instruction: 'Mix together crabmeat, bread crumbs, parsley, salt and pepper.', step_num: 2 },
        { id: 3, recipe_id: 1, instruction: 'Beat together egg, mayonnaise, hot sauce and mustard. Combine with other ingredients and mix well. Form into patties and place on a lightly greased broiler pan or baking sheet.', step_num: 3 },
        { id: 4, recipe_id: 1, instruction: 'Broil for 10 to 15 minutes, until lightly brown.', step_num: 4 },
        { id: 5, recipe_id: 2, instruction: 'In a small bowl, combine the sugars, flour and spices; set aside. In a large bowl, toss apples with lemon juice. Add sugar mixture; toss to coat.', step_num: 1 },
        { id: 6, recipe_id: 2, instruction: 'Line a 9-in. pie plate with bottom crust; trim even with edge. Fill with apple mixture; dot with butter. Roll remaining crust to fit top of pie; place over filling. Trim, seal and flute edges. Cut slits in crust.', step_num: 2 },
        { id: 7, recipe_id: 2, instruction: 'Beat egg white until foamy; brush over crust. Sprinkle with sugar. Cover edges loosely with foil.', step_num: 3 },
        { id: 8, recipe_id: 2, instruction: 'Bake at 375° for 25 minutes. Remove foil and bake until crust is golden brown and filling is bubbly, 20-25 minutes longer. Cool on a wire rack.', step_num: 4 },
        { id: 9, recipe_id: 3, instruction: 'Cook the ramen noodles without the seasoning packet as directed on package. Drain and set aside.', step_num: 1 },
        { id: 10, recipe_id: 3, instruction: 'Heat the sesame oil in a small skillet or saucepan over medium heat.', step_num: 2 },
        { id: 11, recipe_id: 3, instruction: 'Cook the garlic, stirring constantly for 2 minutes', step_num: 3 },
        { id: 12, recipe_id: 3, instruction: 'Remove the pan from the heat and whisk in the soy sauce, brown sugar, and sriracha until combined.', step_num: 4 },
        { id: 13, recipe_id: 3, instruction: 'Toss the noodles with the sauce.', step_num: 5 },
        { id: 14, recipe_id: 3, instruction: 'Garnish with green onions if desired.', step_num: 6 }
      ]);
    });
};
