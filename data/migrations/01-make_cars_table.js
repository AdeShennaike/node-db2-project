exports.up = async function (knex) {
  // DO YOUR MAGIC
  return await knex.schema.createTable('cars', table => {
    table.increments(),
    table.string('vin').unique().notNullable()
    table.string('make').notNullable()
    table.string('model').notNullable()
    table.integer('mileage').notNullable()
    table.string('title')
    table.string('transmission')
  })
};

exports.down = async function (knex) {
  // DO YOUR MAGIC
  return await knex.schema.dropTableIfExist('cars')
};
