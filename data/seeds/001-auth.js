exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .delete()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "richard1",
          password:
            "$2a$12$GMts6/RkdasN0T1x/9nwueVgTfdtKtXDvqWW2JNJXvnOSMQ4J.j3u",
          isAdmin: true,
        },
        {
          id: 2,
          username: "richard2",
          password:
            "$2a$12$GMts6/RkdasN0T1x/9nwueVgTfdtKtXDvqWW2JNJXvnOSMQ4J.j3u",
          isAdmin: false,
        },
      ]);
    });
};
