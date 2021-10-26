const server = require("./api/server");
const chalk = require("chalk");

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log("Server is listening now, live on port " + chalk.red`${port}`);
});
