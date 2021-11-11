exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("profile")
    .delete()
    .then(function () {
      // Inserts seed entries
      return knex("profile").insert([
        {
          id: 1,
          user_id: 1,
          first_name: "bobbie",
          last_name: "bouchier",
          age: "45",
        },
        {
          id: 2,
          user_id: 2,
          first_name: "richard",
          last_name: "machado",
          age: "47",
        },
      ]);
    });
};
