const app = require("../server");

const { Restaurant } = require("../models/index");

console.log("outside function");

const loadingRoutes = (app) => {
  console.log("loading routes...");
  app.get("/restaurants", async (req, res) => {
    const restaurants = await Restaurant.findAll();
    res.json(restaurants);
  });

  // get route with id parameter
  // gets a restaurant by id as primary key
  app.get("/restaurants/:id", async (req, res) => {
    const restaurant = await Restaurant.findByPk(req.params.id);
    res.json(restaurant);
  });

  //POST
  app.post("/restaurant", async (req, res) => {
    const restaurant = await Restaurant.create(req.body);
    res.json(restaurant);
  });

  //PUT
  app.put("/restaurant/:id", async (req, res) => {
    const { id } = req.params;
    const restaurant = await Restaurant.findByPk(id);
    try {
      await restaurant.update(req.body);
    } catch (err) {
      return res.status(400).json({ error: err });
    }
    res.status(200).json(restaurant);
  });

  app.delete("/restaurant/:id", async (req, res) => {
    const { id } = req.params;
    const restaurant = await Restaurant.findByPk(id);
    await restaurant.destroy();
    res.status(200).json(restaurant);
  });
};

module.exports = { loadingRoutes };
