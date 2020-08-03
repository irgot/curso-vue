// Update with your config settings.

module.exports = {
    client: "mysql",
    connection: {
        host:'127.0.0.1',
        database: "knowledge",
        user: "knowledge",
        password: "knowledge",
        port: 3306,        
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        tableName: "knex_migrations",
    }
};
