exports.up = function(knex) {
    return knex.schema.createTable('vehicle', function(table){
        table.increments('id').primary();
        table.string('vehicle').notNullable();
        table.string('brand').notNullable();
        table.integer('year');
        table.text('description');
        table.boolean('sold').default(false);
        table.datetime('created').defaultTo(knex.fn.now());
        table.datetime('updated');
    });
        
};

exports.down = function(knex) {
  return knex.schema.dropTable('vehicle');
};
