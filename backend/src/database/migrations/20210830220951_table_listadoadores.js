exports.up = function(knex) {
    return knex.schema.createTable('lista_doadores', function (table) {
        table.increments('id').primary();

        table.integer('dados_id')
        .notNullable()
        .references('id')
        .inTable('novos_doadores');
      })
};

exports.down = function(knex) {
    return knex.schema.droptable('lista_doadores');
};
