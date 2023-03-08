const express = require("express");
const { sequelize } = require("./db");
const { loadingRoutes } = require("./routes/restaurants");
const app = express();

const port = 3000;

//TODO: Create your GET Request Route Below:

loadingRoutes(app);

app.listen(port, () => {
  sequelize.sync();
  console.log("Your server is listening on port " + port);
});

module.exports = app;
