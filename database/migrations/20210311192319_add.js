exports.up = function (knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();

        tbl.string('username', 128)
            .notNullable()
            .unique();

        tbl.string('password', 128)
            .notNullable();
    })
        .createTable('recipes', tbl => {
            tbl.increments();

            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');

            tbl.string('title', 128)
                .notNullable();

            tbl.string('description', 255)
                .notNullable();
        })
        .createTable('steps', tbl => {
            tbl.increments();

            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');

            tbl.string('instruction')
                .notNullable();

            tbl.integer('step_num')
                .unsigned()
                .notNullable();
        })
        .createTable('ingredients', tbl => {
            tbl.increments();

            tbl.string('name', 255)
                .notNullable()
                .unique();
        })
        .createTable('recipes_ingredients', tbl => {
            tbl.increments();

            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');

            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('ingredients')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');

            tbl.boolean('has_ingredient')
                .notNullable()
                .defaultTo(false);

            tbl.string('units', 128);
            tbl.string('amount', 128);
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipes_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes')
        .dropTableIfExists('users');
};