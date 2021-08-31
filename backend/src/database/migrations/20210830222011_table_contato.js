exports.up = function(knex) {
    return knex.schema.createTable('contato', function (table) {
        table.increments('id');
        table.string('dd').notNullable();
        table.string('numero').notNullable();
            
        table.integer('ong_id')
        .notNullable()
        .references('id')
        .inTable('ongs');

        table.integer('endereco_id')
        .notNullable()
        .references('id')
        .inTable('endereco');

      })
  
};

exports.down = function(knex) {
    return knex.schema.droptable('contato');
  
};
