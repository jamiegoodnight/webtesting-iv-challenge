exports.up = function(knex, Promise) {
  return knex.schema.createTable("kaiju", tbl => {
    tbl.increments();
    tbl
      .string("kaiju", 128)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  dropTableIfExists("kaiju");
};
