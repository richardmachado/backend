exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "richard1",
          password:
            "$2a$12$GMts6/RkdasN0T1x/9nwueVgTfdtKtXDvqWW2JNJXvnOSMQ4J.j3u",
        },
        {
          id: 2,
          username: "richard2",
          password:
            "$2a$12$GMts6/RkdasN0T1x/9nwueVgTfdtKtXDvqWW2JNJXvnOSMQ4J.j3u",
        },
      ]);
    });
};
