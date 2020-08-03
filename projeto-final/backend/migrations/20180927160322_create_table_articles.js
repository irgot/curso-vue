
exports.up = function(knex, Promise) {
    return knex.schema.createTable('articles', table => {
        table.increments('id').primary().notNull()
        table.string('name').notNull()
        table.string('description', 1000).notNull()
        table.string('imageUrl', 1000)
        table.binary('content').notNull()
        table.integer('userId').notNull()
        table.integer('categoryId')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('articles')
};
