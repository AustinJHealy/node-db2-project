
exports.up = async function(knex) {
  await knex.schema.createTable("cars", (table)=> {
      table.integer("VIN").notNull().unique()
      table.text("make").notNull()
      table.text("model").notNull()
      table.integer("mileage").notNull()
      table.text("transmission")
      table.text("status")
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("cars")
};
