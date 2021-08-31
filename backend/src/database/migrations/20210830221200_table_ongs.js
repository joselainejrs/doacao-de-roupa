
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table) {
        table.increments('id').primary;
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('contato').notNullable();
        table.string('senha').notNullable();

        table.timestamp('created_at')
        .defaultTo(knex.fn.now())
        .notNullable();

      })
};

exports.down = function(knex) {
    return knex.schema.droptable('ongs');
  
};


