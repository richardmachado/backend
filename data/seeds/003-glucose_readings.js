
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('glucose_reading').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('glucose_reading').insert([
        {
          id: 1,
          profile_id:1,
          glucose_reading: 125,
          created_at: Date.now(),
          updated_at: Date.now(),
          taken_at:Date.now()
        },

      ]);
    });
};
