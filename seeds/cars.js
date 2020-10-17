
exports.seed = async function(knex) {
  await knex("cars").insert([
    {
      VIN: 1,
      make:"Honda",
      model:"S2000",
      mileage:123000,
      transmission:"automatic",
      status: "clean"
    },
  ])
}
