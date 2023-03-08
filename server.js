const express = require("express");
const { sequelize } = require("./db");
const { loadingRoutes } = require("./routes/restaurants");
const app = express();

const port = 3000;

//TODO: Create your GET Request Route Below:

loadingRoutes(app);

// middleware for body and for url-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  sequelize.sync();
  console.log("Your server is listening on port " + port);
});

module.exports = app;
