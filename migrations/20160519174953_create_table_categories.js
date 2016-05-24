
exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', function(table) {
    table.increments('id'),
    table.string('category').unique()
  })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories');
};
