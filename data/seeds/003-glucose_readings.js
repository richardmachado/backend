exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("glucose_reading")
    .delete()
    .then(function () {
      // Inserts seed entries
      return knex("glucose_reading").insert([
        {
          id: 1,
          profile_id: 1,
          glucose_reading: 125,
          created_at: "2021-11-05 01:17:22",
          updated_at: "2021-11-05 01:17:22",
          taken_at: "2021-11-05 01:17:22"
        },
      ]);
    });
};
