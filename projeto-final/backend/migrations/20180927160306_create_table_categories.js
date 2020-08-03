
exports.up = function(knex, Promise) {
    return knex.schema.createTable('categories', table => {
        table.increments('id').primary().notNull()
        table.string('name').notNull()
        table.integer('parentId')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('categories')
};
